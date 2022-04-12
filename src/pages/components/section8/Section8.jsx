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
    title: `Download the MetaMask Chrome Extension or mobile app.`,
    text: `Setup your account & make sure you’re connected to the ethereum network.`
  },
  {
    name: 'Ethereum',
    url: Ethereum,
    stepNum: 'Step 2',
    title: `Download the MetaMask Chrome Extension or mobile app.`,
    text: `Setup your account & make sure you’re connected to the ethereum network.`
  },
  {
    name: 'Pony',
    url: Pony,
    stepNum: 'Step 3',
    title: `Download the MetaMask Chrome Extension or mobile app.`,
    text: `Setup your account & make sure you’re connected to the ethereum network.`
  },
  {
    name: 'Telegram',
    url: Telegram,
    stepNum: 'Step 4',
    title: `Download the MetaMask Chrome Extension or mobile app.`,
    text: `Setup your account & make sure you’re connected to the ethereum network.`
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
                        <div className="step-number">
                          <h3>{step.stepNum}</h3>
                        </div>
                        <div className="step-text">
                          <h4>{step.title}</h4>
                          <p>{step.text}</p>
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

