import { TextInput, TextInputProps } from 'react-native'
import { Container, InputContainer, Label } from './styles'

interface Props extends TextInputProps {
  inputRef?: React.RefObject<TextInput>
  label?: string
}

export function Input({ inputRef, label, ...rest }: Props) {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <InputContainer ref={inputRef} {...rest} />
    </Container>
  )
}
