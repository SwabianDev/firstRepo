import { useEffect, useState } from 'react'
import { View, StyleSheet, Alert, Platform } from 'react-native'
import InstructionText from '../components/InstructionText'
import NumberContainer from '../components/game/NumberContainer'
import DefaultButton from '../components/DefaultButton'
import Title from '../components/Title'
import Card from '../components/Card'

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min

  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude)
  } else {
    return rndNum
  }
}

let minBoundary = 1
let maxBoundary = 100

function GameScreen({ userNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, userNumber)

  const [currentGuess, setCurrentGuess] = useState(initialGuess)
  console.log(currentGuess)

  useEffect(() => {
    if (currentGuess === userNumber) {
      onGameOver()
    }
  }, [currentGuess, userNumber, onGameOver])

  function nextGuessHandler(direction) {
    // direction => 'lower', 'greater'
    if (
      (direction === 'lower' && currentGuess < userNumber) ||
      (direction === 'greater' && currentGuess > userNumber)
    ) {
      Alert.alert("Don't lie!", 'You know that this is wrong...', [
        { text: 'Sorry!', style: 'cancel' },
      ])
      return
    }

    if (direction === 'lower') {
      maxBoundary = currentGuess
      console.log(minBoundary, maxBoundary)
    } else {
      minBoundary = currentGuess + 1
    }
    console.log(minBoundary, maxBoundary)
    const newRndNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
    setCurrentGuess(newRndNumber)
  }

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <InstructionText style={styles.text}>Higher or lower?</InstructionText>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <DefaultButton onPress={nextGuessHandler.bind(this, 'lower')}>-</DefaultButton>
          </View>
          <View style={styles.buttonContainer}>
            <DefaultButton onPress={nextGuessHandler.bind(this, 'greater')}>+</DefaultButton>
          </View>
        </View>
      </Card>
      {/* <View>LOG ROUNDS</View> */}
    </View>
  )
}

export default GameScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    marginTop: Platform.OS === 'android' ? 60 : 40,
  },
  text: {
    marginBottom: 12,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
})
