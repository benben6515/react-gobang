import { Wrap, WrapGame } from '../style/GlobalStyle.js'
import GameBoard from './GameBoard'
import Footer from './Footer'


function App() {
  return (
    <>
      <Wrap>
        <WrapGame>
          <GameBoard />
        </WrapGame>
      </Wrap>
      <Footer />
    </>
  );
}

export default App;
