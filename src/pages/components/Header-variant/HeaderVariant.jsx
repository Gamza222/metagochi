import React from 'react'
import * as classes from './HeaderVariant.module.scss'
import TelegramIcon from '../assets/images/telegram.svg'
import TwitterIcon from '../assets/images/twitter.svg'

const HeaderVariant = () => {
  return (
    <header className={classes.header}>
      <div className={classes.header__container}>
        <h3>HAVE YOU SEEN THE NEW WHITEPAPER? DOWNLOAD IT <a href="https://ipfs-fast.b-cdn.net/metagochi/Metagochi_latest.pdf" download>HERE</a> 🚀</h3>
        <nav className={classes.header__container__nav}>
          <a href="https://twitter.com/metagochi" className={classes.header__container__nav__icon}><img className={classes.header__container__nav__icon__twitter} src={TwitterIcon} /></a>
          <a href="https://t.me/metagochi" className={classes.header__container__nav__icon}><img className={classes.header__container__nav__icon__telegram} src={TelegramIcon} /></a>
        </nav>
      </div>
    </header>
  )
}

export default HeaderVariant
