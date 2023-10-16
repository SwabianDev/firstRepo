import { View, Text, StyleSheet } from 'react-native'

import COLORS from '../../constants/colors'

const NumberContainer = ({ children }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    borderWidth: 4,
    borderColor: COLORS.secondary500,
    padding: 24,
    margin: 24,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  numberText: {
    color: COLORS.secondary500,
    fontSize: 36,
    fontFamily: 'open-sans-bold',
  },
})

export default NumberContainer
