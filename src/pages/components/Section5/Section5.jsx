import React from 'react'
import './Section5.scss'
import Ellipse from '../assets/images/section5/Ellipse5.svg'
import MetaPic from '../assets/images/section5/metag-pic5.svg'
import Clouds from '../assets/images/metag/clouds.png'

export default function Section5() {
  return (
    <section id="section5">
        <div className="section5__container">
           <img src={Ellipse} alt="section5-background" className="ellipse" /> 
           
            <div className='section5__content'>
                <img src={MetaPic} alt="MetaGochies" />
                <article>
                    <h2>{`Collect, Train & Earn`}</h2>
                    <div>
                        <p>There’s a huge variety of creatures to collect! Have you ever fancied owning your own camouflage dragon? Perhaps a shark with red stripes? This is your chance! As your creatures level up, the competitions get more intense, but even more rewarding! The Metagochi team have put play to earn at the forefront of their ecosystem to ensure that our wonderful holders remain incentivised to keep playing, collecting and most importantly, earning!</p>
                    </div>
                    <a href="" className="button-variant">JOIN THE TELEGRAM</a>
                </article>
            </div>

            <img src={Clouds} alt="clouds-background" className="section5__clouds" />
        </div>
    </section>
  )
}
