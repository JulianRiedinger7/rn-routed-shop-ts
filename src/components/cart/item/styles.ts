import {StyleSheet} from 'react-native'
import { colors } from '../../../constants/theme/colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.secondary,
    marginHorizontal: 20,
    marginVertical: 20,
    padding: 10,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title:{
    color: colors.white,
    fontSize: 22,
    fontWeight: '500',
  },
  quantity:{
    color: colors.white,
    fontSize: 14,
    marginVertical: 5,
  },
  price:{
    color: colors.white,
    fontSize: 22,
    fontWeight: 'bold',
  },
 
})