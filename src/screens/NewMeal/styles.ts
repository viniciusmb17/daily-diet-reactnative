import { ArrowLeft } from 'phosphor-react-native'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
`

export const Header = styled.View`
  display: flex;
  flex-direction: row;
  height: 132px;
  padding: 56px 131px 52px 24px;
  align-items: center;
  justify-content: center;
  gap: 82px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_300};
`

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  color: ${({ theme }) => theme.COLORS.GRAY_700};
`

export const Content = styled.View`
  flex: 1;
  display: flex;
  margin-top: -29px;
  padding: 40px 24px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 148px;

  border-radius: 20px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`

export const DateContainer = styled.View`
  display: flex;
  flex-direction: row;
  width: 327px;
  gap: 20px;
`

export const Form = styled.View`
  flex: 1 0 0;
  width: 327px;
  align-items: flex-start;
  gap: 24px;
`

export const Diet = styled.View`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`

export const DietOptionsLabel = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};

    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`

export const DietOptions = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
  align-self: stretch;
`

export const DietOption = styled.TouchableOpacity`
  display: flex;
  flex-direction: row;
  padding: 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;

  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_200};
`

export const DietOptionText = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};

    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}

  line-height: 18.2px;
`

interface StatusProps {
  isOnDiet: boolean
}

export const Status = styled.View<StatusProps>`
  width: 8px;
  height: 8px;

  border-radius: 999px;
  background-color: ${({ theme, isOnDiet }) =>
    isOnDiet ? theme.COLORS.GREEN_DARK : theme.COLORS.RED_DARK};
`

export const Button = styled.TouchableOpacity`
  display: flex;
  align-self: stretch;
  padding: 16px 24px;
  justify-content: center;
  align-items: center;
  gap: 12px;

  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
`

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.COLORS.WHITE};
`

export const BackButton = styled.TouchableOpacity``

export const Icon = styled(ArrowLeft).attrs(({ theme }) => ({
  color: theme.COLORS.GRAY_700,
  size: 24,
}))``
