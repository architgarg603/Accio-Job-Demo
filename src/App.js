import React, { useEffect, useState } from 'react';
import './App.css';
import Phone from './Components/Phone/Phone';
import TextComponent from './Components/Text/Text'
function App() {
  let arr = [
    { txt: 'we’ve got your back.', sub: `gain complete control over your credit card with CRED Protect. receive category-based analysis of your spends, detect hidden charges, and track your credit limit in real-time.` },
    {
      txt: `begin your
    winning streak.`, sub: `use your CRED coins to participate in games and raffles to win the most exclusive rewards and cashbacks on CRED. good luck.`
    },
    {
      txt: `for your
    eclectic taste.`, sub: `get access to the CRED Store, a member-exclusive selection of products and experiences at special prices that complement your taste. this is the good life they speak of.`
    },
    {
      txt: `more cash
    in your pockets.`, sub: `switch to CRED RentPay and start paying rent with your credit card. this way you get up to 45 days of credit free period, more reward points and a happy landlord.`
    }
  ]
  const [currImg, setCurrImg] = useState(0);
  const [prevImg, setPrevImg] = useState(3);
  useEffect(() => {
    const Nodes = document.querySelectorAll(".textWrapper")
    const observer = new IntersectionObserver((entries) => {
      console.log(entries[0])
      if (entries[0].isIntersecting == false) {
        entries[0].target.classList.add('close')
        entries[0].target.classList.remove('open')
        const idx = Number(entries[0].target.getAttribute('idx'))
        setPrevImg(idx)
      }
      else {
        entries[0].target.classList.remove('close')
        entries[0].target.classList.add('open')
        const idx = Number(entries[0].target.getAttribute('idx'))
        setCurrImg(idx)
      }
    }, { threshold: 0.65 })
    Nodes.forEach(node => observer.observe(node))
  }, [])

  return (
    <>
      <div className='wrapper' >
        {arr.map((data, idx) => <TextComponent key={idx} idx={idx} txt={data.txt} sub={data.sub} />)}
      </div>
      <Phone prevImg={prevImg} currImg={currImg} />
    </>
  );
}

export default App;
