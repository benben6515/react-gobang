const getWinner = (squares) => {
  // columns
  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 19; j++) {
      if (
        squares[i][j] !== 0 &&
        squares[i][j] === squares[i + 1][j] &&
        squares[i][j] === squares[i + 2][j] &&
        squares[i][j] === squares[i + 3][j] &&
        squares[i][j] === squares[i + 4][j]
      ) {
        return squares[i][[j]]
      }
    }
  }

  // rows
  for (let i = 0; i < 19; i++) {
    for (let j = 0; j < 15; j++) {
      if (
        squares[i][j] !== 0 &&
        squares[i][j] === squares[i][j + 1] &&
        squares[i][j] === squares[i][j + 2] &&
        squares[i][j] === squares[i][j + 3] &&
        squares[i][j] === squares[i][j + 4]
      ) {
        return squares[i][[j]]
      }
    }
  }

  // top - right
  for (let i = 0; i < 15; i++) {
    for (let j = 0; j < 15; j++) {
      if (
        squares[i][j] !== 0 &&
        squares[i][j] === squares[i + 1][j + 1] &&
        squares[i][j] === squares[i + 2][j + 2] &&
        squares[i][j] === squares[i + 3][j + 3] &&
        squares[i][j] === squares[i + 4][j + 4]
      ) {
        return squares[i][j]
      }
    }
  }

  // top - left
  for (let i = 0; i < 15; i++) {
    for (let j = 18; j > 3; j--) {
      if (
        squares[i][j] !== 0 &&
        squares[i][j] === squares[i + 1][j - 1] &&
        squares[i][j] === squares[i + 2][j - 2] &&
        squares[i][j] === squares[i + 3][j - 3] &&
        squares[i][j] === squares[i + 4][j - 4]
      ) {
        return squares[i][j]
      }
    }
  }

  return 0
}

export default getWinner