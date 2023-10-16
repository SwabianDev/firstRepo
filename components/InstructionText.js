import { Text, StyleSheet } from 'react-native'
import COLORS from '../constants/colors'

const InstructionText = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>
}

export default InstructionText

const styles = StyleSheet.create({
  text: {
    fontFamily: 'open-sans',
    color: COLORS.secondary500,
    fontSize: 24,
  },
})
