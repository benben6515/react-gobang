import styled, { css, keyframes } from 'styled-components'
import { Wrap } from './GlobalStyle.js'

const whiteBreath = keyframes`
  from {
    box-shadow: 
      0px 0px 15px 5px rgba(255,255,255,0.2),
      0px 0px 20px 5px rgba(255,255,255,0.2),
      0px 0px 25px 5px rgba(255,255,255,0.2);
  }
  to {
    box-shadow: 
      0px 0px 25px 10px rgba(255,255,255,0.3),
      0px 0px 30px 10px rgba(255,255,255,0.3),
      0px 0px 35px 10px rgba(255,255,255,0.3);
  }
`
const blackBreath = keyframes`
  from {
    box-shadow: 
      0px 0px 15px 5px rgba(0,0,0,0.2),
      0px 0px 20px 5px rgba(0,0,0,0.2),
      0px 0px 25px 5px rgba(0,0,0,0.2);
  }
  to {
    box-shadow: 
      0px 0px 25px 10px rgba(0,0,0,0.3),
      0px 0px 30px 10px rgba(0,0,0,0.3),
      0px 0px 35px 10px rgba(0,0,0,0.3);
  }
`

const WrapBoard = styled(Wrap)`
  width: 600px;
  height: 600px;
  background-color: #b96;
  flex-shrink: 0;
  display: grid;
  grid-template-columns: repeat(19, 1fr);
  position: relative;
  overflow: hidden;
  ${props => props.player === -1 && `
    border: 8px double #000;
    box-shadow: 
      0px 0px 15px 2px rgba(0,0,0,0.2),
      0px 0px 10px 2px rgba(0,0,0,0.2),
      0px 0px 5px 2px rgba(0,0,0,0.2);
  `}
  ${props => props.player === 1 && `
    border: 8px double #fff;
    box-shadow: 
      0px 0px 15px 2px rgba(255,255,255,0.2),
      0px 0px 10px 2px rgba(255,255,255,0.2),
      0px 0px 5px 2px rgba(255,255,255,0.2);
  `}
  ${props => props.winner === -1 && css`
    border: 8px double #000;
    animation: ${blackBreath} 1.2s infinite alternate;
  `}
  ${props => props.winner === 1 && css`
    border: 8px double #fff;
    animation: ${whiteBreath} 1.2s infinite alternate;
  `}

  & > span {
  position: absolute;
  display: block;
  z-index: 1;
  ${props => props.player === -1 && `
    box-shadow: 
      0px 0px 5px rgba(0,0,0,0.2),
      0px 0px 8px rgba(0,0,0,0.2);
  `}
  ${props => props.player === 1 && `
    box-shadow: 
      0px 0px 5px rgba(255,255,255,0.2),
      0px 0px 8px rgba(255,255,255,0.2);
  `}
}
`

export default WrapBoard