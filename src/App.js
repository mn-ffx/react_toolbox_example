import React from 'react'
import './App.css'
import './assets/react-toolbox/theme.css'
import theme from './assets/react-toolbox/theme.js'
import ThemeProvider from 'react-toolbox/lib/ThemeProvider'

import Container from './components/Container/Container.js'
import CustomAppBar from './components/CustomAppBar/CustomAppBar.js'
import CustomButton from './components/CustomButton/CustomButton.js'
import CustomLink from './components/CustomLink/CustomLink.js'
import CustomNavigation from './components/CustomNavigation/CustomNavigation.js'
import Headline from './components/Headline/Headline.js'
import ImageButtonBig from './components/ImageButtonBig/ImageButtonBig.js'
import ImageButtonSmall from './components/ImageButtonSmall/ImageButtonSmall.js'
import ImageContainer from './components/ImageContainer/ImageContainer.js'
import Sidepart from './components/Sidepart/Sidepart.js'
import Text from './components/Text/Text.js'
import Wrapper from './components/Wrapper/Wrapper.js'

import logo from './images/logo.png'

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">

          <CustomAppBar className='appbar'>
            <Sidepart>
              <img src={logo} alt='logo' />
            </Sidepart>
            <CustomNavigation type='horizontal' className='navigation'>
              <CustomLink href='/' label='PARTNER WITH US' className='pages' />
              <CustomLink href='/' label='ABOUT US' className='pages' />
              <CustomLink href='/' label='OUR NETWORK' className='pages' />
              <CustomLink href='/' label='NEWS' className='pages' />
              <CustomLink href='/' label='EVENTS' className='pages' />
              <CustomLink href='/' label='CAREERS' className='pages' />
            </CustomNavigation>
            <Sidepart>
              <CustomNavigation type='horizontal' className='navigation'>
                <CustomLink href='#' label='EN' className='pages' />
                <span>|</span>
                <CustomLink href='#' label='DE' className='pages' />
              </CustomNavigation>
              <CustomButton label='CONTACT US' className='navigateButton'/>
            </Sidepart>
          </CustomAppBar>

          <Container>
            <Wrapper>
              <Headline>PARTNER WITH US</Headline>
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
            </Wrapper>
            <Wrapper>
              <Headline>ABOUT US</Headline>
              <section>
                <Text>
                  <p><strong>Red Bull Media House is an award-winning, globally distributed multi-platform media company on a mission to inspire with ‘beyond the ordinary’ stories - both direct-to-consumer and through partnerships.</strong></p>
                  <p>With a focus on sports, culture and lifestyle content, Red Bull Media House offers a wide range of premium media products across TV, mobile, digital, audio, and print. </p>
                  <p>Red Bull Media House produces and licenses a broad selection of global live broadcast events, compelling and inspirational local storytelling with original short and long-form programming as well as feature films from around the world.</p>
                </Text>
                <ImageContainer />
              </section>
            </Wrapper>
          </Container>
        </div>
      </ThemeProvider>
    )
  }
}

export default App
