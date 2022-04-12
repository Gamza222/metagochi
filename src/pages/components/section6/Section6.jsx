import React from 'react'
import './Section6.scss'
import TeamPic from '../assets/images/section6/team-pic.png'

export default function Section6() {
  return (
    <section id="section6">
        <div className="section6__container">
        <img src={TeamPic} alt="team" className="team-pic"/>
            <article>
                <h2>The Team</h2>
                <div>
                    <p>The Metagochi team is comprised of expert web developers, dedicated dapp designers, DeFi enthusiasts and some of the most skilled visual artists in the space! Metagochi truly is a passion project for us and we will always endeavour to ensure that we deliver the very best for our wonderful community! We wouldn’t want to play a substandard game, so why would we release one?</p>
                </div>
                <a className="button-variant">LAUNCH THE APP</a>
            </article>
        </div>
    </section>
  )
}
