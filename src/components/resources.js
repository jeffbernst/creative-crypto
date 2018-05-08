import React from 'react'

import blockHeader from '../img/resources/english/Encyclopedia - Block Header Slide.png'
import blockHeight from '../img/resources/english/Encyclopedia - Block Height Slide.png'
import block from '../img/resources/english/Encyclopedia - Block Slide.png'
import blockchain from '../img/resources/english/Encyclopedia - Blockchain Slide.png'
import genesisBlock from '../img/resources/english/Encyclopedia - Genesis Block Slide.png'
import mainChain from '../img/resources/english/Encyclopedia - Main Chain Slide.png'
import merkleTree from '../img/resources/english/Encyclopedia - Merkle Tree Slide.png'
import orphanedBlock from '../img/resources/english/Encyclopedia - Orphaned Block Slide.png'

import './resources.css'

export class Resources extends React.Component {
  render () {
    const slidesInfo = [{
      slide: blockHeader,
      name: 'Block Header',
    }, {
      slide: blockHeight,
      name: 'Block Height',
    }, {
      slide: block,
      name: 'Block',
    }, {
      slide: blockchain,
      name: 'Blockchain',
    }, {
      slide: genesisBlock,
      name: 'Genesis Block',
    }, {
      slide: mainChain,
      name: 'Main Chain',
    }, {
      slide: merkleTree,
      name: 'Merkle Tree',
    }, {
      slide: orphanedBlock,
      name: 'Orphaned Block',
    }
    ]

    const slideComponents = slidesInfo.map((slide, index) => {
      return (
        <div key={index} className="slide">
          <img src={slide.slide} alt={slide.name}/>
          <div className="name">{slide.name}</div>
        </div>
      )
    })

    return (
      <div className="resources-page">
        <div className="resources-search">
          <div className="resources">
            <h2>Resources</h2>
            <p><strong>Are you new to cryptocurrency?</strong> This channel has you covered. You can navigate all the
              terms using the term search bar (to the left). Our team takes complicated topics and breaks them down into
              easy-to-digest infographics and illustrations. Enjoy and explore!</p>
            <p><em>This resource page was created by @kr-marketing in collaboration with The Creative Crypto
              Magazine.</em></p>
          </div>
          <div className="search">
            <h2>Search a Term</h2>
            {/* search bar here */}
            {/* toggle buttons here */}
          </div>
        </div>
        <div className="encyclopedia">
          <h2>Encyclopedia</h2>
          <div className="encyclopedia-slides">
            {slideComponents}
          </div>
        </div>
      </div>
    )
  }
}

