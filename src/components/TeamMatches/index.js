// Write your code here
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import MatchCard from '../MatchCard'

class TeamMatches extends Component {
  state = {
    matchdata: [],
    isLoding: true,
  }

  componentDidMount() {
    this.getTeamMatches()
  }

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const newdata = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: {
        id: data.latest_match_details.id,
        competitingTeam: data.latest_match_details.competing_team,
        competitingTeamLogo: data.latest_match_details.competing_team_logo,
        date: data.latest_match_details.date,
        firstInnings: data.latest_match_details.first_innings,
        manOfTheMatch: data.latest_match_details.man_of_the_match,
        secondInnings: data.latest_match_details.second_innings,
        result: data.latest_match_details.result,
        umpires: data.latest_match_details.umpires,
        venue: data.latest_match_details.venue,
      },
      recentMatches: data.recent_matches.map(each => ({
        umpires: each.umpires,
        result: each.result,
        manOfTheMatch: each.man_of_the_match,
        id: each.id,
        date: each.date,
        venue: each.venue,
        competitingTeam: each.competing_team,
        competitingTeamLogo: each.competing_team_logo,
        firstInnings: each.first_innings,
        secondInnings: each.second_innings,
        matchStatus: each.match_status,
      })),
    }
    this.setState({
      isLoding: false,
      matchdata: newdata,
    })
  }

  renderTeamMatcheslist = () => {
    const {matchdata} = this.state
    const {teamBannerUrl, latestMatchDetails} = matchdata
    return (
      <div>
        <img src={teamBannerUrl} alt="team banner" />
        <LatestMatch latestMatch={latestMatchDetails} />
        {this.renderRecentMatchesList()}
      </div>
    )
  }

  renderRecentMatchesList = () => {
    const {matchdata} = this.data
    const {recentMatches} = matchdata
    return (
      <ul>
        {recentMatches.map(each => (
          <MatchCard matchData={each} key={each.id} />
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
    const {isLoding} = this.state
    const {match} = this.props
    const {params} = match
    const {id} = params
    return (
      <div>{isLoding ? this.renderLoader() : this.renderTeamMatcheslist}</div>
    )
  }
}

export default TeamMatches
