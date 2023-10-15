import { View, Text, StyleSheet, Platform } from 'react-native'
import Title from '../components/Title'

const GameScreen = props => {
  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {/* Guwaa */}
      <View>
        <Title>Higher or lower?</Title>
        {/* 
            Button
            +
            -
            */}
      </View>
      <Title>LOG ROUNDS</Title>
    </View>
  )
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
    paddingTop: Platform.OS === 'android' ? 80 : 0,
  },
})

export default GameScreen
