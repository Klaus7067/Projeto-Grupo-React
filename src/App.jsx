import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div>
      <Header></Header>
      <main>
        <Outlet/>
      </main>
      <Footer></Footer>
    </div>
  )
}

export default App
