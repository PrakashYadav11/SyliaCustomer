import { Dimensions, PixelRatio, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

const wp = (percentage) => (width * percentage) / 100;
const hp = (percentage) => (height * percentage) / 100;
const fontSize = (size) => size * PixelRatio.getFontScale();

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: hp(1.5), 
    marginVertical: hp(0.8), 
    width: wp(90), 
    alignSelf: 'center',
    marginTop:20, 
  },
  image: {
    width: wp(18), 
    height: wp(18), 
    borderRadius: wp(2), 
    marginRight: wp(3),
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: fontSize(16), 
    fontWeight: 'bold',
    color: 'black',
  },
  description: {
    fontSize: fontSize(14),
    color: 'black',
    marginVertical: hp(0.5), 
  },
  orderId: {
    fontSize: fontSize(12),
    fontWeight: 'bold',
    color: 'black',
  },
  arrowButton: {
    padding: wp(2),
    borderRadius: wp(5), 
    backgroundColor: '#F5F5F5',
  },
});

export default styles;
