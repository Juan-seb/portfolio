import Menu from './components/Menu'
import { LanguageProvider } from './context/LanguageProvider'

function App (): JSX.Element {
  return (
    <LanguageProvider>
      <main className='w-[calc(100vw - 5px)] h-[1000px] font-open_sans'>
        <Menu />
      </main>
    </LanguageProvider>
  )
}

export default App
