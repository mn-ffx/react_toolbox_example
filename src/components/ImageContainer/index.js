import styled from 'styled-components'
import about from '../../images/about.jpg'

export const ImageContainer = styled.div`
  height: 35em;
  flex: 3;
  margin-left: 1%;
  margin-right: 1%;
  background-image: url(${about});
  background-position: 85% 50%;
  background-size: cover;
`

export default ImageContainer
