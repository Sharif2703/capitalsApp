import {Component} from 'react'
import './index.css'

const countryAndCapitalsList = [
  {
    id: 'NEW_DELHI',
    capitalDisplayText: 'New Delhi',
    country: 'India',
  },
  {
    id: 'LONDON',
    capitalDisplayText: 'London',
    country: 'United Kingdom',
  },
  {
    id: 'PARIS',
    capitalDisplayText: 'Paris',
    country: 'France',
  },
  {
    id: 'KATHMANDU',
    capitalDisplayText: 'Kathmandu',
    country: 'Nepal',
  },
  {
    id: 'HELSINKI',
    capitalDisplayText: 'Helsinki',
    country: 'Finland',
  },
]

// Write your code here

class Capitals extends Component {
  state = {countryName: countryAndCapitalsList[0].id}

  catchCapital = event => {
    this.setState({countryName: event.target.value})
  }

  catchCountry = () => {
    const {countryName} = this.state
    const filteredCountry = countryAndCapitalsList.find(
      eachOne => eachOne.id === countryName,
    )
    return filteredCountry.country
  }

  render() {
    const country = this.catchCountry()
    console.log(country)
    return (
      <div className="capitals-app-bg">
        <div className="capitals-app-card">
          <h1>Countries And Capitals</h1>
          <div>
            <select
              id="country"
              className="select"
              onChange={this.catchCapital}
            >
              {countryAndCapitalsList.map(eachItem => (
                <option value={eachItem.id} key={eachItem.id}>
                  {eachItem.capitalDisplayText}
                </option>
              ))}
            </select>
            <label htmlFor="country" className="label-name">
              is capital of which country?
            </label>
          </div>
          <p>{country}</p>
        </div>
      </div>
    )
  }
}

export default Capitals
