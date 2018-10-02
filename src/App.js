import React from 'react'
import './App.css'
import './assets/react-toolbox/theme.css'
import theme from './assets/react-toolbox/theme.js'
import ThemeProvider from 'react-toolbox/lib/ThemeProvider'

import Article from './components/Article'
import Container from './components/Container'
import Header from './components/Header'
import ButtonsBar from './components/ButtonsBar'

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Header />
          <Container>
            <ButtonsBar />
            <Article />
          </Container>
        </div>
      </ThemeProvider>
    )
  }
}

export default App
