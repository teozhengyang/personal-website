# API Routes

This directory contains serverless functions for the Vercel deployment.

## `/api/chatbot.js`

Handles AI chatbot requests securely on the server-side.

### Environment Variables Required:
- `GROQ_API_KEY` - Your Groq API key (set in Vercel dashboard)

### Request Format:
```json
{
  "message": "User's message",
  "conversationHistory": [
    { "role": "user", "content": "Previous user message" },
    { "role": "assistant", "content": "Previous bot response" }
  ]
}
```

### Response Format:
```json
{
  "response": "AI assistant's response",
  "success": true
}
```

### Error Response:
```json
{
  "error": "Error message",
  "fallback": true
}
```

## Deployment Notes:

1. Set the `GROQ_API_KEY` environment variable in your Vercel project settings
2. Remove `VITE_GROQ_API_KEY` from your environment variables (no longer needed)
3. The API will automatically handle conversation context and fallback responses
