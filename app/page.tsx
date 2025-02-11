'use client'
import React, {useState} from 'react'
import About from "./components/aboutMe"
import Header from "./components/header"
import Education from "./components/education"
import Achievements from "./components/achievements"
import Projects from "./components/sections/Projects"
import TechStack from "./components/sections/TechStack"
import DSAProgress from "./components/sections/DSAProgress"
import Contact from "./components/sections/Contact"
import StarsCanvas from './components/main/Background'

export default function Home() {
  const [theme, setTheme] = useState('dark');
  const [cfStats, setCfStats] = useState(null);

  return (
    <main className={`min-h-screen ${theme === 'dark' ? 'text-pall-ll bg-pall-DD' : 'text-pall-DD bg-pall-ll'}`}>
      <StarsCanvas theme={theme}/>
      <Header theme={theme} setTheme={setTheme} />
      <div className="relative z-10">
        <About theme={theme}/>
        <Education theme={theme}/>
        <TechStack theme={theme}/>
        <Projects theme={theme}/>
        <DSAProgress theme={theme} cfStats={cfStats} />
        <Achievements theme={theme}/>
        <Contact theme={theme}/>
      </div>
    </main>
  );
}