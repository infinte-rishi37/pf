import CPCard from './Cards/cpCard'

export default function About({theme}:{theme:string}) {
  return (
    <main className={'w-full h-auto p-16 flex-col '+
        (theme === 'dark' ? 'bg-pall-Dd' : 'bg-pall-ll')}>
        <h1 className="text-h1 py-4">
            Achievements
        </h1>
        <div>
            <div className="text-h2">
                Competitive Programming
            </div>
            <div >
                <CPCard/>
            </div>
        </div>
    </main>
  );
}
