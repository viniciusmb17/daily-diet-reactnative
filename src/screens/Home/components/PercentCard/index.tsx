import { TouchableOpacity } from 'react-native'
import { Button, Container, Icon, Subtitle, Title } from './styles'
import { useNavigation } from '@react-navigation/native'

export function PercentCard() {
  const navigation = useNavigation()

  function handleGoToStatistics() {
    navigation.navigate('statistics')
  }

  return (
    <Container>
      <Title>90,86%</Title>
      <Subtitle>das refeições dentro da dieta</Subtitle>

      <Button onPress={handleGoToStatistics}>
        <Icon />
      </Button>
    </Container>
  )
}
