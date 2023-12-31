import { ArrowUpRight } from 'phosphor-react-native'
import styled from 'styled-components/native'

export const Container = styled.View`
  width: 327px;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
  border-radius: 8px;

  justify-content: center;
  align-items: center;
  padding: 20px 16px;
  gap: 2px;

  margin-top: 40px;
`

export const Title = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_700};
  text-align: center;

  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XXL}px;
  line-height: 41.6px;
`

export const Subtitle = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_600};
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  line-height: 18.2px;
`

export const Button = styled.TouchableOpacity`
  position: absolute;
  right: 8px;
  top: 8px;
`

export const Icon = styled(ArrowUpRight).attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_DARK,
  size: 24,
}))``
