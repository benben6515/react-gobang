import styled, { keyframes } from 'styled-components'

// Animation CSS
const top = keyframes`
  from {
    left: -100%;
  }
  to {
    left: 100%;
  }
`
const bottom = keyframes`
  from {
    right: -100%;
  }
  to {
    right: 100%;
  }
`
const right = keyframes`
  from {
    top: -100%;
  }
  to {
    top: 100%;
  }
`
const left = keyframes`
  from {
    top: 100%;
  }
  to {
    top: -100%;
  }
`

// Styled-component CSS
const LightTop = styled.span`
  top: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg,transparent,#000);
  ${({player}) => player === 1 && `
    background: linear-gradient(90deg,transparent,#fff);
  `}
  ${({winner}) => winner === -1 && `
    background: linear-gradient(90deg,transparent,#000);
  `}
  ${({winner}) => winner === 1 && `
    background: linear-gradient(90deg,transparent,#fff);
  `}
  animation: ${top} 2s infinite;
`

const LightBottom = styled.span`
  bottom: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(270deg,transparent,#000);
  ${({player}) => player === 1 && `
    background: linear-gradient(270deg,transparent,#fff);
  `}
  ${({winner}) => winner === -1 && `
    background: linear-gradient(270deg,transparent,#000);
  `}
  ${({winner}) => winner === 1 && `
    background: linear-gradient(270deg,transparent,#fff);
  `}
  animation: ${bottom} 2s infinite;
  animation-delay: 1s;
`

const LightRight = styled.span`
  right: 0;
  width: 3px;
  height: 100%;
  background: linear-gradient(180deg,transparent,#000);
  ${({player}) => player === 1 && `
    background: linear-gradient(180deg,transparent,#fff);
  `}
  ${({winner}) => winner === -1 && `
    background: linear-gradient(180deg,transparent,#000);
  `}
  ${({winner}) => winner === 1 && `
    background: linear-gradient(180deg,transparent,#fff);
  `}
  animation: ${right} 2s infinite;
  animation-delay: .5s;
`

const LightLeft = styled.span`
  left: 0;
  width: 3px;
  height: 100%;
  background: linear-gradient(360deg,transparent,#000);
  ${({player}) => player === 1 && `
    background: linear-gradient(360deg,transparent,#fff);
  `}
  ${({winner}) => winner === -1 && `
    background: linear-gradient(360deg,transparent,#000);
  `}
  ${({winner}) => winner === 1 && `
    background: linear-gradient(360deg,transparent,#fff);
  `}
  animation: ${left} 2s infinite;
  animation-delay: 1.5s;
`

const Light = ({player, winner}) => {
  return (
    <>
      <LightTop player={player} winner={winner}></LightTop>
      <LightRight player={player} winner={winner}></LightRight>
      <LightBottom player={player} winner={winner}></LightBottom>
      <LightLeft player={player} winner={winner}></LightLeft>
    </>
  )
}

export default Light