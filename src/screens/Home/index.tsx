import { Header } from '@components/Header'
import { Meals } from '@components/Meals'
import { PercentCard } from '@screens/Home/components/PercentCard'
import { Container } from './styles'

export function Home() {
  return (
    <Container>
      <Header />
      <PercentCard />
      <Meals />
    </Container>
  )
}
