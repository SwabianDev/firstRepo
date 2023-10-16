import { StyleSheet, ImageBackground, SafeAreaView } from 'react-native'
import StartGameScreen from './screens/StartGameScreen'
import { LinearGradient } from 'expo-linear-gradient'
import { useState } from 'react'
import GameScreen from './screens/GameScreen'
import COLORS from './constants/colors'
import GameOverScreen from './screens/GameOverScreen'
import { useFonts } from 'expo-font'
import AppLoading from 'expo-app-loading'

export default function App() {
  const [userNumber, setUserNumber] = useState(null)
  const [gameOver, setGameOver] = useState(true)

  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  })
  // Apploading is  deprecated in favor of expo-splash-screen
  if (!fontsLoaded) {
    return <AppLoading />
  }

  const pickerNumberHandler = selectedNumber => {
    setUserNumber(selectedNumber)
    setGameOver(false)
  }
  const gameOverHandler = () => {
    setGameOver(true)
  }

  let screen = <StartGameScreen onConfirmNumber={pickerNumberHandler} />

  if (userNumber) {
    screen = <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
  }

  if (gameOver && userNumber) {
    screen = <GameOverScreen />
  }

  return (
    <LinearGradient colors={[COLORS.secondary500, COLORS.primary600]} style={styles.rootScreen}>
      <ImageBackground
        source={require('./assets/images/background.png')}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.imageStyle}>
        <SafeAreaView style={styles.rootScreen}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
  imageStyle: {
    opacity: 0.2,
  },
})
