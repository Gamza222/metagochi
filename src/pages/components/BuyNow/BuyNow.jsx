import React from 'react'
import MetaCircle from '../assets/images/meta-circle.svg'
import Pony from '../assets/images/pony.png'
import './BuyNow.scss'
import Telegram from '../assets/images/telegr.svg'

export default function BuyNow() {
  return (
    <section id="buynow">
      <div className="buynow__container">
        <img src={MetaCircle} alt="circle" />
        <div className="buynow__blue-circle"></div>
        <div className="buynow__clouds" />

        <div className="buynow__content">
          <h2>BUY NOW</h2>
          <p>Join the community</p>
          <div className="buynow__buttons">
            <a href="https://app.uniswap.org/#/swap?outputCurrency=0xC1a85Faa09c7f7247899F155439c5488B43E8429" className="button"><img src={Pony} />BUY NOW ON INISWAP</a>
            <a href="https://t.me/metagochi" className="button"><img src={Telegram} />JOIN THE TELEGRAM</a>
          </div>
        </div>
      </div>
    </section>
  )
}
