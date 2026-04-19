# JARVIS 3.0 - Project Structure

All source now lives under the `jarvis` package inside `src/`, with web assets bundled under the package for a single source of truth.

## 📁 Directory Structure

```
JARVIS-3.0/
├── .venv/                    ✅ Virtual environment active
├── frontend/
│   ├── src/                  ✅ React source (CREATED)
│   │   ├── main.jsx          ✅ Entry point
│   │   ├── App.jsx           ✅ Main component
│   │   ├── App.css
│   │   └── index.css
│   ├── index.html            ✅ HTML template
│   ├── public/               ✅ Static assets
│   ├── package.json          ✅ Updated with React/Vite
│   ├── vite.config.js        ✅ Configured for port 5000 proxy
│   └── node_modules/         ✅ 227 packages installed
├── src/
│   └── jarvis/
│       ├── api/              ✅ Gemini API integration
│       ├── web/              ✅ Flask web app
│       ├── desktop/          ✅ Tkinter desktop UI
│       └── config/           ✅ Settings
├── requirements.txt          ✅ Updated (48 packages)
├── run_web.py               ✅ Starts Flask
├── run_desktop.py           ✅ Starts Tkinter app
├── app.py                   ✅ Flask alt entry point
├── .env                     ⚠️  Needs GEMINI_API_KEY
├── .env.example             ✅ Template
└── .gitignore              ✅ Updated
```

## 🚀 Running the Applications

On Windows (cmd):
```bash
set PYTHONPATH=%cd%\src
python run_web.py
python run_desktop.py
```

CLI API interface:
```bash
set PYTHONPATH=%cd%\src
python -m jarvis.api.cli
```

## 📦 Module Highlights

- `jarvis.web`: Flask app factory + bundled `templates/` and `static/`
- `jarvis.api`: Gemini client + Flask routes + CLI helpers
- `jarvis.desktop`: Tkinter desktop UI, controllers, motion/voice/camera
- `jarvis.config`: Centralized settings via environment variables
- `jarvis.utils`: Cross-cutting helper utilities

## 🔧 Configuration

Settings live in `jarvis.config.settings` and read environment variables:
- `GEMINI_API_KEY`, `GEMINI_MODEL`
- `FLASK_HOST`, `FLASK_PORT`, `FLASK_DEBUG`
- Desktop tuning values (gesture cooldown, timeouts, etc.)

## 🔄 Notes

- Static assets and templates now live under `src/jarvis/web/`.
- Entry scripts (`app.py`, `run_web.py`, `run_desktop.py`) ensure `./src` is on `PYTHONPATH` before importing `jarvis`.

