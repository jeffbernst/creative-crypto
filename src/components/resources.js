import React from 'react'
import { Footer } from './footer'

// english images
import blockHeader from '../img/resources/english/Encyclopedia - Block Header Slide.png'
import blockHeight from '../img/resources/english/Encyclopedia - Block Height Slide.png'
import block from '../img/resources/english/Encyclopedia - Block Slide.png'
import blockchain from '../img/resources/english/Encyclopedia - Blockchain Slide.png'
import genesisBlock from '../img/resources/english/Encyclopedia - Genesis Block Slide.png'
import mainChain from '../img/resources/english/Encyclopedia - Main Chain Slide.png'
import merkleTree from '../img/resources/english/Encyclopedia - Merkle Tree Slide.png'
import orphanedBlock from '../img/resources/english/Encyclopedia - Orphaned Block Slide.png'

// korean images
import blockHeaderKr from '../img/resources/korean/Encyclopedia - Block Header Slide - KR.png'
import blockHeightKr from '../img/resources/korean/Encyclopedia - Block Height Slide - KR.png'
import blockKr from '../img/resources/korean/Encyclopedia - Block Slide - KR.png'
import blockchainKr from '../img/resources/korean/Encyclopedia - Blockchain Slide - KR.png'
import genesisBlockKr from '../img/resources/korean/Encyclopedia - Genesis Block Slide - KR.png'
import mainChainKr from '../img/resources/korean/Encyclopedia - Main Chain Slide - KR.png'
import merkleTreeKr from '../img/resources/korean/Encyclopedia - Merkle Tree Slide - KR.png'
import orphanedBlockKr from '../img/resources/korean/Encyclopedia - Orphaned Block Slide - KR.png'

import './resources.css'

export class Resources extends React.Component {
  state = {
    language: 'english',
    englargedSlide: undefined,
    english: [
      {
        slide: blockchain,
        name: 'Blockchain',
      }, {
        slide: block,
        name: 'Block',
      }, {
        slide: genesisBlock,
        name: 'Genesis Block',
      }, {
        slide: blockHeader,
        name: 'Block Header',
      }, {
        slide: blockHeight,
        name: 'Block Height',
      }, {
        slide: mainChain,
        name: 'Main Chain',
      }, {
        slide: orphanedBlock,
        name: 'Orphaned Block',
      }, {
        slide: merkleTree,
        name: 'Merkle Tree',
      }
    ],
    korean: [
      {
        slide: blockchainKr,
        name: '블록체인'
      }, {
        slide: blockKr,
        name: '블록'
      }, {
        slide: genesisBlockKr,
        name: '제네시스 블록'
      }, {
        slide: blockHeaderKr,
        name: '블록 헤더'
      }, {
        slide: blockHeightKr,
        name: '블록 높이'
      }, {
        slide: mainChainKr,
        name: '주요 체인'
      }, {
        slide: orphanedBlockKr,
        name: '고아 블록'
      }, {
        slide: merkleTreeKr,
        name: '머클 트리'
      }
    ]
  }

  changeLanguage = language => {
    this.setState({language})
  }

  enlargeSlide = slide => {
    this.setState({enlargedSlide: slide})
  }

  closeSlide = () => {
    this.setState({enlargedSlide: undefined})
  }

  nextSlide = nextSlide => {
    this.setState({enlargedSlide: nextSlide})
  }

  previousSlide = previousSlide => {
    this.setState({enlargedSlide: previousSlide})
  }

  render () {
    const language = this.state.language
    const slides = this.state[language]

    const slideComponents = slides.map((slide, index) => {
      return (
        <div key={index} className="slide">
          <img src={slide.slide} alt={slide.name} onClick={this.enlargeSlide.bind(null, slide)}/>
          <div className="name">{slide.name}</div>
        </div>
      )
    })

    let nextSlide
    let previousSlide
    const enlargedSlide = this.state.enlargedSlide

    if (typeof enlargedSlide !== 'undefined') {
      const slideIndex = slides.map(slide => slide.name).indexOf(enlargedSlide.name)

      nextSlide = slideIndex + 1 === slides.length ? slides[0] : slides[slideIndex + 1]
      previousSlide = slideIndex === 0 ? slides[slides.length - 1] : slides[slideIndex - 1]
    }

    const modal = (
      <div>
        <div className="modal" onClick={() => this.closeSlide()}></div>
        <div className="enlarged-slide">
          <img src={typeof enlargedSlide !== 'undefined' && enlargedSlide.slide}
               alt={typeof(enlargedSlide) !== 'undefined' && enlargedSlide.name}/>
          <div className="close-button" onClick={() => this.closeSlide()}>&times;</div>
          <div className="next-button" onClick={() => this.nextSlide(nextSlide)}>&#8250;</div>
          <div className="previous-button" onClick={() => this.previousSlide(previousSlide)}>&#8249;</div>
        </div>
      </div>
    )

    return (
      <div>
        <div className="resources-page">
          {this.state.enlargedSlide && modal}
          <div className="resources-search">
            <div className="resources">
              <h2>Resources</h2>
              <p><strong>Are you new to cryptocurrency?</strong> This channel has you covered. You can navigate all the
                terms using the term search bar (to the left). Our team takes complicated topics and breaks them down
                into
                easy-to-digest infographics and illustrations. Enjoy and explore!</p>
            </div>
            <div className="search">
              <div className="language-buttons">
                <div className="button-container">
                  <button
                    className={`language-button ${this.state.language === 'english' && 'language-button-active'}`}
                    onClick={(() => this.changeLanguage('english'))}>EN
                  </button>
                  <button
                    className={`language-button ${this.state.language === 'korean' && 'language-button-active'}`}
                    onClick={(() => this.changeLanguage('korean'))}>KR
                  </button>
                </div>
                <div className="toggle-message">Toggle the language icons to alternate English and Korean.</div>
              </div>
              <p><em>This resource page was created by @kr-marketing in collaboration with The Creative Crypto
                Magazine.</em></p>
            </div>
          </div>
          <div className="encyclopedia">
            <h2>Encyclopedia</h2>
            <div className="encyclopedia-slides">
              {slideComponents}
            </div>
          </div>
        </div>
        {!this.props.loading && <Footer/>}
      </div>
    )
  }
}

