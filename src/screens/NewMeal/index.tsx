import { Input } from '@components/Input'
import {
  BackButton,
  Container,
  Content,
  DateContainer,
  Header,
  Title,
} from './styles'

export function NewMeal() {
  return (
    <Container>
      <Header>
        <BackButton />
        <Title>Nova refeição</Title>
      </Header>

      <Content>
        <Input />
        <Input />
        <Input />
        <DateContainer>
          <Input />
          <Input />
        </DateContainer>
      </Content>
    </Container>
  )
}
