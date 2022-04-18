import React from 'react'
import './Section8.scss'
import MetaMask from '../assets/images/section8/metamask.svg'
import Ethereum from '../assets/images/section8/ethereum.svg'
import Pony from '../assets/images/section8/pony.svg'
import Telegram from '../assets/images/section8/telegram.svg'

const steps = [
  {
    name: 'MetaMask',
    url: MetaMask,
    stepNum: 'Step 1',
    title: <h4>Download the <a href="https://metamask.io/">MetaMask Chrome Extension</a> or mobile app.</h4>,
    text: <p>Setup your account & make sure you’re connected to the ethereum network.</p>
  },
  {
    name: 'Ethereum',
    url: Ethereum,
    stepNum: 'Step 2',
    title: <h4>Use Coinbase / another exchange to purchase ETH and send it over to your MetaMask Wallet Address.</h4>,
    text: <p>Or if you already have ETH, simply send it to your MetaMask Wallet.</p>
  },
  {
    name: 'Pony',
    url: Pony,
    stepNum: 'Step 3',
    title: <h4>Head over to the Uniswap Exchange and swap your ETH for $MGCHI.</h4>,
    text: <p>(if you already hold another token, you can swap that directly for $MGCHI too)</p>
  },
  {
    name: 'Telegram',
    url: Telegram,
    stepNum: 'Step 4',
    title: <h4>Congratulations! You are now an Official MetaGochi Holder.</h4>,
    text: <p><a href="https://t.me/metagochi">Join our Telegram</a> to stay up to date with the teams announcements & progress.</p>
  },  
];

export default function Section8() {
  return (
    <section id="section8">
        <div className="section8__container">

          <div className="section8__clouds" />
          <div className="section8__ellipse" />

          <div className="section8__text">
            <h2>How To Buy</h2>
            <h5>It only takes a few minutes to get yourself set up</h5>
          </div>
            <div className="section8__steps">
                {
                  steps.map((step, index) => {
                    return (
                      <div className="section8__steps-item" key={index}>
                        <img src={step.url} alt={step.name} />
                        <div className="section8__steps-item__description">
                          <div className="step-number">
                            <h3>{step.stepNum}</h3>
                          </div>
                          <div className="step-text">
                            {step.title}
                            {step.text}
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
            </div>
        </div>
    </section>
  )
}

