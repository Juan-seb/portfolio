import { Squash as Hamburger } from 'hamburger-react'

const ButtonMenu = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen: React.Dispatch<React.SetStateAction<boolean>> }): JSX.Element => {
  return (
    <div className='fixed bottom-4 right-4 bg-[#090E16] rounded-full'>
      <Hamburger toggled={isOpen} toggle={setIsOpen} color='#ffffff' size={24} />
    </div>
  )
}

export default ButtonMenu
