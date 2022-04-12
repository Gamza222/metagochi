import React, { useEffect, useState } from 'react'
import * as classes from './Main.module.scss'
import Metagochi1 from '../assets/images/metag/picture1.svg'
import Metagochi2 from '../assets/images/metag/metagochi-title.png'
import { IoMdPaperPlane } from 'react-icons/io'
import VideoBg from '../assets/images/video/video-bg.png'
import Clouds from '../assets/images/metag/clouds.png'
import Meta1 from '../assets/images/metag/metag1.svg'
import Meta2 from '../assets/images/metag/metag2.svg'
import Meta3 from '../assets/images/metag/metag4.svg'
import { ImCross, ImMenu } from 'react-icons/im'

import video from '../assets/images/video/picture2.png'



export const Main = () => {

    const [active, setActive] = useState(false);
    const [width, setWidth] = useState('');

    useEffect(() => {
        if (width > 750) {
            setActive(true)
        }
    }, [width])

    
    useEffect(()=> {
        setWidth(window.innerWidth)
    }, []);

    window.addEventListener('resize', () => {
        setWidth(window.innerWidth);
    })



  return (
    <section className={classes.main} id="main">
        <div className={classes.main__container}>
            <img src={Meta1} alt={Meta1}/>
            <img src={Meta2} alt={Meta2}/>
            <img src={Meta3} alt={Meta3}/>
            <img src={Meta3} alt={Meta3}/>

            <nav className={classes.main__container__nav}>
                <div className={classes.main__container__nav__logo}>
                    <img src={width > 750 ? Metagochi1 : Metagochi2 } alt='logo' />
                    {active ? <ImCross onClick={() => setActive(!active)} /> : <ImMenu onClick={() => setActive(!active)}/>}
                </div>

                <div className={classes.main__container__nav__links} 
                    style={active ? {maxHeight: '700px', opacity: '1'} : {maxHeight: '0', opacity: '0'}}
                >
                    <ul className={classes.main__container__nav__links__list}>
                        <li><a href="" key="WHITEPAPER">WHITEPAPER</a></li>
                        <li><a href="" key="CONTRACT">CONTRACT</a></li>
                        <li><a href="" key="UNISWAP">UNISWAP</a></li>
                        <li><a href="" key="CHART">CHART</a></li>                       
                    </ul>
                    <a className='button' href="#">LAUNCH APP</a>  
                </div>
            </nav>

            <div className={classes.main__container__info}>
                <h1>Introducing the biggest virtual pet Metaverse platform</h1>
                <p>ON ERC-20 NETWORK</p>
                <a href="#" className="button">
                    <IoMdPaperPlane />
                    JOIN THE TELEGRAM
                </a>
                <div className={classes.main__container__info__video}>
                    <img src={VideoBg} alt="" />
                </div>
                <div className={classes.main__container__info__clouds}>
                    <img src={Clouds} alt='clouds' />
                </div>
                
            </div>
        </div>
    </section>
  )
}
