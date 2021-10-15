import styled ,{ createGlobalStyle } from "styled-components";

// reset CSS ---------------------
const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    list-style: none;
    box-sizing: border-box;
    font-family: "微軟正黑體"
  }

  body, html {
    width: 100%;
    height: 100%;
  }

  body {
    background-color: #bbb;
  }
`

const Button = styled.button`
  padding: .4rem;
  color: black;
  font-size: 1.2em;
  background-color: ${(props) => props.backgroundColor};
  border: 1px solid #999;
  &:hover {
    filter: brightness(0.9);
  }
  &:active {
    filter: brightness(0.5);
  }
`

const Wrap = styled.div`
  display: grid;
  align-items: center;
  width: clamp(30rem, 70%, 70rem);
  min-height: calc(100vh - 1.6rem);
  margin: auto;
`

const WrapGame = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`

export default GlobalStyle
export { Button, Wrap, WrapGame }

