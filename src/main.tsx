import React from 'react'
import ReactDOM from 'react-dom/client'
import App from '@/components/App/App'
import Icons from './components/ui/Icons/Icons'
import '@/styles/reset.css'
import '@/styles/globals.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Icons />
		<App />
	</React.StrictMode>
)
