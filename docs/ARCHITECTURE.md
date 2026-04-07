# System Architecture - JARVIS 3.0

## Overview

JARVIS 3.0 is built with a **decoupled architecture** separating frontend and backend for scalability and independent deployment.

```
┌─────────────────────────────────────────────────────┐
│                  Frontend Layer (React)              │
│  ● User Interface (Web, Mobile-responsive)          │
│  ● HTTP REST Client calls                           │
│  ● Real-time message streaming                      │
│  ● State management                                 │
└────────────────────┬────────────────────────────────┘
                     │ HTTP/JSON
                     ▼
┌─────────────────────────────────────────────────────┐
│              Backend Layer (Flask)                   │
│  ● RESTful API endpoints                            │
│  ● CORS-enabled for web clients                     │
│  ● Request validation & processing                  │
│  ● Session management                              │
└────────────────────┬────────────────────────────────┘
                     │ Library calls
                     ▼
┌─────────────────────────────────────────────────────┐
│         Gemini Integration Layer                     │
│  ● Google Generative AI SDK                         │
│  ● Prompt engineering & model config                │
│  ● Token counting & optimization                    │
│  ● Response streaming support                       │
└─────────────────────────────────────────────────────┘
```

---

## Directory Structure Deep Dive

### `frontend/` - React + Vite Web UI

```
frontend/
├── src/
│   ├── App.jsx              # Root component
│   ├── index.css            # Global styles
│   ├── main.jsx             # React entry point
│   ├── components/          # Reusable UI components
│   ├── pages/               # Page-level components
│   ├── hooks/               # Custom React hooks
│   ├── utils/               # Helper utilities
│   └── services/            # API client services
├── public/
│   └── index.html           # HTML template
├── package.json             # Dependencies & scripts
└── vite.config.js           # Vite configuration + GitHub Pages
```

**Deployment:** Automatically deployed to GitHub Pages on every push to `main` branch.

---

### `src/jarvis/` - Python Backend

```
src/jarvis/
├── __init__.py
├── api/
│   ├── __init__.py
│   ├── gemini_client.py     # Gemini API wrapper
│   ├── routes.py            # Flask route definitions
│   ├── cli.py               # Command-line interface
│   └── new_api.py           # Extended API features
├── config/
│   ├── __init__.py
│   └── settings.py          # Environment configuration
├── desktop/
│   ├── __init__.py
│   ├── app.py               # Tkinter desktop app
│   ├── command_processor.py # Command handling
│   ├── camera/
│   │   └── camera_controller.py
│   ├── gui/
│   │   └── components.py
│   ├── motion/
│   │   └── gesture_recognizer.py
│   └── voice/
│       └── voice_controller.py
├── web/
│   ├── app.py               # Flask app factory
│   ├── templates/
│   │   └── index.html       # Flask template (fallback)
│   └── static/              # Static files (CSS, JS)
├── utils/
│   └── helpers.py           # Utility functions
└── version.py               # Version info
```

---

## Component Architecture

### Frontend Components

```
App.jsx (Root)
├── Header
│   ├── Logo
│   ├── Navigation
│   └── ThemeToggle
├── Chat Interface
│   ├── MessageList
│   │   └── Message (user/assistant)
│   ├── InputArea
│   │   └── TextInput
│   │   └── SendButton
│   └── Suggestions
├── Settings Panel
│   ├── ApiKeyInput
│   ├── ModelSelector
│   └── ThemeSettings
└── Footer
    └── Links
```

### Backend Routes

```
Flask App
├── /                        # Root (serves index.html)
├── /api/
│   ├── chat (POST)          # Send message to Gemini
│   ├── history (GET)        # Get conversation history
│   ├── clear (POST)         # Clear history
│   ├── models (GET)         # List available models
│   └── health (GET)         # Health check
├── /static/                 # Static assets
└── /error                   # Error handlers
```

---

## Data Flow

### Chat Message Flow

```
1. User Types Message
   ▼
2. Frontend validates & prepares message
   ▼
3. POST /api/chat with message
   ▼
4. Backend receives & processes
   ▼
5. Call Gemini API with message
   ▼
6. Stream response back to frontend
   ▼
7. Frontend displays response in real-time
   ▼
8. Store in conversation history
```

### API Request/Response Example

**Request:**
```json
POST /api/chat
{
  "message": "What is quantum computing?",
  "model": "gemini-pro"
}
```

**Response:**
```json
{
  "response": "Quantum computing uses quantum bits...",
  "tokens_used": 245,
  "timestamp": "2024-01-15T10:30:00Z"
}
```

---

## Technology Choices & Rationale

| Layer | Technology | Why |
|-------|-----------|-----|
| Frontend | React | Popular, large ecosystem, excellent maintainability |
| Builder | Vite | 10x faster than Webpack, modern ESM support |
| Backend | Flask | Lightweight, flexible, perfect for API-first design |
| AI | Gemini API | Free tier, multimodal support, excellent quality |
| Desktop | Tkinter | Built-in Python, no extra dependencies |

---

## Deployment Architecture

### Frontend (GitHub Pages)
- **Static hosting** on GitHub Pages
- **Automatic deployment** via GitHub Actions  
- **CDN delivery** for fast access globally
- **URL:** `https://tusharkantimahato7.github.io/Jarvis-3.0/`

### Backend (Multiple Options)
- **Development:** Local Flask server
- **Staging:** Heroku/Railway for testing
- **Production:** AWS/DigitalOcean for scale

---

## Security Considerations

### API Key Management
- ❌ Never commit `.env` file (in `.gitignore`)
- ✅ Use environment variables
- ✅ Validate API keys server-side

### CORS Configuration
- ✅ Explicitly define allowed origins
- ✅ Restrict to production domain in prod
- ❌ Avoid `*` in production

### Request Validation
- ✅ Validate message length
- ✅ Sanitize user input
- ✅ Rate limiting (recommended)

---

## Performance Optimizations

### Frontend
- ✅ Code splitting with dynamic imports
- ✅ Lazy load heavy components
- ✅ Memoization for expensive renders
- ✅ Debounce input handlers

### Backend
- ✅ Connection pooling
- ✅ Request caching where possible
- ✅ Async/streaming for long operations
- ✅ Minimal dependencies

### Bundle Size
- Vite automatically tree-shakes unused code
- React production build is ~40KB gzipped
- Current: ~90KB total with Vite

---

## Scalability Path

### Current (v3.0)
- Single backend instance OK
- Suitable for <1000 concurrent users

### Phase 1 (v3.5)
- Add Redis for caching
- Implement message queue (Celery/RQ)
- Database for history (PostgreSQL)

### Phase 2 (v4.0)
- Horizontal scaling with load balancer
- Microservices for specialized tasks
- WebSocket support for real-time updates

---

## Testing Strategy

### Frontend Testing
```bash
npm test                    # Unit tests (Jest)
npm run test:e2e           # E2E tests (Playwright)
npm run test:coverage      # Coverage report
```

### Backend Testing
```bash
pytest                      # Unit tests
pytest --cov               # Coverage analysis  
python -m pytest tests/     # Specific directory
```

---

## Monitoring & Debugging

### Development
- Chrome DevTools for frontend
- Flask debug toolbar
- Python logging module

### Production
- Error tracking: Sentry
- Performance: New Relic
- Logs: CloudWatch / ELK stack

---

## CI/CD Pipeline

```
GitHub Push
    ▼
GitHub Actions Workflow
    ├─ Lint & Format Check
    ├─ Unit Tests (Python & Node)
    ├─ Build Frontend (Vite)
    ├─ Build Backend
    └─ Deploy to GitHub Pages
```

See `.github/workflows/deploy.yml` for implementation.

---

## Contributing to Architecture

If proposing architectural changes:

1. Open an issue describing the change
2. Include pros/cons analysis
3. Provide implementation plan
4. Get maintainer feedback before starting work

---

[← Back to README](README.md) | [Contributing Guide](CONTRIBUTING.md)
