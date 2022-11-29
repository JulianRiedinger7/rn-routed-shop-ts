import {StyleSheet, Dimensions} from 'react-native'
import { colors } from '../../../constants/theme/colors'

const {width} = Dimensions.get('screen')

export const styles = StyleSheet.create({
  container:{
    marginVertical: 20,
    backgroundColor: colors.secondary,
    marginHorizontal: 50,
    borderRadius: 5,
    shadowColor: "#000",
  shadowOffset: {
    width: 0,
    height: 2,
  },
  shadowOpacity: 0.25,
  shadowRadius: 3.84,

  elevation: 5,
  },
  imageContainer:{
    flex: 1,
    backgroundColor: colors.white,
    padding: 10,
    alignItems: 'center',
    borderTopRightRadius: 5,
    borderTopLeftRadius: 5,
  },
  image:{
    width: width * 0.3,
    height: 100,
    resizeMode: 'contain',
  },
  infoContainer:{
    padding: 10,
  },
  title:{
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 16,
  },
  content:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonsContainer:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  count:{
    fontSize: 25,
    fontWeight: 'bold',
    color: colors.white,
    marginHorizontal: 10,
  },
  price:{
    color: colors.white,
    fontweight: 'bold',
    fontSize: 25,
  },
})
