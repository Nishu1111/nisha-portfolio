//import Image from 'next/image'
import Header from "../components/Header.tsx"
import Hero from "../components/Hero.tsx"
import About from "../components/About.tsx"
import Workexperience from "../components/Workexperience.tsx"
import Skills from "../components/Skills.tsx"
import Projects from "../components/Projects.tsx"
import ContactMe from "../components/ContactMe.tsx"
import './globals.css'
import Link from "next/link"
export default function Home() { 
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
 {/* header*/}
<Header />
     
{/* Hero*/}
<section id="hero" className="snap-start">
<Hero />
</section>
{/* About*/}
<section id="about" className="snap-center">
<About />
</section>

<section id="experience" className="snap-center">
<Workexperience />
</section>

<section id="skills" className="snap-start">
<Skills />
</section>

<section id="projects" className="snap-start">
<Projects />
</section>

<section id="contacts" className="snap-start">
<ContactMe />
</section>

<Link href="#hero">
<footer className="sticky bottom-5 w-full cursor-pointer">
  <div className="flex items-right justify-end">
    <img className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
     src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRR57OxvdEDGI-D3c8_5PsnKNyyk7PFezcDRQ&usqp=CAU" alt="" />
  </div>
  </footer>
  </Link>

  </div>
  )
  }

