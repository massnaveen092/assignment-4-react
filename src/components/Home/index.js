// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import TeamCard from '../TeamCard'

class Home extends Component {
  state = {
    isLoading: true,
    teamData: [],
  }

  componentDidMount() {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()

    const newdata = data.map(each => ({
      name: each.name,
      id: each.id,
      imageUrl: each.image_url,
    }))
    this.setState({
      teamData: newdata,
      isLoading: false,
    })
  }

  renderTeamList = () => {
    const {teamData} = this.state

    return (
      <ul>
        {teamData.map(each => (
          <TeamCard key={each.id} teamData={each} />
        ))}
      </ul>
    )
  }

  renderLoader = () => (
    <div data-testid="loader">
      <Loader type="Rings" color="#00BFFF" height={50} width={50} />
    </div>
  )

  render() {
    const {isLoading} = this.state

    return (
      <div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
          />
          <h1>IPL Dashboard</h1>
        </div>
        {isLoading ? this.renderLoader() : this.renderTeamList()}
      </div>
    )
  }
}

export default Home
