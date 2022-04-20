import React, { useEffect, useState } from 'react'
import * as classes from './Main.module.scss'
import Metagochi1 from '../assets/images/metag/picture1.svg'
import Metagochi2 from '../assets/images/metag/metagochi-title.png'
import Telegram from '../assets/images/telegr.svg'
import VideoBg from '../assets/images/video/video-bg.png'
import Clouds from '../assets/images/metag/clouds.png'
import Meta1 from '../assets/images/metag/metag1.svg'
import Meta2 from '../assets/images/metag/metag2.svg'
import Meta3 from '../assets/images/metag/metag4.svg'
import { ImCross, ImMenu } from 'react-icons/im'





export default function Main() {

    const [active, setActive] = useState(false);
    const [width, setWidth] = useState('');
    const isBrowser = () => typeof window !== "undefined"

    useEffect(() => {
        if (width > 750) {
            setActive(true)
        }
    }, [width])

    
    useEffect(()=> {
        setWidth(isBrowser() && window.innerWidth)
    }, []);

    isBrowser() && window.addEventListener('resize', () => {
        setWidth(isBrowser() && window.innerWidth);
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
                        <li><a href="https://ipfs-fast.b-cdn.net/metagochi/Metagochi_latest.pdf" key="WHITEPAPER">WHITEPAPER</a></li>
                        <li><a href="https://etherscan.io/address/0xc1a85faa09c7f7247899f155439c5488b43e8429#code" key="CONTRACT">CONTRACT</a></li>
                        <li><a href="https://app.uniswap.org/#/swap?outputCurrency=0xC1a85Faa09c7f7247899F155439c5488B43E8429" key="UNISWAP">UNISWAP</a></li>
                        <li><a href="https://www.dextools.io/app/ether/pair-explorer/0xC1a85Faa09c7f7247899F155439c5488B43E8429" key="CHART">CHART</a></li>                       
                    </ul>
                    <a className='button' href="https://app.metagochi.com/">LAUNCH APP</a>  
                </div>
            </nav>

            <div className={classes.main__container__info}>
                <h1>Introducing The Biggest Virtual Pet Metaverse Platform</h1>
                <p>ON ERC-20 NETWORK</p>
                <a href="https://t.me/metagochi" className="button">
                    <img src={Telegram} />
                    JOIN THE TELEGRAM
                </a>
                <div className={classes.main__container__info__video}>
                    <img src={VideoBg} alt="" />
                    <video  src="https://ipfs-fast.b-cdn.net/metagochi/MetaGotchi-Promo-Video.mp4" controls conteolslist="nodownload" />
                </div>
                <div className={classes.main__container__info__clouds}>
                    <img src={Clouds} alt='clouds' />
                </div>
                
            </div>
        </div>
    </section>
  )
}
