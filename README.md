# 🤖 JARVIS 3.0 - Multimodal AI Assistant

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Python 3.9+](https://img.shields.io/badge/python-3.9+-blue.svg)](https://www.python.org/downloads/)
[![React 18+](https://img.shields.io/badge/react-18+-61dafb.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-5.x-646cff.svg)](https://vitejs.dev/)
[![Built with Heart](https://img.shields.io/badge/built%20with-❤️-red.svg)](#)

A **powerful, modern AI assistant** powered by Google's Gemini API. Featuring a beautiful React web interface, desktop application support, and advanced multimodal capabilities.

---

## ✨ Features

### 💬 **Smart Chat Interface**
- Real-time messaging with Gemini AI
- Message history and conversation persistence
- Quick suggestion chips for common queries
- Export conversations as text

### 🎨 **Beautiful UI/UX**
- Responsive design (desktop, tablet, mobile)
- Dark/Light theme toggle
- Smooth animations and transitions
- Modern, clean interface

### 🖥️ **Multi-Platform Support**
- **Web**: Flask + React/Vite
- **Desktop**: Tkinter-based application
- **API**: RESTful endpoints for integration

### 🚀 **Advanced Features**
- Gesture recognition (hand waves, poses)
- Voice control support
- Camera integration
- Customizable settings panel

### ⚡ **Performance**
- Fast response times
- Optimized bundle size
- Lazy loading
- Progressive enhancement

---

## 🏗️ Project Architecture

```
JARVIS-3.0/
├── frontend/                  # React + Vite (Web UI)
│   ├── src/
│   ├── public/
│   └── package.json
├── src/                       # Python backend
│   └── jarvis/
│       ├── api/              # Gemini API integration
│       ├── web/              # Flask web app
│       ├── desktop/          # Tkinter desktop UI
│       ├── config/           # Configuration
│       └── utils/            # Helper utilities
├── docs/                      # Documentation
├── tests/                     # Test suites
├── requirements.txt           # Python dependencies
├── CONTRIBUTING.md            # Contribution guide
└── DEPLOYMENT.md              # Deployment guide
```

---

## 🛠️ Tech Stack

### Backend
- **Python 3.9+** - Core language
- **Flask 3.0** - Web framework
- **Google Generative AI** - Gemini API integration
- **Flask-CORS** - Cross-origin support
- **Python-dotenv** - Environment configuration

### Frontend
- **React 18** - UI library
- **Vite 5** - Build tool (lightning fast ⚡)
- **Modern CSS3** - Styling
- **Responsive Design** - Mobile-first approach

### Desktop
- **Tkinter** - GUI framework
- **OpenCV** - Camera/gesture recognition
- **MediaPipe** - Gesture detection

---

## 🚀 Quick Start

### Prerequisites
- Python 3.9 or higher
- Node.js 16+ and npm
- Git
- Google Gemini API key ([Get it free here](https://makersuite.google.com/app/apikey))

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/tusharkantimahato7/Jarvis-3.0-Multimodal-AI-Assistant.git
cd Jarvis-3.0-Multimodal-AI-Assistant
```

### 2️⃣ Get Your Gemini API Key

1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click "Create API Key"
4. Copy the key

### 3️⃣ Backend Setup

```bash
# Create virtual environment
python -m venv venv

# Activate it
venv\Scripts\activate      # Windows
source venv/bin/activate   # Mac/Linux

# Install dependencies
pip install -r requirements.txt

# Set API key (Windows)
set GEMINI_API_KEY=your_api_key_here

# Set API key (Mac/Linux)
export GEMINI_API_KEY=your_api_key_here
```

### 4️⃣ Frontend Setup

```bash
cd frontend
npm install
```

### 5️⃣ Run the Application

#### Option A: Web Interface (Recommended)
```bash
# Terminal 1 - Backend
set PYTHONPATH=%cd%\src
python run_web.py

# Terminal 2 - Frontend
cd frontend
npm run dev
```
Then open: **http://localhost:5173**

#### Option B: Use Flask Only
```bash
set PYTHONPATH=%cd%\src
python run_web.py
```
Then open: **http://localhost:5000**

#### Option C: Desktop Application
```bash
set PYTHONPATH=%cd%\src
python run_desktop.py
```

---

## 📖 Usage Examples

### Chat with JARVIS

```python
# Via Web UI
# Simply type your message and hit send!

# Via CLI (if API supports it)
set PYTHONPATH=%cd%\src
python -m jarvis.api.cli
```

### API Integration

```bash
# Start the server
python run_web.py

# Make requests
curl -X POST http://localhost:5000/api/chat \
  -H "Content-Type: application/json" \
  -d '{"message": "Hello JARVIS"}'
```

---

## 🎬 Screenshots

### Web Interface
![JARVIS Web UI](docs/screenshots/web-ui.png)

### Dark Mode
![Dark Mode](docs/screenshots/dark-mode.png)

### Desktop Application  
![Desktop App](docs/screenshots/desktop-app.png)

*Screenshots coming soon! Help us add them by contributing.*

---

## 📚 Documentation

- **[Contributing Guide](CONTRIBUTING.md)** - How to contribute
- **[Deployment Guide](DEPLOYMENT.md)** - Deploy to Heroku, Railway, AWS
- **[API Documentation](docs/API.md)** - RESTful API reference
- **[Architecture Guide](docs/ARCHITECTURE.md)** - System design details

---

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# Gemini API
GEMINI_API_KEY=your_api_key_here
GEMINI_MODEL=gemini-pro

# Flask Settings
FLASK_ENV=development
FLASK_DEBUG=True
FLASK_HOST=0.0.0.0
FLASK_PORT=5000

# CORS Origins (comma-separated)
CORS_ORIGINS=http://localhost:5173,http://localhost:5000
```

### Settings File

Configuration is centralized in `src/jarvis/config/settings.py`:

```python
# Customize API model, timeouts, etc.
```

---

## 🚀 Deployment

### Deploy Frontend to GitHub Pages (Automatic)
✅ Automatic deployment via GitHub Actions on every push to `main`

### Deploy Backend

- **Heroku**: Free tier available, see [DEPLOYMENT.md](DEPLOYMENT.md)
- **Railway.app**: Simple GitHub integration
- **Render.com**: Easy deployment
- **AWS/DigitalOcean**: Production-grade

See [DEPLOYMENT.md](DEPLOYMENT.md) for step-by-step guides.

---

## 🗺️ Roadmap

### v3.1 (Q2 2026)
- [ ] Voice input/output via Web Speech API
- [ ] Image recognition capabilities
- [ ] Conversation memory with vector embeddings
- [ ] Plugin system for custom integrations

### v3.2 (Q3 2026)
- [ ] Real-time collaboration (multiple users)
- [ ] Advanced analytics dashboard
- [ ] Mobile app (React Native)
- [ ] Custom model fine-tuning

### v4.0 (2026+)
- [ ] Autonomous agent mode
- [ ] Integration with productivity tools (Slack, Teams)
- [ ] Local model support (Ollama, LLaMA)
- [ ] Video streaming support

---

## 🤝 Contributing

We ❤️ contributions! Whether it's:
- 🐛 **Bug fixes**
- ✨ **New features**
- 📚 **Documentation improvements**
- 🎨 **UI/UX enhancements**
- 🚀 **Performance optimizations**

Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

### Quick Contribution Steps

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m "feat: add amazing feature"`)
4. Push to your fork (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 💡 Acknowledgments

- **Google Gemini API** - Powering the AI
- **React & Vite communities** - Frontend tooling
- **Flask team** - Backend framework
- **All contributors** - Making JARVIS better!

---

## 📞 Support & Community

- **Issues**: [GitHub Issues](https://github.com/tusharkantimahato7/Jarvis-3.0/issues)
- **Discussions**: [GitHub Discussions](https://github.com/tusharkantimahato7/Jarvis-3.0/discussions)
- **Email**: tushargkd230@gmail.com
- **Twitter**: [tusharkmahato7](https://twitter.com/)

---

## ⭐ Show Your Support

If JARVIS helped you, please consider:
- ⭐ Giving it a **star** on GitHub
- 🔗 Sharing it with friends/colleagues
- 💬 Leaving feedback in Issues/Discussions
- 🤝 Contributing code or documentation

---

<div align="center">

**Made with ❤️ by the JARVIS community**

[⬆ Back to top](#-jarvis-30---multimodal-ai-assistant)

</div>
