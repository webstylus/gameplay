import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.discord,
    alignItems: 'center',
    justifyContent: 'center',
    width: 66,
    height: 64,
    borderRadius: 8,
  },
  image: {
    width: 66,
    height: 64,
    borderRadius: 8,
  },
})
