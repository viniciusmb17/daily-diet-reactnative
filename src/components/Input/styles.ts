import { TextInput } from 'react-native'
import styled, { css } from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  min-height: 70px;
  max-height: 70px;
  gap: 4px;
  align-self: stretch;
`

export const Label = styled.Text`
  color: ${({ theme }) => theme.COLORS.GRAY_600};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
  line-height: 18.2px;
`

export const InputContainer = styled(TextInput).attrs(({ theme }) => ({
  selectionColor: theme.COLORS.GRAY_500,
}))`
  display: flex;

  ${({ theme }) => css`
    border: 1px solid ${theme.COLORS.GRAY_300};
    color: ${theme.COLORS.GRAY_700};

    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}

  border-radius: 6px;
  padding: 14px;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;
`
