import { Input } from '@components/Input'
import { useNavigation } from '@react-navigation/native'
import {
  BackButton,
  Button,
  ButtonText,
  Container,
  Content,
  DateContainer,
  Diet,
  DietOption,
  DietOptionText,
  DietOptions,
  DietOptionsLabel,
  Form,
  Header,
  Icon,
  Status,
  Title,
} from './styles'
import { TextArea } from '@components/TextArea'

export function NewMeal() {
  const navigation = useNavigation()

  function handleBackToHome() {
    navigation.navigate('home')
  }

  return (
    <Container>
      <Header>
        <BackButton onPress={handleBackToHome}>
          <Icon />
        </BackButton>
        <Title>Nova refeição</Title>
      </Header>

      <Content>
        <Form>
          <Input label="Nome" />
          <TextArea label="Descrição" numberOfLines={3} />

          <DateContainer>
            <Input label="Data" />
            <Input label="Hora" />
          </DateContainer>

          <Diet>
            <DietOptionsLabel>Está dentro da dieta?</DietOptionsLabel>
            <DietOptions>
              <DietOption>
                <Status isOnDiet={true} />
                <DietOptionText>Sim</DietOptionText>
              </DietOption>
              <DietOption>
                <Status isOnDiet={false} />
                <DietOptionText>Não</DietOptionText>
              </DietOption>
            </DietOptions>
          </Diet>
        </Form>
        <Button>
          <ButtonText>Cadastrar refeição</ButtonText>
        </Button>
      </Content>
    </Container>
  )
}
