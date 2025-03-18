import {Dimensions, StyleSheet} from 'react-native';
import {heightPixel, widthPixel} from '../../Utils/ResponsiveDimensions';

const {width, height} = Dimensions.get('window');

// Function to calculate percentage-based width & height
const wp = percentage => (width * percentage) / 100;
const hp = percentage => (height * percentage) / 100;

// Scale font size dynamically
const scaleFont = size => size * (width / 375);

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: widthPixel(10),
  },
  header: {
    flexDirection: 'row',
  },
  headerTxt: {
    fontWeight: '700',
    fontSize: 22,
    color: 'black',
    marginLeft: heightPixel(130),
  },
  profileBx: {
    width: wp(95), // 90% of screen width
    height: hp(20), // 20% of screen height
    borderRadius: 18,
    backgroundColor: '#D9D9D9',
    marginTop: hp(2), // 2% of screen height
    justifyContent: 'center',
    alignSelf: 'center',
  },
  ProfileStl: {
    alignSelf: 'flex-start',
    left: wp(5),
  },
  profileName: {
    fontSize: scaleFont(24),
    left: wp(10),
    fontFamily: 'Roboto',
    fontWeight: '900',
    color: 'black',
  },
  number: {
    left: wp(10),
    fontFamily: 'Roboto',
    fontWeight: '900',
  },
  edit: {
    left: wp(10),
    backgroundColor: 'black',
    height: hp(5), // 5% of screen height
    width: wp(30), // 30% of screen width
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginTop: hp(2),
  },
  editTxt: {
    color: 'white',
    fontFamily: 'Roboto',
    fontWeight: '900',
    fontSize: scaleFont(14),
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(215, 206, 206, 0.5)',
  },
  modalContent: {
    backgroundColor: '#333333',
    height: 210,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    alignItems: 'center',
  },
  modalText: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color:'white'
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  buttonYes: {
    backgroundColor: '#D9D9D9',
    padding: 10,
    borderRadius: 10,
    width: '40%',
    alignItems: 'center',
  },
  buttonNo: {
    backgroundColor: '#D9D9D980',
    padding: 10,
    borderRadius: 10,
    width: '40%',
    alignItems: 'center',
  },
  buttonText: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
