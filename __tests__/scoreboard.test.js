import { Scoreboard } from '../lib/scoreboard'

describe('Scoreboard', () => {
  let scoreboard

  beforeEach(() => {
    scoreboard = new Scoreboard()
  })

  test('should start a match with initial score 0-0', () => {
    // Arrange
    scoreboard.startMatch('Mexico', 'Canada')

    // Act
    const summary = scoreboard.getSummary()

    // Assert
    expect(summary).toEqual(['Mexico 0 - Canada 0'])
  })

  test('should update the score of an ongoing match', () => {
    // Arrange
    scoreboard.startMatch('Mexico', 'Canada')
    scoreboard.updateScore('Mexico', 'Canada', 1, 3)

    // Act
    const summary = scoreboard.getSummary()

    // Assert
    expect(summary).toEqual(['Mexico 1 - Canada 3'])
  })

  test('should finish a match and remove it from the scoreboard', () => {
    // Arrange
    scoreboard.startMatch('Mexico', 'Canada')
    scoreboard.finishMatch('Mexico', 'Canada')

    // Act
    const summary = scoreboard.getSummary()

    // Assert
    expect(summary).toEqual([])
  })

  test('should return matches ordered by total score', () => {
    // Arrange
    scoreboard.startMatch('Mexico', 'Canada')
    scoreboard.startMatch('Spain', 'Brazil')
    scoreboard.updateScore('Mexico', 'Canada', 0, 5)
    scoreboard.updateScore('Spain', 'Brazil', 10, 2)

    // Act
    const summary = scoreboard.getSummary()

    // Assert
    expect(summary).toEqual(['Spain 10 - Brazil 2', 'Mexico 0 - Canada 5'])
  })

  test('should order by start time when scores are tied', () => {
    // Arrange
    scoreboard.startMatch('Mexico', 'Canada')
    scoreboard.startMatch('Spain', 'Brazil')
    scoreboard.startMatch('Germany', 'France')
    scoreboard.startMatch('Uruguay', 'Italy')
    scoreboard.startMatch('Argentina', 'Australia')
    scoreboard.updateScore('Mexico', 'Canada', 0, 5)
    scoreboard.updateScore('Spain', 'Brazil', 10, 2)
    scoreboard.updateScore('Germany', 'France', 2, 2)
    scoreboard.updateScore('Uruguay', 'Italy', 6, 6)
    scoreboard.updateScore('Argentina', 'Australia', 3, 1)

    // Act
    const summary = scoreboard.getSummary()

    // Assert
    expect(summary).toEqual([
      'Spain 10 - Brazil 2',
      'Uruguay 6 - Italy 6',
      'Mexico 0 - Canada 5',
      'Germany 2 - France 2',
      'Argentina 3 - Australia 1'
    ])
  })

  test('should update multiple matches and give correct summary', () => {
    // Arrange
    scoreboard.startMatch('Mexico', 'Canada')
    scoreboard.startMatch('Spain', 'Brazil')
    scoreboard.startMatch('Germany', 'France')
    scoreboard.updateScore('Mexico', 'Canada', 0, 5)
    scoreboard.updateScore('Spain', 'Brazil', 10, 2)
    scoreboard.updateScore('Germany', 'France', 2, 2)

    // Act
    const summary = scoreboard.getSummary()

    // Assert
    expect(summary).toEqual([
      'Spain 10 - Brazil 2',
      'Mexico 0 - Canada 5',
      'Germany 2 - France 2'
    ])
  })

  test('should not update score of a non-existing match', () => {
    // Arrange
    scoreboard.startMatch('Mexico', 'Canada')
    scoreboard.updateScore('NonExistTeam1', 'NonExistTeam2', 1, 1)

    // Act
    const summary = scoreboard.getSummary()

    // Assert
    expect(summary).toEqual(['Mexico 0 - Canada 0'])
  })
})
