import { StyleSheet } from 'react-native'
import { theme } from '../../global/styles/theme'
import { getBottomSpace } from 'react-native-iphone-x-helper'

export const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  label: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 18,
    marginVertical: 12
  },
  subLabel: {
    fontFamily: theme.fonts.title700,
    color: theme.colors.heading,
    fontSize: 18,
    marginLeft: 24,
    marginTop: 36,
    marginBottom: 18
  },
  form: {
    paddingHorizontal: 24,
    marginTop: 32
  },
  select: {
    flexDirection: 'row',
    width: '100%',
    height: 68,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: theme.colors.secondary50,
    alignItems: 'center',
    paddingRight: 25,
    overflow: 'hidden'
  },
  selectBody: {
    flex: 1,
    alignItems: 'center',
  },
  image: {
    width: 64,
    height: 68,
    backgroundColor: theme.colors.secondary50,
    borderWidth: 1,
    borderColor: theme.colors.secondary50,
    borderRadius: 8
  },
  footer: {
    marginVertical: 20,
    marginBottom: getBottomSpace() + 56
  },
  field: {
    marginTop: 16,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  column: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  divider: {
    fontFamily: theme.fonts.text500,
    color: theme.colors.highlight,
    fontSize: 18,
    marginRight:4
  },
  caracteresLimit: {
    fontFamily: theme.fonts.text400,
    color: theme.colors.highlight,
    fontSize: 13,
  }
})
