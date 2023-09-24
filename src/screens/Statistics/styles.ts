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

export const CardsContainer = styled.View``

export const SequenceCard = styled.View``

export const MealsQuantityCard = styled.View``

export const MealsOnDietCard = styled.View``

export const MealsOutDietCard = styled.View``
