import {StyleSheet} from 'react-native'
import { colors } from '../../../constants/theme/colors'

export const styles= StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex:1,
    backgroundColor: colors.background,
    alignItems: 'center',
  }
})