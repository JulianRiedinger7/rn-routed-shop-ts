import {StyleSheet, Dimensions} from 'react-native'
import { colors } from '../../constants/theme/colors'

const {width} = Dimensions.get('screen')

export const styles = StyleSheet.create({
  loader:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    backgroundColor: colors.background,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop: 50,
  },
  image:{
    width: width * 0.5,
    height: 200,
    resizeMode: 'contain',
  },
  title:{
    fontSize: 20,
    fontWeight: 'bold',
  },
  description:{
    lineHeight: 20,
    marginVertical: 10,
  },
  bottomContainer:{
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price:{
    fontSize: 25,
    fontWeight: 'bold',
    fontStyle: 'italic',
    flex: 1,
  },
  buttonContainer:{
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 8,
  },
  buttonText:{
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
})