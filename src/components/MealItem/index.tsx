import { MealType } from '@components/Meals'
import { Divider, MealContainer, MealText, Status, TimeText } from './styles'

interface MealItemProps {
  data: MealType
}

export function MealItem({ data: { name, time, isOnDiet } }: MealItemProps) {
  return (
    <MealContainer>
      <TimeText>{time}</TimeText>
      <Divider />
      <MealText>{name}</MealText>
      <Status isOnDiet={isOnDiet} />
    </MealContainer>
  )
}
