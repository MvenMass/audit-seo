import { useState } from 'react'
import './App.css'
import SplitText from './components/SplitText'
import CircularGallery from './components/CircularGallery'
import LogoLoop from './components/LogoLoop';
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from 'react-icons/si';
import logo1 from './assets/logo-1.png'
import logo2 from './assets/logo-2.png'
import logo3 from './assets/logo-3.png'
import logo4 from './assets/logo-5.png'
import logo5 from './assets/logo-6.png'
import logo6 from './assets/logo-7.png'
import logo7 from './assets/logo-8.png'
import CardNav from './components/CardNav'
import logo from './assets/logomain.png';
import UrlGenerator from './components/UrlGenerator';
import Footer from './components/Footer'; // Импортируем футер
function App() {
  // Добавьте эту функцию
  const handleAnimationComplete = () => {
    console.log('All letters have animated!')
  }

const items = [
    {
      label: "About",
      bgColor: "#0D0716",
      textColor: "#fff",
      links: [
        { label: "Company", ariaLabel: "About Company" },
        { label: "Careers", ariaLabel: "About Careers" }
      ]
    },
    {
      label: "Projects", 
      bgColor: "#170D27",
      textColor: "#fff",
      links: [
        { label: "Featured", ariaLabel: "Featured Projects" },
        { label: "Case Studies", ariaLabel: "Project Case Studies" }
      ]
    },
    {
      label: "Contact",
      bgColor: "#271E37", 
      textColor: "#fff",
      links: [
        { label: "Email", ariaLabel: "Email us" },
        { label: "Twitter", ariaLabel: "Twitter" },
        { label: "LinkedIn", ariaLabel: "LinkedIn" }
      ]
    }
  ];

const imageLogos = [
  { src: logo1, alt: "Company 1", href: "https://company1.com" },
  { src: logo2, alt: "Company 2", href: "https://company2.com" },
  { src: logo3, alt: "Company 3", href: "https://company3.com" },
  { src: logo4, alt: "Company 4", href: "https://company4.com" },
  { src: logo5, alt: "Company 5", href: "https://company5.com" },
  { src: logo6, alt: "Company 6", href: "https://company6.com" },
  { src: logo7, alt: "Company 7", href: "https://company7.com" },
]

  return (
    <>
     <CardNav
      logo={logo}
      logoAlt="Company Logo"
      items={items}
      baseColor="#4B60E6"
      menuColor="#000"
      buttonBgColor="#FFC702"
      buttonTextColor="#000000ff"
      ease="power3.out"
    />
      <UrlGenerator /> {/* <-- вот здесь добавляем наш генератор */}
      {/* Добавленный компонент SplitText */}
     

 

  <div style={{ height: '120px', position: 'relative', overflow: 'hidden',backgroundColor: '#EDEEFF'}}>
      <LogoLoop
        logos={imageLogos}
        speed={40}
        direction="left"
        logoHeight={68}
        gap={100}
        pauseOnHover={false}
        scaleOnHover
        fadeOut
        fadeOutColor="#ffffff"
        ariaLabel="Technology partners"
      />
    </div>
     <Footer
     logo={logo}
  logoAlt="Company Logo"/>
    </>
    
  )
}

export default App