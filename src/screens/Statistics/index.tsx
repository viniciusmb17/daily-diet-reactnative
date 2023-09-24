import { Text } from 'react-native'
import { PercentCard } from './components/PercentCard'
import {
  CardsContainer,
  Container,
  Content,
  MealsOnDietCard,
  MealsOutDietCard,
  MealsQuantityCard,
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
            <Text>SequenceCard</Text>
          </SequenceCard>
          <MealsQuantityCard>
            <Text>MealsQuantityCard</Text>
          </MealsQuantityCard>
          <MealsOnDietCard>
            <Text>MealsOnDietCard</Text>
          </MealsOnDietCard>
          <MealsOutDietCard>
            <Text>MealsOutDietCard</Text>
          </MealsOutDietCard>
        </CardsContainer>
      </Content>
    </Container>
  )
}
