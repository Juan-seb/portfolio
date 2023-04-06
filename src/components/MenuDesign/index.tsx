import { useContext } from 'react'
import LanguageContext, { LanguageContextProps } from '../../context/LanguageProvider'
import { languages } from '../../helpers/texts'

const MenuDesign = ({ isOpen }: { isOpen: boolean }): JSX.Element => {
  const { setLanguage, texts }: LanguageContextProps = useContext(LanguageContext)

  const handleChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    if (e.target.value === 'es') {
      setLanguage(languages.es)
      return
    }
    if (e.target.value === 'en') {
      setLanguage(languages.en)
    }
  }

  return (
    <>
      <div className={`${isOpen ? 'translate-x-0' : '-translate-x-full'} transition md:hidden absolute top-0 bottom-0 z-10 w-[80vw] h-screen bg-[#090E16]`}>
        <aside className='flex flex-col px-6 py-4 mb-6 top-0 bottom-0 w-full h-full bg-[#7B4AE2] bg-opacity-10'>
          <nav className='flex flex-col justify-between text-white'>
            <ul>
              <li className='mb-3 w-full'>
                <a href='#about'>{texts.about_me}</a>
              </li>
              <li className='mb-3 w-full'>
                <a href='#skills'>{texts.skills}</a>
              </li>
              <li className='mb-3 w-full'>
                <a href='#projects'>{texts.projects}</a>
              </li>
              <li className='mb-3 w-full'>
                <a href='#career'>{texts.career}</a>
              </li>
              <li className='mb-3 w-full'>
                <a href='#contact'>{texts.contact}</a>
              </li>
            </ul>
          </nav>

          <div className='mt-3'>
            <label className='text-white'>
              {texts.language}:
              <select onChange={handleChangeLanguage} defaultValue='Español' className='bg-transparent text-white outline-none border-b border-b-white px-2 py-2 ml-2'>
                <option value='es'>{texts.sp}</option>
                <option value='en'>{texts.eng}</option>
              </select>
            </label>
          </div>
        </aside>
      </div>
      <header className='hidden md:flex w-full'>
        <nav className='flex justify-between'>
          <ul>
            <li className='mb-2 w-full'>
              <a href='#'>{texts.about_me}</a>
            </li>
            <li className='mb-2 w-full'>
              <a href='#'>{texts.skills}</a>
            </li>
            <li className='mb-2 w-full'>
              <a href='#'>{texts.projects}</a>
            </li>
            <li className='mb-2 w-full'>
              <a href='#'>{texts.career}</a>
            </li>
            <li className='mb-2 w-full'>
              <a href='#'>{texts.contact}</a>
            </li>
          </ul>
        </nav>

        <div>
          Imagenes
        </div>

      </header>
    </>
  )
}

export default MenuDesign
