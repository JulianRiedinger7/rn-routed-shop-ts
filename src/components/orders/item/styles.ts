import {StyleSheet} from 'react-native'
import { colors } from '../../../constants/theme/colors'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    marginVertical: 15,
    marginHorizontal: 20,
    backgroundColor: colors.secondary,
    borderRadius: 5,
    padding: 10,
  },
  contentContainer: {
    flex: 1,
  },
  date:{
    color: colors.white,
    fontSize: 18,
    fontWeight: '600',
    fontStyle: "italic",
  },
  total:{
    color: colors.white,
    fontSize: 20,
    fontWeight: 'bold',
  },
})