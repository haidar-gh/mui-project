import './App.css'
import RoutesApp from './routes'
import { useRoutes } from 'react-router-dom'
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
function App() {

  let router = useRoutes(RoutesApp)

  return (
    <>
      <Header />
      {router}
      <Footer/>
    </>
  )
}

export default App
