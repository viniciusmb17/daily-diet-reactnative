import { FlatList, Text } from 'react-native'
import {
  Container,
  HeaderContainer,
  Icon,
  NewMealButton,
  NewMealText,
  Title,
} from './styles'

export function Meals() {
  const meals = null

  return (
    <Container>
      <HeaderContainer>
        <Title>Refeições</Title>
        <NewMealButton>
          <Icon />
          <NewMealText>Nova refeição</NewMealText>
        </NewMealButton>
      </HeaderContainer>
      <FlatList
        data={meals}
        renderItem={({ item }) => <Text>{item}</Text>}
        ListEmptyComponent={() => <Text>Lista vazia...</Text>}
      />
    </Container>
  )
}
