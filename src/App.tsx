import './App.css'
import Page from './app/dashboard/page2'
import { ThemeProvider } from './components/theme-provider'

function App() {
  

  return (
    <>
     <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <Page/>
    </ThemeProvider>
    </>
  )
}

export default App
