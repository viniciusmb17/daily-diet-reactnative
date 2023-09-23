import styled from 'styled-components/native'

export const MealContainer = styled.View`
  display: flex;
  flex-direction: row;
  padding: 14px 16px 14px 12px;
  gap: 12px;
  width: 100%;
  align-items: center;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_300};
  border-radius: 6px;
`

export const TimeText = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: 12px;
  line-height: 15.6px;
`

export const Divider = styled.View`
  width: 1px;
  height: 14px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_400};
`

export const MealText = styled.Text.attrs(() => ({
  numberOfLines: 1,
  ellipsizeMode: 'tail',
}))`
  display: flex;
  height: 21px;
  flex: 1 0 0;

  overflow: hidden;
  color: ${({ theme }) => theme.COLORS.GRAY_600};

  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  font-size: 16px;
  line-height: 20.8px;
`

interface StatusProps {
  isOnDiet: boolean
}

export const Status = styled.View<StatusProps>`
  width: 14px;
  height: 14px;

  border-radius: 999px;
  background-color: ${({ theme, isOnDiet }) =>
    isOnDiet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID};
`
