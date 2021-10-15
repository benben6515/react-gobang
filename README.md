### React Gobang（五子棋）

[demo](https://benben6515.github.io/react-gobang/)

### 功能：
  1. 可以下五子棋
  2. 並可以在過程中返回任一步
  3. 結束之後可以重播對奕過程
  4. 棋盤的周圍會隨著當前玩家變色
### 使用技術：
- react
- styled-components
- 棋盤使用 grid 排版

### 部分截圖

<img src="https://i.imgur.com/IjGmwPc.gif" width="500" alt="gobang picture" />

### Source tree
```
📦src
 ┣ 📂component
 ┃ ┣ 📜App.js
 ┃ ┣ 📜Footer.js
 ┃ ┣ 📜GameBoard.js
 ┃ ┣ 📜GameInfos.js
 ┃ ┗ 📜index.js
 ┣ 📂style
 ┃ ┣ 📜Chess.js
 ┃ ┣ 📜GlobalStyle.js
 ┃ ┣ 📜Grid.js
 ┃ ┣ 📜Light.js
 ┃ ┗ 📜WrapBoard.js
 ┣ 📜getWinner.js
 ┗ 📜index.js
```