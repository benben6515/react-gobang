import { Button } from '../style/GlobalStyle.js'
import styled from 'styled-components'

const WrapInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: .8rem;
  border: 1px solid #000;
  border-radius : .3rem;
  background: #666;
  width: 300px;
  height: 600px;
  min-height: 600px;
  flex-shrink: 0;
  padding: 1rem;
  overflow-y: scroll;
  box-shadow:
    5px 5px 5px rgba(0,0,0,0.2),
    5px 5px 8px rgba(0,0,0,0.2);
`

const InfoPlayer = styled.div`
  display: flex;
  font-size: 1.2rem;
  font-weight: 700;
  div {
    margin-right: .5rem;
  }
`

const WinnerTxt = styled.div`
  color: #fff;
  font-weight: 900;
  text-shadow: 1px 1px 5px rgba(255,255,255,0.5);
`

const InfoButtons = styled.div`
  display: flex;
  width: 100%;
  flex-flow: column wrap;
  /* overflow: scroll; */
`

const InfoButton = styled(Button)`
  background: #333;
  color: #ccc;
  margin: .2rem 0;
`

const GameInfos = ({
  player,
  winner,
  toChess,
  review,
  isReview,
  lastSquare,
  history,
  jumpTo,
}) => {
  const moves = history.map((step, move) => {
    const desc = move ? "Go to move #" + move : "Reset"
    if ( move === history.length - 1) return ""
    return (
      <InfoButton key={move} onClick={() => jumpTo(move)}>
        {desc}
      </InfoButton>
    )
  })

  return (
    <WrapInfos>

      <InfoPlayer>
        {winner === 0 ? <div>Player : </div> : <WinnerTxt>Winner : </WinnerTxt>}
        {winner === 0 ? toChess(player) : toChess(winner)}
      </InfoPlayer>

      {isReview ? (<InfoButtons><InfoButton>Reviewing...</InfoButton></InfoButtons>) : (
        <InfoButtons>
          {winner !== 0 && (
            <InfoButton onClick={() => review(history, winner, lastSquare)}>
              Review
            </InfoButton>
          )}
          {moves}
        </InfoButtons>
      )}

    </WrapInfos>
  )
}

export default GameInfos