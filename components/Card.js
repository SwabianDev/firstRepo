import { View, StyleSheet } from 'react-native'
import COLORS from '../constants/colors'

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>
}

const styles = StyleSheet.create({
  card: {
    padding: 14,
    alignItems: 'center',
    marginTop: 24,
    marginHorizontal: 24,
    backgroundColor: COLORS.primary600,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 8,
    shadowOpacity: 0.26,
    elevation: 8,
  },
})

export default Card
