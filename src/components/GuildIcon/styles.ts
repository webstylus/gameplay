import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.discord,
    alignItems: 'center',
    justifyContent: 'center',
    width: 64,
    height: 66,
    borderRadius: 8,
  },
  image: {
    width: 62,
    height: 64,
    borderRadius: 8,
  },
})
