
import Navbar from "./components/Navbar"
import Projects from "./components/Projects"
import Hero from "./components/Hero"
import Contact from "./components/Contact"

const App = () => {
  return (
    <div className="relative h-full overflow-y-auto antialiased">
      <div className="fixed inset-0 bg-fixed bg-cover bg-center bg-img"></div>
      <div className="relative z-10 flex flex-col items-center container mx-auto">
        <Navbar />
        <Hero />
        <Projects />
        <Contact />
      </div>
    </div>
  )
}


export default App