// Write your code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import CryptocurrenciesList from '../CryptocurrenciesList'

import './index.css'

class CryptocurrencyTracker extends Component {
  state = {isLoading: true}

  componentDidMount() {
    this.setState({isLoading: false})
  }

  render() {
    const {isLoading} = this.state
    return (
      <div className="CryptocurrencyTracker">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="Rings" color="#ffffff" height={80} width={80} />
          </div>
        ) : (
          <CryptocurrenciesList />
        )}
      </div>
    )
  }
}

export default CryptocurrencyTracker
