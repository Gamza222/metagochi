import React from 'react'
import './Footer.scss'
import Metagochi1 from '../assets/images/metag/picture1.svg'
import TelegramIcon from '../assets/images/telegram.svg'
import TwitterIcon from '../assets/images/twitter.svg'


export default function Footer() {
  return (
    <section id="footer">
        <div className="footer__container">
            <div className="footer__content">
                <div className="footer__logo">
                    <img src={Metagochi1} />
                    <div className="footer__logo-links">
                        <a href="#"><img src={TelegramIcon} className="telegram-icon" /></a>
                        <a href="#"><img src={TwitterIcon} className="twitter-icon"/></a>
                    </div>
                </div>
                <div className="footer__links">
                    <a href="#">WHITEPAPER</a>
                    <a href="#">CONTRACT</a>
                    <a href="#">UNISWAP</a>
                    <a href="#">CHART</a>
                </div>
            </div>
            <div className="footer__text">
                <p>
                We welcome feedback from all of our investors and we’d love to hear from you via the above
community channels. Metagochi is a real passion project of ours and we will always endeavour to deliver our best for our wonderful community. We would like to extend a thank you from the team for believing in us, and for giving us the opportunity to add value to a space that is saturated with scams, meme coins and empty promises.
                </p>
            </div>
        </div>
    </section>
  )
}
