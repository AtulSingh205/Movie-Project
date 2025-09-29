import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Sbkamalikek from './Context/Sbkamalikek.jsx'

createRoot(document.getElementById('root')).render(

    <Sbkamalikek>
           <App />
    </Sbkamalikek>

)
