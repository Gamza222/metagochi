import React from 'react'
import './Section4.scss'
import Bubbles from '../assets/images/bubbles.svg'

export default function Section4() {
  return (
    <section className='section4'>
        <div className='section4__container'>
            <article>
                <h2>What Is MetaGochi?</h2>
                <div>
                  <p>Metagochi’s are the blockchain based digital creatures that live in your wallet! Powered by $MGCHI, Metagochi is a metaverse incorporating play to earn game inspired by our favourite 90’s trend!</p>
                  <p>Each creature has a set of attributes which can be levelled up through training and playing in the olympic style GochiGames! You’ll earn tokens, in game items and NFT’s, just by participating in the competitions! As your creatures grow stronger, the rewards get better!</p>
                  <p>We can’t wait for you to join us at the first ever GochiGames! Coming to a blockchain near you, very soon.</p>
                </div>
                <a href="#tokenomics" className='button-variant'>VIEW THE TOKENOMICS</a>
            </article>
            <img src={Bubbles} />

        </div>
    </section>
  )
}
