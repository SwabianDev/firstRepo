import { Text, StyleSheet } from 'react-native'

const Title = ({ children }) => {
  return <Text style={styles.title}>{children}</Text>
}

styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ddb52f',
    textAlign: 'center',
    borderColor: '#ddb52f',
    borderWidth: 2,
    padding: 12,
    marginBottom: 24,
  },
})

export default Title
