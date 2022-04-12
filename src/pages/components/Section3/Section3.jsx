import React from 'react'
import './Section3.scss'

import sponsor1 from '../assets/images/sponsors/sponsor1.svg'
import sponsor2 from '../assets/images/sponsors/sponsor2.svg'
import sponsor3 from '../assets/images/sponsors/sponsor3.svg'
import sponsor4 from '../assets/images/sponsors/sponsor4.svg'
import Products from './products'

const sponsors = [
    {
        url: sponsor1,
        name: 'coinsniper.net'
    },
    {
        url: sponsor2,
        name: 'coinhunt'
    },
    {
        url: sponsor3,
        name: 'coin-market-app'
    },
    {
        url: sponsor4,
        name: 'coin-gecko'
    },
]

export default function Section3() {
  return (
    <section className='section3'>
        <div className='section3__container'>
            <div className='sponsors'>
                {
                    sponsors.map((sponsor, index) => {
                        return (
                            <img src={sponsor.url} alt={sponsor.name} key={index} />
                        )
                    })
                }
            </div>
            <Products />
        </div>
    </section>
  )
}
