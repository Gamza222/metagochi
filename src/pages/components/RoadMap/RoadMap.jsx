import React from 'react'
import './RoadMap.scss'
import CheckPic from '../assets/images/roadmap/check-pic.svg'
import MinusPic from '../assets/images/roadmap/minus-pic.svg'

const phases = [
    {
        name: 'Phase 1',
        content: [
            'Deployment of our custom designed smart contract', 
            'Community focused competitions',
            'Listing on small & mid tier coin trackers [Coinhunt & CoinSniper]',
            'Initial influencer marketing campaign',
            'Advertisement campaigns', 
            'Community focused competitions',
        ],
        pic: CheckPic,
    },
    {
        name: 'Phase 2',
        content: [
            'Implementation of aggressive social media marketing campaigns to raise awareness of NFT', 
            'Launch', 
            'Listing on large portfolio trackers [CoinMarketCap & CoinGecko]',
            'Metagochi NFT launch',
        ],
        pic: CheckPic,
    },
    {
        name: 'Phase 3',
        content: [
            'Hatching event to allow NFT holders to see their creatures for the first time!', 
            'Metagochi marketplace', 
            'Metagochi training games',
            'Farmland sale',
            'Implementation of our bespoke breeding protocol via custom smart contract to allow users to breed new Metagochi NFT’s',
        ],
        pic: MinusPic,
    },
]

export default function RoadMap() {
  return (
    <section id="roadmap">
        <div className="roadmap__container">
            <div className="roadmap__ellipse" />
            <div className="roadmap__content">
                <h2>Road map</h2>
                <p>Our roadmap is subject to change based on a variety of influential factors, be sure to check our Telegram and Twitter regularly to stay up to date.</p>
                <div className="phases">
                    {
                        phases.map((item, index)=> {
                            return (
                                <div className="phase-item" key={index}>
                                    <h3>{item.name}</h3>
                                    {
                                        item.content.map((sbj, index) => {
                                            return (
                                                <div className="phase-item__subject" key={index}>
                                                    <img src={item.pic}/>
                                                    <p>{sbj}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </section>
  )
}
