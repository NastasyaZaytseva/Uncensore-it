# Deployment Guide

## Environment Variables Required

Add these to your Vercel project settings:

### MongoDB Connection
```
MONGODB_URI=mongodb+srv://UncensoreIT:<password>@cluster0.colpr23.mongodb.net/?appName=Cluster0
MONGODB_DB=uncensorit
```

## MongoDB Atlas Setup

1. **Network Access**: Allow `0.0.0.0/0` (all IPs)
2. **Database User**: Username `UncensoreIT` with password
3. **Database**: `uncensorit`
4. **Collection**: `contributions` (auto-created)

## Local Development

Create `.env.local` file:
```
MONGODB_URI=mongodb+srv://UncensoreIT:<password>@cluster0.colpr23.mongodb.net/?appName=Cluster0
MONGODB_DB=uncensorit
```

## Deploy

After adding environment variables in Vercel:
1. Push code to GitHub
2. Vercel will auto-deploy
3. Or manually trigger redeploy in Vercel dashboard

