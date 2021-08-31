import { useState, useEffect } from 'react'
import GameInfos from './GameInfos'
import WrapBoard from '../style/WrapBoard.js'
import { toChess } from '../style/Chess.js'
import Light from '../style/Light.js'
import Grid from '../style/Grid.js'
import getWinner from '../getWinner.js'

// main function component ---------------------
const GameBoard = () => {
  const [squares, setSquares] = useState(Array(19).fill(Array(19).fill(0)))
  const [history, setHistory] = useState([ { squares } ])
  const [stepNumber, setStepNumber] = useState(0)
  const [player, setPlayer] = useState(-1)
  const [winner, setWinner] = useState(0)
  const [isReview, setIsReview] = useState(false)
  const [lastSquare, setLastSquare] = useState(null)

  useEffect(() => {
    setWinner(getWinner(squares))
    setLastSquare(squares)
  }, [squares])

  const review = (history, winner, lastSquare) => {
    setIsReview(true)
    setWinner(0)
    console.log(history)
    let time =  history.length
    for (let i = 1; i < time; i++) {
      console.log(i)
      setTimeout(() => {
        setSquares(history[i].squares)
        setPlayer(i % 2 ? -1 : 1)
      }, i * 500)
    }
    setTimeout(() => {
      setWinner(winner)
      setSquares(lastSquare)
      setIsReview(false)
    },time * 500)
  }

  const jumpTo = (step) => {
    setStepNumber(step)
    setPlayer(step % 2 ? 1 : -1)

    if(step + 1 > history.length) return
    setSquares(history[step + 1].squares)
  }

  const handleClick = (x, y, newValue) => {
    if (winner !== 0 || squares[x][y] !== 0) return
    if (isReview) return

    setSquares(
      squares.map((row, currentY) => {
        if (currentY !== x) return row
        return row.map((col, currentX) => {
          if (currentX !== y) return col
          return newValue
        })
      })
    )
    setHistory(
      history.slice(0,stepNumber + 1).concat([
        {
          squares: squares,
        },
      ])
    )
    setStepNumber(history.length)
    setPlayer(player * -1)
  }

  const currentSquares = squares.map((x, idxX) =>
    x.map((y, idxY) => (
      <Grid
        player={player}
        winner={winner}
        isReview={isReview}
        onClick={() => handleClick(idxX, idxY, player)}
      >
        {toChess(squares[idxX][idxY])}
      </Grid>
    ))
  )

  return (
    <>
      <WrapBoard player={player} winner={winner}>
        <Light player={player} winner={winner}/>
        {currentSquares}
      </WrapBoard>
      <GameInfos
        player={player}
        winner={winner}
        toChess={toChess}
        jumpTo={jumpTo}
        review={review}
        isReview={isReview}
        lastSquare={lastSquare}
        stepNumber={stepNumber}
        history={history}
      ></GameInfos>
    </>
  )
}

export default GameBoard
