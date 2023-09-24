import { Loading } from '@components/Loading'
import {
  Nunito_400Regular,
  Nunito_700Bold,
  useFonts,
} from '@expo-google-fonts/nunito'
import { Routes } from '@routes/index'
import { StatusBar } from 'react-native'
import { ThemeProvider } from 'styled-components/native'
import theme from './src/theme'

export default function App() {
  const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={'dark-content'}
        backgroundColor={'transparent'}
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  )
}
