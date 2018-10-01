import React from 'react'
import './assets/react-toolbox/theme.css'
import theme from './assets/react-toolbox/theme.js'
import ThemeProvider from 'react-toolbox/lib/ThemeProvider'
import CustomLink from './components/CustomLink/CustomLink.js'
import CustomAppBar from './components/CustomAppBar/CustomAppBar.js'
import CustomNavigation from './components/CustomNavigation/CustomNavigation.js'
import CustomButton from './components/CustomButton/CustomButton.js'
import ImageButtonBig from './components/ImageButtonBig/ImageButtonBig.js'
import ImageButtonSmall from './components/ImageButtonSmall/ImageButtonSmall.js'
import './App.css'
import logo from './images/logo.png'

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <CustomAppBar className='appbar'>
            <div className="sidePart">
              <img src={logo} alt={logo} />
            </div>
            <CustomNavigation type='horizontal' className='navigation'>
              <CustomLink href='#' label='PARTNER WITH US' className='pages' />
              <CustomLink href='#' label='ABOUT US' className='pages' />
              <CustomLink href='#' label='OUR NETWORK' className='pages' />
              <CustomLink href='#' label='NEWS' className='pages' />
              <CustomLink href='#' label='EVENTS' className='pages' />
              <CustomLink href='#' label='CAREERS' className='pages' />
            </CustomNavigation>
            <div className="sidePart">
              <CustomNavigation type='horizontal' className='navigation'>
                <CustomLink href='#' label='EN' className='pages' />
                <span>|</span>
                <CustomLink href='#' label='DE' className='pages' />
              </CustomNavigation>
              <CustomButton label='CONTACT US' className='navigateButton'/>
            </div>
          </CustomAppBar>
          <div className='container'>
            <article className="mainContainer">
              <h1>PARTNER WITH US</h1>
              <section>
                <ImageButtonBig className="partners first">
                  <span>GLOBAL <br />PARTNERSHIPS</span>
                </ImageButtonBig>
                <ImageButtonBig className="partners second">
                  <span>CONTENT <br />DISTRIBUTION</span>
                </ImageButtonBig>
                <ImageButtonBig className="partners third">
                  <span>MEDIA SALES</span>
                </ImageButtonBig>
                <div className="partners fourth">
                  <span>CASE STUDIES</span>
                  <div>
                    <ImageButtonSmall label='PUMA - Red Bull URBEX' className="studies puma"/>
                    <ImageButtonSmall label='adidas - Primavera' className="studies primavera" />
                    <ImageButtonSmall label='TAG Heuer' className="studies timekeeper"/>
                  </div>
                </div>
              </section>
            </article>
          </div>
        </div>
      </ThemeProvider>
    )
  }
}

export default App
