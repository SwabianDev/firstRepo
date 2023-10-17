import { Text, View, Image, StyleSheet } from 'react-native'
import Title from '../components/Title'
import DefaultButton from '../components/DefaultButton'

const GameOverScreen = ({ roundsNumber, userNumber, onStartNewGame }) => {
  return (
    <View style={styles.rootContainer}>
      <Title>Game is over!</Title>
      <View style={styles.imageContainer}>
        <Image
          source={require('../assets/images/success.png')}
          resizeMode="cover"
          style={styles.image}
        />
      </View>
      <Text style={styles.summaryText}>
        Number of rounds: <Text style={styles.summaryTextBold}>{roundsNumber} </Text> Number:
        <Text style={styles.summaryTextBold}>{userNumber}</Text>
      </Text>
      <DefaultButton onPress={onStartNewGame}>New Game</DefaultButton>
    </View>
  )
}

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  summaryText: {
    fontFamily: 'open-sans',
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 24,
  },
  summaryTextBold: {
    fontFamily: 'open-sans-bold',
  },
})

export default GameOverScreen
