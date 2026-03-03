import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Education from './components/Education'
import References from './components/References'
import Contact from './components/Contact'
import Footer from './components/Footer'

function Divider() {
  return <div className="full-divider" />
}

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <Divider />
      <About />
      <Divider />
      <Skills />
      <Divider />
      <Experience />
      <Divider />
      <Education />
      <Divider />
      <References />
      <Divider />
      <Contact />
      <Footer />
    </>
  )
}
