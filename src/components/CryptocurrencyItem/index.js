// Write your JS code here

import './index.css'

// currencyLogo,currencyName,usdValue,euroValue

const CryptocurrencyItem = props => {
  const {details} = props
  const {currencyLogo, currencyName, usdValue, euroValue} = details

  return (
    <tr>
      <td>
        <div className="bitcoin_logoAndImage_container">
          <img alt="" src={currencyLogo} className="logo_bitcoin" />
          <p className="currencyName">{currencyName}</p>
        </div>
      </td>
      <td>{usdValue}</td>
      <td>{euroValue}</td>
    </tr>
  )
}

export default CryptocurrencyItem
