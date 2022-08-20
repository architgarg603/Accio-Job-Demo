import React, { useEffect, useState } from 'react'
import style from './Phone.module.css'
import img1 from '../../Assests/fold1.png';
import img2 from '../../Assests/fold2.webp';
import img3 from '../../Assests/fold3.webp';
import img4 from '../../Assests/fold4.png';
function Phone({ prevImg, currImg }) {
  const imgArr = [img1, img2, img3, img4]
  const [openClass, setOpenClass] = useState('')
  const [closeClass, setCloseClass] = useState('')
  console.log(prevImg,currImg)
  useEffect(() => {
    setOpenClass('')
    setCloseClass('')

    setTimeout(() => {
      setOpenClass(style.open)
      setCloseClass(style.close)
    }, 50)

  }, [ currImg])

  return (
    <div className={style.wrapper}>
      <div className={style.imgContainer}>
        <img src={imgArr[prevImg]} className={openClass} />
        <img src={imgArr[currImg]} className={closeClass} />
      </div>
    </div>
  )
}

export default React.memo(Phone)