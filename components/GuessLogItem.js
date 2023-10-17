import { View, Text, StyleSheet } from 'react-native'
import COLORS from '../constants/colors'

const GuessLogItem = ({ guess, roundNumber }) => {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponents Guess:{guess}</Text>
    </View>
  )
}
export default GuessLogItem

const styles = StyleSheet.create({
  listItem: {
    borderColor: COLORS.secondary500,
    borderWidth: 1,
    borderRadius: 40,
    padding: 10,
    marginVertical: 10,
    backgroundColor: COLORS.primary500,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    elevation: 8,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.26,
    shadowRadius: 8,
  },
  itemText: {
    color: COLORS.secondary500,
    fontSize: 18,
    fontFamily: 'open-sans-bold',
  },
})
