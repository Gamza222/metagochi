import React from 'react'
import './Section3.scss'
import Product1 from '../assets/images/products/product1.svg'
import Product2 from '../assets/images/products/product2.svg'
import Product3 from '../assets/images/products/product3.svg'

const products = [
    {
        url: Product1,
        name: 'view the chart',
        link: 'https://www.dextools.io/app/ether/pair-explorer/0xC1a85Faa09c7f7247899F155439c5488B43E8429'
    },
    {
        url: Product2,
        name: 'whitepaper',
        link: 'https://metagochi.com/wp-content/uploads/2022/01/Metagochi-Whitepaper-V2.pdf'
    },
    {
        url: Product3,
        name: 'verified contract',
        link: 'https://metagochi.com/wp-content/uploads/2021/12/CTA-3-a.png'
    },
]

export default function Products() {
  return (
    <div className='products'>
        <div className='products__container'>
            {
            products.map((item, index) => {
                return <a href={item.link} key={index}><img src={item.url} alt={item.name} key={item.name} /></a>
            })
            }
        </div>
    </div>
  )
}
