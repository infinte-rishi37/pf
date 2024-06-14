'use client'
import React, {useState} from 'react';
import About from "../app/components/aboutMe";
import Header from "./components/header";
import Education from "./components/education";
import Achievements from "./components/achievements";

export default function Home() {
  const [theme, setTheme] = useState('dark');
  return (
    <main className={theme == 'dark' ? 'text-pall-ll' : 'text-pall-DD'}>
    <Header theme = {theme} setTheme = {setTheme}></Header>
    <main>
      {/* <About theme = {theme}/> */}
      {/* <Education theme = {theme}/> */}
      <Achievements theme = {theme}/>
    </main>
    </main>
  );
}
