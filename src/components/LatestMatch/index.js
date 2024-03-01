// Write your code here
import {Component} from 'react'

class LatestMatch extends Component {
  render() {
    const {latestmatchDeatails} = this.props
    const {
      competitingTeam,
      competitingTeamLogo,
      date,
      firstInnings,
      secondInnings,
      manOfTheMatch,
      umpires,
      venue,
      result,
    } = latestmatchDeatails
    return (
      <div>
        <h1>Latest Match</h1>
        <div>
          <p>{competitingTeam}</p>
          <p>{date}</p>
          <p>{venue}</p>
          <p>{result}</p>
        </div>
        <img
          src={competitingTeamLogo}
          alt={`latest match ${competitingTeam}`}
        />
        <div>
          <div>
            <p>First Innings</p>
            <p>{firstInnings}</p>
          </div>
          <div>
            <p>Second Innings</p>
            <p>{secondInnings}</p>
          </div>
          <div>
            <p> Man Of The Match</p>
            <p>{manOfTheMatch}</p>
          </div>
          <div>
            <p>Umpires</p>
            <p>{umpires}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default LatestMatch
