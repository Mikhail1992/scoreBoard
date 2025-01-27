export class Match {
  constructor(homeTeam, awayTeam) {
    this.homeTeam = homeTeam
    this.awayTeam = awayTeam
    this.homeScore = 0
    this.awayScore = 0
    this.startTime = new Date()
  }

  updateScore(homeScore, awayScore) {
    this.homeScore = homeScore
    this.awayScore = awayScore
  }

  totalScore() {
    return this.homeScore + this.awayScore
  }

  getMatchInfo() {
    return `${this.homeTeam} ${this.homeScore} - ${this.awayTeam} ${this.awayScore}`
  }
}
