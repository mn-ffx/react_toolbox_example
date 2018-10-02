import React from 'react'

import Headline from '../Headline'
import ImageButtonBig from '../ImageButtonBig'
import ImageButtonSmall from '../ImageButtonSmall'
import Wrapper from '../Wrapper'

class ButtonsBar extends React.Component {
  render() {
    return (
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
    )
  }
}

export default ButtonsBar
