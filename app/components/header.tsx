import ModeSwitch from './Buttons/ModeSwitch'

const Header = ({theme, setTheme}:{theme:string, setTheme :(value:string) => void}) => {
  return (
    <div className={'text-h3 h-10 w-full py-6 px-16 flex items-center justify-between ' + 
    (theme == 'dark' ? 'bg-pall-DD' : 'bg-pall-dl')}> 
      <div>Portfolio</div>
      <div className='flex items-center justify-between gap-4'>
        <div>Routes</div>
        <ModeSwitch theme = {theme} setTheme = {setTheme}/>
      </div>
    </div>
  )
}

export default Header
