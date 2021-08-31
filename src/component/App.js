import styled from 'styled-components'
import { Wrap } from '../style/GlobalStyle.js'
import GameBoard from './GameBoard'
import Footer from './Footer'

const WrapGame = styled.div`
  display: flex;
`

function App() {
  return (
    <>
    <Wrap>
      <WrapGame>
        <GameBoard></GameBoard>
      </WrapGame>
    </Wrap>
    <Footer />
    </>
  );
}

export default App;
