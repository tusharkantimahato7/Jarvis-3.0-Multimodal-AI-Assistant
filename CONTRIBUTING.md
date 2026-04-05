# Contributing to JARVIS 3.0

Thank you for your interest in contributing! We welcome contributions from everyone.

## Code of Conduct

Be respectful, inclusive, and professional in all interactions.

## Getting Started

### Fork & Clone
```bash
git clone https://github.com/YOUR_USERNAME/Jarvis-3.0-Multimodal-AI-Assistant.git
cd Jarvis-3.0-Multimodal-AI-Assistant
```

### Set Up Development Environment

**Backend (Python):**
```bash
python -m venv venv
source venv/Scripts/activate  # Windows
python -m pip install -r requirements.txt
```

**Frontend (React):**
```bash
cd frontend
npm install
npm run dev
```

## Making Changes

1. **Create a feature branch:**
   ```bash
   git checkout -b feature/amazing-feature
   ```

2. **Make your changes** following the existing code style

3. **Write/update tests** if adding new features

4. **Commit with clear messages:**
   ```bash
   git commit -m "feat: add amazing feature"
   ```
   Use conventional commits:
   - `feat:` new feature
   - `fix:` bug fix
   - `docs:` documentation
   - `refactor:` code refactoring
   - `test:` testing

5. **Push and create a Pull Request:**
   ```bash
   git push origin feature/amazing-feature
   ```

## Pull Request Guidelines

- **Title:** Clear and descriptive (e.g., "Add gesture recognition for hand waves")
- **Description:** What problem does this solve?
- **Testing:** Describe how you tested the changes
- **Screenshots:** Include UI screenshots if applicable
- **No breaking changes:** If unavoidable, document them clearly

## Coding Standards

### Python
- Follow PEP 8
- Use type hints where possible
- Write docstrings for functions and classes

### JavaScript/React
- Use ES6+ syntax
- Components should be functional with hooks
- Use meaningful variable/function names
- Add comments for complex logic

## Running Tests

```bash
# Python tests
pytest

# Frontend tests (if configured)
npm test
```

## Reporting Issues

Use GitHub Issues with:
- **Clear title** describing the problem
- **Steps to reproduce**
- **Expected vs actual behavior**
- **Screenshots** (for UI issues)
- **Environment:** OS, Python version, browser, etc.

## Questions?

- Open a GitHub Discussion
- Check existing issues for similar problems
- Join our community on Discord (if available)

---

**Thank you for making JARVIS better! 🚀**
