import styled from 'styled-components/native'

export const DayListItemContainer = styled.View`
  padding: 8px 0px;
`

export const Date = styled.Text`
  margin-top: 32px;

  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: 18px;
  line-height: 23.4px;
`
