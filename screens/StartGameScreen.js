import { TextInput, View, StyleSheet, Alert } from 'react-native'
import DefaultButton from '../components/DefaultButton'
import { useState } from 'react'
import COLORS from '../constants/colors'

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
    <View style={styles.screen}>
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
          <DefaultButton onPress={confirmInputHandler}>Cofirm</DefaultButton>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    padding: 14,
    alignItems: 'center',
    marginTop: Platform.OS === 'android' ? 155 : 100,
    marginHorizontal: 24,
    backgroundColor: COLORS.primary600,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 8,
    shadowOpacity: 0.26,
    elevation: 8,
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
