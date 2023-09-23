import { MealItem } from '@components/MealItem'
import { DayListData } from '@components/Meals'
import { SectionList, Text } from 'react-native'
import { Date, DayListItemContainer } from './styles'

interface DayListProps {
  data: DayListData
}

export function DayList({ data }: DayListProps) {
  return (
    <SectionList
      sections={data}
      scrollEnabled
      keyExtractor={(item, index) => item.name + index}
      renderItem={({ item }) => (
        <DayListItemContainer>
          <MealItem data={item} />
        </DayListItemContainer>
      )}
      renderSectionHeader={({ section: { title } }) => <Date>{title}</Date>}
      ListEmptyComponent={<Text>Lista vazia...</Text>}
    />
  )
}
