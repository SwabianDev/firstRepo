import { TextInput, View, StyleSheet, Alert, Text, Platform } from 'react-native'
import DefaultButton from '../components/DefaultButton'
import { useState } from 'react'
import COLORS from '../constants/colors'
import Title from '../components/Title'
import Card from '../components/Card'
import InstructionText from '../components/InstructionText'

const StartGameScreen = ({ onConfirmNumber }) => {
  const [enteredValue, setEnteredValue] = useState('')
  const numberInputHandler = inputText => {
    setEnteredValue(inputText.replace(/[^0-9]/g, ''))
  }
  const resetInputHandler = () => {
    setEnteredValue('')
  }

  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enteredValue)
    if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
      Alert.alert('Invalid number!', 'Number has to be a number between 1 and 99.')
      setEnteredValue('')
      return
    }
    onConfirmNumber(chosenNumber)
  }

  return (
    <View style={styles.rootContainer}>
      <Title>Guess my Number</Title>
      <Card>
        <InstructionText>Select a Number</InstructionText>
        <TextInput
          style={styles.numberInput}
          underlineColorAndroid="transparent"
          maxLength={2}
          keyboardType="number-pad"
          autoCapitalize="none"
          autoCorrect={false}
          value={enteredValue}
          onChangeText={numberInputHandler}
          onSubmitEditing={confirmInputHandler}
        />
        <View style={styles.row}>
          <View style={styles.buttonContainer}>
            <DefaultButton onPress={resetInputHandler}>Reset</DefaultButton>
          </View>
          <View style={styles.buttonContainer}>
            <DefaultButton onPress={confirmInputHandler}>Confirm</DefaultButton>
          </View>
        </View>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: Platform.OS === 'android' ? 155 : 40,
    alignItems: 'center',
  },
  numberInput: {
    borderWidth: 1,
    borderRadius: 10,
    width: 50,
    fontSize: 32,
    borderBottomColor: COLORS.secondary500,
    borderBottomWidth: 3,
    color: COLORS.secondary500,
    marginVertical: 8,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingHorizontal: 15,
  },
  buttonContainer: {
    flex: 1,
  },
})

export default StartGameScreen
