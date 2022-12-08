import {StyleSheet} from 'react-native'
import { colors } from '../../../constants/theme/colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  bottomContainer:{
    borderTopWidth: 2,
    borderTopColor: colors.primary,
    paddingVertical: 10,
    marginHorizontal: 20,
    marginBottom: 30,
  },
  button:{
    backgroundColor: colors.primary,
    borderRadius: 5,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rightContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flex: 0.4
  },
  total:{
    fontWeight: '600',
    fontSize: 15,
  },
  price:{
    fontSize: 18,
    fontWeight: 'bold',
  },
})