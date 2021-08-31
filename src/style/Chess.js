import styled from 'styled-components'


const toChess = (e) => {
  switch(e) {
    case 1:
      return <Chess value={1} />
    case -1:
      return <Chess value={-1} />
    default:
      return <Chess value={0} />
  }
}

const Chess = styled.div`
  background-color: transparent;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  position: relative;
  z-index: 1;

  ${props => props.value !== 0 && `
    border: 1px solid #888;
    box-shadow: 
      2px 2px 3px rgba(0,0,0,0.2),
      2px 2px 5px rgba(0,0,0,0.2);
    &:before {
      content: '';
      position: absolute;
      top: 3px;
      left: 5px;
      background: #ccc;
      width: 3px;
      height: 2px;
      border-radius: 50%;
    }
  `}

  ${props => props.value === 1 && `
    background-color: #ddd;
    &:before {
      content: '';
      position: absolute;
      top: 3px;
      left: 5px;
      background: #fff;
      width: 4px;
      height: 2px;
      border-radius: 50%;
    }
  `}
  ${props => props.value === -1 && `
    background-color: #000;
  `}
`

export { toChess }
export default Chess