import { TextInput, TextInputProps } from 'react-native'
import { Container, TextAreaContainer, Label } from './styles'

interface Props extends TextInputProps {
  inputRef?: React.RefObject<TextInput>
  label?: string
}

export function TextArea({ inputRef, label, ...rest }: Props) {
  return (
    <Container>
      {label && <Label>{label}</Label>}
      <TextAreaContainer ref={inputRef} {...rest} />
    </Container>
  )
}
