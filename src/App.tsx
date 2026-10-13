import { HashRouter, Routes, Route } from "react-router-dom"
import Header from "./components/Header"
import Hero from "./components/Hero"
import FAQs from "./components/FAQs"
import Login from "./components/Login"
import Register from "./components/Register"

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <FAQs />
    </>
  )
}

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </HashRouter>
  )
}

export default App