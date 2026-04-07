# API Documentation - JARVIS 3.0

Base URL: `http://localhost:5000/api`

---

## Endpoints

### 1. **Health Check**

Check if the API is running and configured.

```http
GET /health
```

**Response (200 OK):**
```json
{
  "status": "ok",
  "version": "3.0.0",
  "gemini_configured": true
}
```

---

### 2. **Send Message**

Send a message and get a response from Gemini AI.

```http
POST /chat
Content-Type: application/json

{
  "message": "Explain quantum computing in simple terms",
  "model": "gemini-pro",
  "temperature": 0.7
}
```

**Query Parameters:**
- `stream` (optional, boolean): Enable chunked response streaming

**Request Body:**
| Field | Type | Required | Description |
|-------|------|----------|-------------|
| `message` | string | ✅ | User's message/prompt |
| `model` | string | ❌ | Model to use (default: `gemini-pro`) |
| `temperature` | number | ❌ | Creativity level 0-1 (default: 0.7) |

**Response (200 OK):**
```json
{
  "response": "Quantum computing uses quantum bits (qubits)...",
  "tokens_used": {
    "prompt": 15,
    "completion": 230,
    "total": 245
  },
  "model": "gemini-pro",
  "timestamp": "2024-01-15T10:30:00Z"
}
```

**Error (400 Bad Request):**
```json
{
  "error": "Message cannot be empty",
  "code": "INVALID_MESSAGE"
}
```

**Error (401 Unauthorized):**
```json
{
  "error": "API key not configured",
  "code": "MISSING_API_KEY"
}
```

---

### 3. **Get Conversation History**

Retrieve previous messages in the conversation.

```http
GET /history?limit=50
```

**Query Parameters:**
| Parameter | Type | Default | Description |
|-----------|------|---------|-------------|
| `limit` | integer | 50 | Max messages to return |
| `offset` | integer | 0 | Skip first N messages |

**Response (200 OK):**
```json
{
  "messages": [
    {
      "id": "msg_123",
      "role": "user",
      "content": "What is AI?",
      "timestamp": "2024-01-15T10:25:00Z"
    },
    {
      "id": "msg_124",
      "role": "assistant",
      "content": "Artificial Intelligence is...",
      "timestamp": "2024-01-15T10:25:15Z"
    }
  ],
  "total_messages": 42
}
```

---

### 4. **Clear Conversation**

Delete all messages from the conversation history.

```http
POST /clear
```

**Response (200 OK):**
```json
{
  "status": "cleared",
  "message": "Conversation history cleared"
}
```

---

### 5. **List Available Models**

Get list of available Gemini models.

```http
GET /models
```

**Response (200 OK):**
```json
{
  "models": [
    {
      "name": "gemini-pro",
      "description": "Standard generative model",
      "supported_features": ["text", "code"]
    },
    {
      "name": "gemini-pro-vision",
      "description": "Multimodal model with vision",
      "supported_features": ["text", "image", "code"]
    }
  ]
}
```

---

## Error Codes

| Code | HTTP | Description |
|------|------|-------------|
| `INVALID_MESSAGE` | 400 | Message is empty or invalid |
| `MISSING_API_KEY` | 401 | Gemini API key not configured |
| `API_ERROR` | 502 | Gemini API returned an error |
| `RATE_LIMITED` | 429 | Rate limit exceeded |
| `INTERNAL_ERROR` | 500 | Server error |

---

## Rate Limiting

Currently no rate limiting. Future versions will implement:
- Max 60 requests per minute per IP
- Max 10,000 tokens per day per API key

---

## Authentication

Future versions will support:
- API keys for programmatic access
- OAuth for web apps
- JWT tokens for mobile apps

---

## Examples

### Python Client

```python
import requests

API_BASE = "http://localhost:5000/api"

def send_message(message):
    response = requests.post(
        f"{API_BASE}/chat",
        json={"message": message}
    )
    return response.json()

# Usage
result = send_message("What is machine learning?")
print(result["response"])
```

### JavaScript/Fetch

```javascript
const API_BASE = "http://localhost:5000/api";

async function sendMessage(message) {
  const response = await fetch(`${API_BASE}/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message })
  });
  return await response.json();
}

// Usage
sendMessage("What is machine learning?")
  .then(data => console.log(data.response));
```

### cURL

```bash
curl -X POST http://localhost:5000/api/chat \
  -H "Content-Type: application/json" \
  -d '{
    "message": "What is machine learning?"
  }'
```

---

## Response Types

### Streaming Response (Future)

When `?stream=true`:
```
data: {"chunk": "Quantum", "tokens": 1}\n
data: {"chunk": " computing", "tokens": 1}\n
data: {"chunk": " uses...", "tokens": 2}\n
```

---

## CORS

The API accepts requests from:
- `http://localhost:5173` (Vite dev server)
- `http://localhost:5000` (Flask dev server)
- Production domain (when deployed)

---

## Changelog

### v3.0.0
- Initial API release
- Basic chat endpoint
- History management
- Model selection

### v3.1.0 (Planned)
- Streaming responses
- File upload support
- Conversation persistence
- Advanced settings

---

## Support

- **Issues:** Open a GitHub issue
- **Discussions:** GitHub Discussions
- **Email:** tushargkd230@gmail.com

---

[← Back to README](../README.md)
