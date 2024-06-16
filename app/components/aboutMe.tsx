import Image from "next/image"
import DP from "@/public/img/profile.png"

export default function About({theme}:{theme:string}) {
  return (
    <main className={'w-full h-auto p-16 flex items-center justify-between '+
        (theme === 'dark' ? 'bg-pall-Dd' : 'bg-pall-ll')}>
        <div>
            <Image alt="Profile Pic" src={DP} width="300" className="rounded-e-full rounded-s-3xl"></Image>
            <p className="text-h1 py-4">Rishi Kumar Singh</p>
            <p className="text-h2">Army Institute Of Technology 2026</p>
            <p>Bachelor of Engineering in Information Technology</p>
        </div>

        <p className="w-[50%] text-text z-30">
        I&apos;m a second year IT undergraduate. 
        My interests lie in competitive programming and web development. I love to explore and expand my knowledge while learning about various algorithms and languages.
        I&apos;m a second year IT undergraduate. 
        <br /> <br />
        My interests lie in competitive programming and web development. I love to explore and expand my knowledge while learning about various algorithms and languages.
        I&apos;m a second year IT undergraduate. 
        <br /> <br />
        <b>
          This website is currently beign developed. You can visit <a href="https://codeforces.com/profile/Rishi_Kumar_Singh" className="text-blue-500">https://codeforces.com/profile/Rishi_Kumar_Singh</a>
        </b>
        </p>
    </main>
  );
}
