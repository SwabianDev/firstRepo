import { Text, StyleSheet } from 'react-native'

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>
}

styles = StyleSheet.create({
  title: {
    fontFamily: 'open-sans-bold',
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
    borderColor: 'white',
    borderWidth: 2,
    padding: 12,
    marginBottom: 24,
  },
})

export default Title
