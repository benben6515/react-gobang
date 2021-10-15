import styled from 'styled-components'

const Grid = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &:before {
    content: "";
    display: block;
    height: 200%;
    width: 2px;
    position: absolute;
    left: 50%;
    background-color: #333;
  }
  &:after {
    content: "";
    display: block;
    height: 2px;
    width: 200%;
    position: absolute;
    top: 50%;
    background-color: #333;
  }

  ${({ player, winner, isReview }) =>
    player === 1 &&
    winner === 0 &&
    !isReview && `
    cursor: pointer;
    &:hover {
      background-color: rgba(255,255,255,0.2);
    }
  `}

  ${({ player, winner, isReview }) =>
    player === -1 &&
    winner === 0 &&
    !isReview && `
    cursor: pointer;
    &:hover {
      background-color: rgba(0,0,0,0.2);
    }
  `}
`

export default Grid