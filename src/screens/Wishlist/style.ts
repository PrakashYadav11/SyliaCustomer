import { StyleSheet, Dimensions, PixelRatio } from 'react-native';


const { width, height } = Dimensions.get('window');


const wp = (percentage: number) => (width * percentage) / 100;
const hp = (percentage: number) => (height * percentage) / 100;


const fontSize = (size) => size * PixelRatio.getFontScale();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  card: {
    left: wp(2.5), 
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  cart: {
    alignItems: 'center',
    right: wp(5), 
    fontWeight: '800',
    color: 'black',
    top: hp(0.5),
    fontSize: fontSize(25), 
  },
});

export default styles;
