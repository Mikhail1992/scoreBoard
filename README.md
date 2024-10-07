# Live Football World Cup Scoreboard

This library provides a simple way to manage live football matches. It allows starting new matches, updating scores, finishing matches, and retrieving a summary of ongoing matches, sorted by total score and, in case of ties, by the most recently started match.

## Installation

This library is a simple JavaScript class implementation. You can use it by copying the code into your project.

## Usage

Here’s an example of how to use the library:

```javascript
const scoreboard = new Scoreboard();

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

const summary = scoreboard.getSummary()
