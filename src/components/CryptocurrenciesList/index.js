// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptocurrencyItem from '../CryptocurrencyItem'
import './index.css'

const cryptoUrl =
  'https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png'

// alt should be cryptocurrency

class CryptocurrenciesList extends Component {
  state = {isLoading: true, cryptoList: []}

  componentDidMount() {
    this.getCryptoList()
  }

  getCryptoList = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    console.log(data, '*********************************************')
    const convertedData = data.map(eachCrypto => ({
      currencyLogo: eachCrypto.currency_logo,
      currencyName: eachCrypto.currency_name,
      euroValue: eachCrypto.euro_value,
      id: eachCrypto.id,
      usdValue: eachCrypto.usd_value,
    }))
    this.setState({isLoading: false, cryptoList: convertedData})
  }

  render() {
    const {isLoading, cryptoList} = this.state
    return (
      <div className="container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" width={180} height={180} />
          </div>
        ) : (
          <div className="CryptocurrenciesList">
            <h1 className="Crypto_heading">Cryptocurrency Tracker</h1>
            <img
              className="img_cryptocurrency"
              alt="cryptocurrency"
              src={cryptoUrl}
            />
            <div className="table_container" width={100}>
              <table width={80} border={5}>
                <tr className="table_heading_row">
                  <th>Coin Type</th>
                  <th>USD</th>
                  <th>EURO</th>
                </tr>
                {cryptoList.map(item => (
                  <CryptocurrencyItem key={item.id} details={item} />
                ))}
              </table>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default CryptocurrenciesList
