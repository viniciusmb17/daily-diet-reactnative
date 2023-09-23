import { DayList } from '@components/DayList'
import {
  Container,
  HeaderContainer,
  Icon,
  NewMealButton,
  NewMealText,
  Title,
} from './styles'

export type MealType = {
  name: string
  description: string
  date: Date
  time: string
  isOnDiet: boolean
}

export type DayListData = {
  title: string
  data: Array<MealType>
}[]

const MEALS: MealType[] = [
  {
    name: 'X-tudo',
    description: 'descrição',
    date: new Date('12/08/2022'),
    time: '20:00',
    isOnDiet: false,
  },
  {
    name: 'Whey protein com leite',
    description: 'descrição',
    date: new Date('12/08/2022'),
    time: '16:00',
    isOnDiet: true,
  },
  {
    name: 'Salada cesar com frango e batata inglesa',
    description: 'descrição',
    date: new Date('12/08/2022'),
    time: '12:30',
    isOnDiet: true,
  },
  {
    name: 'Vitamina de banana com mamão',
    description: 'descrição',
    date: new Date('12/08/2022'),
    time: '09:30',
    isOnDiet: true,
  },
]

const DAY_LIST_DATA: DayListData = [
  {
    title: '12.08.22',
    data: MEALS,
  },
  {
    title: '11.08.22',
    data: MEALS,
  },
]

export function Meals() {
  return (
    <Container>
      <HeaderContainer>
        <Title>Refeições</Title>
        <NewMealButton>
          <Icon />
          <NewMealText>Nova refeição</NewMealText>
        </NewMealButton>
      </HeaderContainer>

      <DayList data={DAY_LIST_DATA} />
    </Container>
  )
}
