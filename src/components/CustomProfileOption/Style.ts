import {Dimensions, StyleSheet} from 'react-native';

const { width, height } = Dimensions.get("window");

// Functions for responsive scaling
const wp = (percentage) => (width * percentage) / 100;
const hp = (percentage) => (height * percentage) / 100;
const scaleFont = (size) => size * (width / 375); // Base width of 375px

export const style = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderBottomWidth: 2,
    borderBlockColor: '#D9D9D9',
    height: hp(7), 
    width: wp(95), 
    justifyContent: 'center',
    marginTop: hp(1), 
    alignSelf: 'center',
    borderRadius: wp(2),
  },
  text: {
    fontSize: scaleFont(19),
    fontFamily: 'Roboto',
    fontWeight: '600',
    color: 'black',
    marginLeft: wp(3), 
  },
});
