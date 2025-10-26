import clientPromise from '../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { suggestedWord } = req.body;

      // Validate required field
      if (!suggestedWord || suggestedWord.trim() === '') {
        return res.status(400).json({ error: 'Word is required' });
      }

      // Connect to MongoDB
      const client = await clientPromise;
      const db = client.db(process.env.MONGODB_DB || 'uncensorit');
      const collection = db.collection('contributions');

      // Create contribution object
      const contribution = {
        word: suggestedWord.trim(),
        timestamp: new Date(),
        status: 'pending',
        createdAt: new Date(),
      };

      // Insert into MongoDB
      const result = await collection.insertOne(contribution);

      // Log the contribution (for development)
      console.log('New word suggestion received:', {
        word: contribution.word,
        timestamp: contribution.timestamp,
        id: result.insertedId
      });

      res.status(200).json({ 
        message: 'Word suggestion submitted successfully',
        id: result.insertedId
      });

    } catch (error) {
      console.error('Error processing word suggestion:', error);
      res.status(500).json({ 
        error: 'Internal server error',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      });
    }
  } else if (req.method === 'GET') {
    // Optional: Get all contributions (for admin use)
    try {
      const client = await clientPromise;
      const db = client.db(process.env.MONGODB_DB || 'uncensorit');
      const collection = db.collection('contributions');

      const contributions = await collection
        .find({})
        .sort({ timestamp: -1 })
        .limit(100)
        .toArray();

      res.status(200).json({ contributions });
    } catch (error) {
      console.error('Error fetching contributions:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}
