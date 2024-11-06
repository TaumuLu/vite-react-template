import ReactDOM from 'react-dom/client'

import App from './home/App.tsx'

import './styles/index.scss'

console.log('commit-hash', __COMMIT_HASH__)

ReactDOM.createRoot(document.getElementById('root')!).render(
  // <React.StrictMode>
  <App />,
  // </React.StrictMode>,
)
