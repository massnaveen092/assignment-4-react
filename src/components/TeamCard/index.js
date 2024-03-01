import {Component} from 'react'
import {Link} from 'react-router-dom'

class TeamCard extends Component {
  render() {
    const {teamdata} = this.props
    const {name, imageUrl, id} = teamdata

    return (
      <Link to={`/team-matches/${id}`}>
        <li>
          <img src={imageUrl} alt={`${name}`} />
          <p>{name}</p>
        </li>
      </Link>
    )
  }
}

export default TeamCard
