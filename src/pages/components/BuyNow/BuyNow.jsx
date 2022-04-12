import React from 'react'
import MetaCircle from '../assets/images/meta-circle.svg'
import Pony from '../assets/images/pony.png'
import './BuyNow.scss'
import { IoMdPaperPlane } from 'react-icons/io'

export default function BuyNow() {
  return (
    <section id="buynow">
      <div className="buynow__container">
        <img src={MetaCircle} />
        <div className="buynow__blue-circle"></div>
        <div className="buynow__clouds" />

        <div className="buynow__content">
          <h2>Buy Now</h2>
          <p>Join the community</p>
          <div className="buynow__buttons">
            <a href="" className="button"><img src={Pony} />BUY NOW ON INISWAP</a>
            <a href="" className="button"><IoMdPaperPlane/>JOIN THE TELEGRAM</a>
          </div>
        </div>
      </div>
    </section>
  )
}
