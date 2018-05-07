import React from 'react'
import logo from '../img/about/180407 The Creative Crypto Logo.svg'
import michael from '../img/about/180425 CC Team - Michael.png'
import kirk from '../img/about/180425 CC Team - Kirk.png'
import krMarketing from '../img/about/180425 CC Kr-marketing.png'
import jeff from '../img/about/180425 CC Team - Jeff.png'
import zolt from '../img/about/180425 CC Team - Zsolt.png'
import emre from '../img/about/180425 CC Team - Emre.png'
import carrot from '../img/about/180425 CC Team - Carrotcake.png'
import rambai from '../img/about/180425 CC Team - Rambai.png'

import './about.css'

export class About extends React.Component {
  render () {
    const portraitInfo = [{
      portrait: michael,
      name: 'Michael Lee',
      title: 'Director of Operations'
    }, {
      portrait: kirk,
      name: 'Kirk Finkel',
      title: 'Creative Director'
    }, {
      portrait: krMarketing,
      name: '@kr-marketing',
      title: 'Korean Marketing & Design Team'
    }, {
      portrait: jeff,
      name: '@jeffbernst',
      title: 'Lead Developer'
    }, {
      portrait: zolt,
      name: '@zolt.vidak',
      title: 'Lead Illustrator'
    }, {
      portrait: emre,
      name: '@emrebeyler',
      title: 'Developer'
    }, {
      portrait: carrot,
      name: '@carrotcake',
      title: 'Illustrator'
    }, {
      portrait: rambai,
      name: 'ranbai',
      title: 'Illustrator'
    }
    ]

    const portraitComponents = portraitInfo.map(person => {
      return (
        <div className="portrait">
          <img src={person.portrait} alt={person.name}/>
          <div className="about-name">{person.name}</div>
          <div className="about-title">{person.title}</div>
        </div>
      )
    })

    return (
      <div className="about">
        <div className="mission-team">
          <div className="mission">
            <h3>Mission</h3>
            <p><strong>The Creative Crypto</strong> is a Steem-powered magazine dedicated to all things creative on the
              blockchain.</p>
            <p>We are a news source for thoughtful, approachable and impactful stories surrounding art, design, and
              innovation in the cryptocurrency landscape.</p>
          </div>
          <div className="team">
            <h3>Team</h3>
            <p>The <strong>@creativecrypto</strong> is changing the way we think about cryptocurrency. Through a global
              and interdisciplinary team of editors, curators, developers and artists - we reward content creators and
              readers.</p>
          </div>
        </div>
        <div className="about-hr">
          <img src={logo} alt="creative crypto logo" className="logo"/>
        </div>
        <div className="about-portraits">
          {portraitComponents}
        </div>
      </div>
    )
  }
}

