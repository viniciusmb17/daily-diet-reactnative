import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`

export const Content = styled.View`
  flex: 1;
  display: inline-flex;
  padding: 33px 24px 261px 24px;

  flex-direction: column;
  align-items: center;
  gap: 23px;

  border-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};

  elevation: 0.05;

  shadowcolor: '#000000';
  shadowopacity: 0.05;
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  line-height: 18.2px;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const CardsContainer = styled.View`
  display: flex;
  width: 327px;
  flex-direction: column;
  align-items: flex-start;
  gap: 12px;
`

export const CardBase = styled.View`
  display: flex;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  align-self: stretch;

  border-radius: 8px;
`

export const CardTitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  line-height: 31.2px;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const CardSubtitle = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  line-height: 18.2px;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const SequenceCard = styled(CardBase)`
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
`

export const TotalCard = styled(CardBase)`
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
`

export const InfoContainer = styled.View`
  display: flex;
  flex-direction: row;
  gap: 12px;
`

export const SuccessCard = styled(CardBase)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
`

export const FailCard = styled(CardBase)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.RED_LIGHT};
`
