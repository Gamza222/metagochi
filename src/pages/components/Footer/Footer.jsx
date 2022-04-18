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
                    <img src={Metagochi1} alt="metagochi" />
                    <div className="footer__logo-links">
                        <a href="https://t.me/metagochi"><img src={TelegramIcon} className="telegram-icon" /></a>
                        <a href="https://twitter.com/metagochi"><img src={TwitterIcon} className="twitter-icon"/></a>
                    </div>
                </div>
                <div className="footer__links">
                    <a href="https://ipfs-fast.b-cdn.net/metagochi/Metagochi_latest.pdf">WHITEPAPER</a>
                    <a href="https://etherscan.io/address/0xc1a85faa09c7f7247899f155439c5488b43e8429#code">CONTRACT</a>
                    <a href="https://app.uniswap.org/#/swap?outputCurrency=0xC1a85Faa09c7f7247899F155439c5488B43E8429">UNISWAP</a>
                    <a href="https://www.dextools.io/app/ether/pair-explorer/0xC1a85Faa09c7f7247899F155439c5488B43E8429">CHART</a>
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
