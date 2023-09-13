import { Home } from '@screens/Home'
import theme from './src/theme'
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from '@expo-google-fonts/nunito'
import { ActivityIndicator, StatusBar, Text } from 'react-native'
import { ThemeProvider } from 'styled-components'

export default function App() {
  const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold })

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle={'light-content'}
        backgroundColor={'transparent'}
        translucent
      />
      {fontsLoaded ? <Home /> : <ActivityIndicator />}
    </ThemeProvider>
  )
}
