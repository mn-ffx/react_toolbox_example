import React from 'react'

import Headline from '../Headline'
import ImageContainer from '../ImageContainer'
import Text from '../Text'
import Wrapper from '../Wrapper'

class Article extends React.Component {
  render() {
    return (
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
    )
  }
}

export default Article
