import React from 'react'
import './Section7.scss'
import Planet from '../assets/images/section7/planets-pic.png'

export default function Section7() {
  return (
    <section id="section7">
        <div className="section7__container">
            <img src={Planet} alt="" className="planet-pic" />
            <article>
                <h2>The Metagochi Metaverse</h2>
                <div>
                    <p>We’ve got huge plans for the future and we believe in the Metaverse! As the Metaverse is thrust further and further into the public eye every day, we envision a future where you’re viewing the GochiGames arena on your coffee table through augmented reality! And that’s just the beginning! As technology improves and mass adoption comes around we want to be stood at the forefront of the Metaverse as pioneers of this new and exciting technology.</p>
                </div>

                <a className="button-variant">JOIN THE TELEGRAM</a>
            </article>
        </div>
    </section>
  )
}
