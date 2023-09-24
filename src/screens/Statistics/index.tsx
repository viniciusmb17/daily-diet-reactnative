import { Text } from 'react-native'
import { PercentCard } from './components/PercentCard'
import {
  CardSubtitle,
  CardTitle,
  CardsContainer,
  Container,
  Content,
  InfoContainer,
  SuccessCard,
  FailCard,
  TotalCard,
  SequenceCard,
  Title,
} from './styles'

export function Statistics() {
  return (
    <Container>
      <PercentCard />
      <Content>
        <Title>Estatísticas gerais</Title>
        <CardsContainer>
          <SequenceCard>
            <CardTitle>22</CardTitle>
            <CardSubtitle>
              melhor sequência de pratos dentro da dieta
            </CardSubtitle>
          </SequenceCard>

          <TotalCard>
            <CardTitle>109</CardTitle>
            <CardSubtitle>refeições registradas</CardSubtitle>
          </TotalCard>

          <InfoContainer>
            <SuccessCard>
              <CardTitle>99</CardTitle>
              <CardSubtitle>refeições dentro da dieta</CardSubtitle>
            </SuccessCard>

            <FailCard>
              <CardTitle>22</CardTitle>
              <CardSubtitle>refeições fora da dieta</CardSubtitle>
            </FailCard>
          </InfoContainer>
        </CardsContainer>
      </Content>
    </Container>
  )
}
