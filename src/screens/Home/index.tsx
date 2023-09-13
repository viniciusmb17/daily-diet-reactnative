import { Text } from 'react-native'
import { Container } from './styles'
import { Header } from '@components/Header'

export function Home() {
  return (
    <>
      <Container>
        <Header />
        <Text>Home</Text>
      </Container>
    </>
  )
}
