import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-900">
      <header className="mb-8">
        <div className="flex space-x-4 justify-center">
          <a href="https://vitejs.dev" target="_blank" rel="noopener noreferrer">
            <img src={viteLogo} className="h-24 logo hover:scale-110 transition-transform" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} className="h-24 logo react hover:scale-110 transition-transform" alt="React logo" />
          </a>
        </div>
      </header>

      <main className="text-center">
        <h1 className="text-5xl font-bold mb-6 text-blue-600">Vite + React</h1>
        <div className="card mb-8">
          <button
            onClick={() => setCount(count + 1)}
            className="px-6 py-2 text-lg bg-red-500 hover:bg-red-700 text-white font-semibold rounded-lg transition-colors"
          >
            Count is {count}
          </button>
        </div>

        <p className="mb-4 text-gray-700">
          Edit <code className="bg-gray-200 p-1 rounded">src/App.jsx</code> and save to test HMR.
        </p>

        <p className="read-the-docs text-green-500 hover:text-green-700">
          Click on the Vite and React logos to learn more.
        </p>
      </main>

      <footer className="mt-10">
        <p className="text-lg font-medium bg-green-500 text-white p-4 rounded">
          Hola mundo
        </p>
      </footer>
    </div>
  )
}

export default App
