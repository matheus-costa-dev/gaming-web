import Hero from "./components/Hero"
import About from "./components/About"
import Navbar from "./components/Navbar"

function App() {
  return (
    <main 
    className="relative min-h-screen w-screen overflow-x-hidden text-white bg-blue-50">
      <Navbar />
      <Hero />
      <About />

    </main>
  )
}

export default App