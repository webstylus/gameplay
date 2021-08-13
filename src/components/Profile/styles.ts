import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'
import { getBottomSpace } from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: "center"
  },
  user: {
    flexDirection: 'row'
  },
  greeting: {
    fontFamily: theme.fonts.title500,
    color: theme.colors.heading,
    fontSize: 24,
    marginRight: 6
  },
  username: {
    fontFamily: theme.fonts.title700,
    fontSize: 24,
    color: theme.colors.heading
  },
  message: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight
  },
  question: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 28
  },
  buttonGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 28,
    marginBottom: getBottomSpace() + 40,
    paddingHorizontal: 24
  },
  textHighlight: {
    color: theme.colors.highlight,
    fontFamily: theme.fonts.title700,
    fontSize: 20
  },
  textPrimary: {
    color: theme.colors.primary,
    fontFamily: theme.fonts.title700,
    fontSize: 20
  },
  containerOutline: {
    width: 150,
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: theme.colors.secondary30,
    borderRadius: 8,
    borderWidth: 1,
  },
  containerPrimary: {
    width: 150,
    height: 56,
    backgroundColor: theme.colors.primary,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center'
  },
  title: {
    flex: 1,
    color: theme.colors.heading,
    fontSize: 15,
    textAlign: 'center',
    fontFamily: theme.fonts.text500
  }
})
