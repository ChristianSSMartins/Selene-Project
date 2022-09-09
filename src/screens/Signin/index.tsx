import { LinearGradient } from 'expo-linear-gradient';
import {
  Container,
  BackgroundImage
} from "./styles";

export function Signin() {

  const background = require('../../assets/Signin/background.png')
  
  const colors = [
    '#3F3D56',
    '#3F3D56',
    '#3F3D56',
    '#585579',
    '#555274',
    '#E6E6E6',
    'transparent']

  return (
    <Container>
      <LinearGradient
        colors={colors}
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          top: 0,
          height: '100%'
        }}
      />
      <BackgroundImage
        resizeMode="cover"
        source={background}
      />
    </Container>
  )
}