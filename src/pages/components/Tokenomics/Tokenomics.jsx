import React from 'react'
import './Tokenomics.scss'
import TokenomicsPic from '../assets/images/tokenomics/tokenomic-pic.svg'

const guaranties = [
    {
        title: 'Initial Supply',
        text: ['1,000,000,000,000,000,000', '(18 zeros)'],
    },
    {
        title: 'Token Distribution',
        text: ['Liquidity: 99%', 'Dev / Marketing: 1%'],
    },
    {
        title: 'Launching',
        text: ['Fairlaunched'],
    },
]

export default function Tokenomics() {
  return (
    <section id="tokenomics">
        <div className="tokenomics__container">
            <div className="tokenomics__content">
                <h2>Tokenomics</h2>
                <p>A generous taxation system allows for the sustenance <br /> and security of the Token.</p>
                <div className="guaranties">
                    {
                        guaranties.map((item, index) => {
                            return (
                                <div className="guaranties-item" key={index}>
                                    <h5>{item.title}</h5>
                                    <div className="guaranties-item__text">
                                        {
                                            item.text.map((item, index) => {
                                                return <p key={index}>{item}</p>
                                            })
                                        }
                                    </div>                
                                </div>
                            )
                        })
                    }
                </div>

                <div className="tokenomics__conclusion">
                    <h5>Total Tax:<span>{`9% for Buys & Sells`}</span></h5>
                    <h5>Slippage:<span>{`11%`}</span></h5>
                </div>
            </div>
            <img src={TokenomicsPic} />

        </div>
    </section>
  )
}
