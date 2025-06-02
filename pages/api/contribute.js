import fs from 'fs';
import path from 'path';

export default function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { suggestedWord, category, reason, recommendation, email } = req.body;

      // Validate required fields
      if (!suggestedWord || !reason) {
        return res.status(400).json({ error: 'Missing required fields' });
      }

      // Create contribution object
      const contribution = {
        id: Date.now().toString(),
        timestamp: new Date().toISOString(),
        suggestedWord: suggestedWord.trim(),
        category: category || 'uncategorized',
        reason: reason.trim(),
        recommendation: recommendation?.trim() || '',
        email: email?.trim() || '',
        status: 'pending'
      };

      // Read existing contributions
      const contributionsPath = path.join(process.cwd(), 'data', 'contributions.json');
      let contributions = [];

      try {
        // Create data directory if it doesn't exist
        const dataDir = path.join(process.cwd(), 'data');
        if (!fs.existsSync(dataDir)) {
          fs.mkdirSync(dataDir, { recursive: true });
        }

        // Read existing contributions if file exists
        if (fs.existsSync(contributionsPath)) {
          const fileContent = fs.readFileSync(contributionsPath, 'utf8');
          contributions = JSON.parse(fileContent);
        }
      } catch (error) {
        console.error('Error reading contributions file:', error);
        contributions = [];
      }

      // Add new contribution
      contributions.push(contribution);

      // Write back to file
      fs.writeFileSync(contributionsPath, JSON.stringify(contributions, null, 2));

      // Log the contribution (for development)
      console.log('New contribution received:', {
        word: contribution.suggestedWord,
        category: contribution.category,
        timestamp: contribution.timestamp
      });

      res.status(200).json({ 
        message: 'Contribution submitted successfully',
        id: contribution.id 
      });

    } catch (error) {
      console.error('Error processing contribution:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
} 