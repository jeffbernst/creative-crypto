import React from 'react'
import { Link } from 'react-router-dom'

import './nav-bar.css'
import tcc_title from '../img/tcc_title.svg'
import upvote_white from '../img/upvote_white.svg'

export class NavBar extends React.Component {
  state = {
    steemPrice: 0,
    steemDirection: '\u2303',
    sbdPrice: 0,
    sbdDirection: '\u2303'
  }

  async componentDidMount () {
    const steemPriceData = await this.getPrice('steem')
    const steemDirection = parseFloat(steemPriceData[0].percent_change_1h) < 0 ? 'rotated' : ''
    const steemPrice = parseFloat(steemPriceData[0].price_usd).toFixed(2)

    const sbdPriceData = await this.getPrice('steem-dollars')
    const sbdDirection = parseFloat(sbdPriceData[0].percent_change_1h) < 0 ? 'rotated' : ''
    const sbdPrice = parseFloat(sbdPriceData[0].price_usd).toFixed(2)

    const bitcoinPriceData = await this.getPrice('bitcoin')
    const bitcoinDirection = parseFloat(bitcoinPriceData[0].percent_change_1h) < 0 ? 'rotated' : ''
    const bitcoinPriceWithoutCommas = parseFloat(bitcoinPriceData[0].price_usd).toFixed(2)
    const bitcoinPrice = this.numberWithCommas(bitcoinPriceWithoutCommas)

    this.setState({
      steemPrice,
      steemDirection,
      sbdPrice,
      sbdDirection,
      bitcoinPrice,
      bitcoinDirection
    })
  }

  numberWithCommas = (x) => {
    let parts = x.toString().split('.')
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    return parts.join('.')
  }

  async getPrice (name) {
    const response = await fetch(`https://api.coinmarketcap.com/v1/ticker/${name}/`)
    const data = await response.json()
    return data
  }

  render () {
    return (
      <nav className="nav-container">
        <div className="nav-content">
          <div className="nav-title">
            <Link to={'/'}><img src={tcc_title} alt="the creative crypto title"/></Link>
          </div>
          <div className="nav-right">
            <div className="bitcoin-price">
              <span className="bitcoin-label">BTC</span> <img src={upvote_white} alt="ticker arrow"
                                                              className={`ticker-arrow ${this.state.sbdDirection}`}/> $ {this.state.bitcoinPrice}
            </div>
            <div className="steem-price">
              <span className="steem-label">STEEM</span> <img src={upvote_white} alt="ticker arrow"
                                                              className={`ticker-arrow ${this.state.steemDirection}`}/> $ {this.state.steemPrice}
            </div>
            <div className="sbd-price">
              <span className="sbd-label">SBD</span> <img src={upvote_white} alt="ticker arrow"
                                                          className={`ticker-arrow ${this.state.sbdDirection}`}/> $ {this.state.sbdPrice}
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
