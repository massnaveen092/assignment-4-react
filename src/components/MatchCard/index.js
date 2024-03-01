// Write your code here
import {Component} from 'react'

class MatchCard extends Component {
  render() {
    const {matchData} = this.props
    const {result, competitingTeam, competitingTeamLogo, matchStatus} =
      matchData

    return (
      <li>
        <div>
          <img
            src={competitingTeamLogo}
            alt={`competiting team ${competitingTeam}`}
          />
          <p>{competitingTeam}</p>
          <p>{matchStatus}</p>
          <p>{result}</p>
        </div>
      </li>
    )
  }
}

export default MatchCard
