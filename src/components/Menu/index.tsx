import { useState, useEffect } from 'react'
import ButtonMenu from '../ButtonMenu'
import MenuDesign from '../MenuDesign'

const Menu = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      return
    }
    document.body.style.overflow = 'auto'
  }, [isOpen])

  return (
    <>
      <ButtonMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <MenuDesign isOpen={isOpen} />
    </>

  )
}

export default Menu
