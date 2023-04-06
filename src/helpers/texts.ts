export interface Texts {
  [key: string]: string
}

const textsEsp: Texts = {
  language: 'Idioma',
  sp: 'Español',
  eng: 'Inglés',
  about_me: 'Sobre mí',
  skills: 'Habilidades',
  projects: 'Proyectos',
  career: 'Carrera',
  contact: 'Contacto'
}

const textsEng: Texts = {
  language: 'Language',
  sp: 'Spanish',
  eng: 'English',
  about_me: 'About me',
  skills: 'Skills',
  projects: 'Projects',
  career: 'Career',
  contact: 'Contact'
}

const languages = {
  es: 'Spanish',
  en: 'English'
}

export { languages, textsEsp, textsEng }
