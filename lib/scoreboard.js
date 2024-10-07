import { Match } from './match'

export class Scoreboard {
  constructor() {
    this.matches = []
  }

  startMatch(homeTeam, awayTeam) {
    const match = new Match(homeTeam, awayTeam)
    this.matches.push(match)
  }

  updateScore(homeTeam, awayTeam, homeScore, awayScore) {
    const match = this.findMatch(homeTeam, awayTeam)
    if (match) {
      match.updateScore(homeScore, awayScore)
    } else {
      console.log('Match not found')
    }
  }

  finishMatch(homeTeam, awayTeam) {
    this.matches = this.matches.filter(
      (match) => !(match.homeTeam === homeTeam && match.awayTeam === awayTeam)
    )
  }

  findMatch(homeTeam, awayTeam) {
    return this.matches.find(
      (match) => match.homeTeam === homeTeam && match.awayTeam === awayTeam
    )
  }

  getSummary() {
    return this.matches
      .sort((a, b) => {
        const scoreComparison = b.totalScore() - a.totalScore()
        if (scoreComparison !== 0) {
          return scoreComparison
        }
        return b.startTime - a.startTime
      })
      .map((match) => match.getMatchInfo())
  }
}
