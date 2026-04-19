import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [status, setStatus] = useState('Checking API...')
  const [apiHealthy, setApiHealthy] = useState(false)

  useEffect(() => {
    // Check backend health on component mount
    fetch('http://localhost:5000/api/health')
      .then(res => res.json())
      .then(data => {
        setApiHealthy(true)
        setStatus('✓ Connected to backend')
      })
      .catch(err => {
        setApiHealthy(false)
        setStatus('✗ Backend unreachable')
      })
  }, [])

  return (
    <div className="app">
      <div className="container">
        <h1>JARVIS 3.0</h1>
        <p className="subtitle">Multimodal AI Assistant</p>
        <div className={`status ${apiHealthy ? 'healthy' : 'unhealthy'}`}>
          {status}
        </div>
      </div>
    </div>
  )
}

export default App
