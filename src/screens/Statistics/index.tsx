import { StatusBar } from 'react-native'
import { useTheme } from 'styled-components/native'
import { PercentCard } from './components/PercentCard'
import { Container } from './styles'

export function Statistics() {
  return (
    <Container>
      <PercentCard />
    </Container>
  )
}
