import { StyleSheet, Dimensions } from "react-native";
import { colors } from "../../../constants/theme/colors";

const {width, height} = Dimensions.get('screen')

export const styles = StyleSheet.create({
  container:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secondary,
    marginVertical: 10,
    padding: 10,
    borderRadius: 5,
    width: width * 0.7,
    height: height * 0.15
  },
  title:{
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white'
  },
})