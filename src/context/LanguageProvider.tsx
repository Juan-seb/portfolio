/* eslint-disable @typescript-eslint/consistent-type-assertions */
import { languages, textsEsp, textsEng, Texts } from '../helpers/texts'
import { createContext, useState, useEffect } from 'react'

const LanguageContext = createContext<LanguageContextProps>({
  setLanguage: () => {},
  texts: textsEsp
})

const LanguageProvider = ({ children }: { children: React.ReactNode }): JSX.Element => {
  const [language, setLanguage] = useState<string>(languages.es)
  const [texts, setTexts] = useState<Texts>(textsEsp)

  useEffect(() => {
    if (language === languages.es) {
      setTexts(textsEsp)
      return
    }
    if (language === languages.en) {
      setTexts(textsEng)
    }
  }, [language])

  const data: LanguageContextProps = {
    setLanguage,
    texts
  }

  return (
    <LanguageContext.Provider value={data}>
      {children}
    </LanguageContext.Provider>
  )
}

export interface LanguageContextProps {
  setLanguage: Function
  texts: Texts
}

export { LanguageProvider }
export default LanguageContext
