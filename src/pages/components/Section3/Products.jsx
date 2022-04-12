import React from 'react'
import './Section3.scss'
import Product1 from '../assets/images/products/product1.svg'
import Product2 from '../assets/images/products/product2.svg'
import Product3 from '../assets/images/products/product3.svg'

const products = [
    {
        url: Product1,
        name: 'view the chart'
    },
    {
        url: Product2,
        name: 'whitepaper'
    },
    {
        url: Product3,
        name: 'verified contract'
    },
]

export default function Products() {
  return (
    <div className='products'>
        <div className='products__container'>
            {
            products.map((item, index) => {
                return <a src="#" key={index}><img src={item.url} alt={item.name} key={item.name} /></a>
            })
            }
        </div>
    </div>
  )
}
