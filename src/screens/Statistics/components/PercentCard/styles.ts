import { ArrowLeft } from 'phosphor-react-native'
import styled from 'styled-components/native'

export const Container = styled.View`
  width: 100%;
  height: 200px;
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
  border-radius: 8px;

  justify-content: center;
  align-items: center;
  padding: 20px 16px;
  gap: 2px;
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
  left: 24px;
  top: 56px;
`

export const Icon = styled(ArrowLeft).attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_DARK,
  size: 24,
}))``
