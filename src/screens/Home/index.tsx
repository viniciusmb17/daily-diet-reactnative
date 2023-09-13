import { Container } from './styles'
import { Header } from '@components/Header'
import { PercentCard } from '@components/PercentCard'

export function Home() {
  return (
    <>
      <Container>
        <Header />
        <PercentCard />
      </Container>
    </>
  )
}
