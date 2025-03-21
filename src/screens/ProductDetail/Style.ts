import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');
import {heightPixel, widthPixel} from '../../Utils/ResponsiveDimensions';

export const style = StyleSheet.create({
  containe: {
    flex: 1,
    backgroundColor: 'white',
    padding: height * 0.012,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rightHeader: {
    alignSelf: 'center',
    flexDirection: 'row',
    marginRight: width * 0.025,
  },
  iconStyle: {
    marginRight: width * 0.025,
  },
  imgStyle: {
    height: height * 0.55,
    width: width * 0.9,
    marginLeft: width * 0.04,
    borderRadius: 10,
    marginTop: height * 0.012,
  },
  productDetail: {
    width: '100%',
    height: height * 0.15,
    backgroundColor: 'white',
    marginTop: height * 0.02,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  productDetailBox: {
    height: height * 0.12,
    width: width * 0.45,
  },
  productName: {
    fontSize: 15,
    fontWeight: '700',
    marginLeft: width * 0.04,
  },
  star: {
    flexDirection: 'row',
    marginLeft: width * 0.04,
    marginTop: height * 0.006,
  },
  price: {
    flexDirection: 'row',
    marginLeft: width * 0.04,
    marginTop: height * 0.006,
  },
  txt: {
    color: 'black',
    fontSize: 12,
    fontWeight: '400',
  },
  txt2: {
    fontSize: 12,
    fontWeight: '400',
    left: width * 0.02,
    textDecorationLine: 'line-through',
  },
  offer: {
    fontSize: 12,
    fontWeight: '400',
    left: width * 0.025,
    color: 'black',
  },
  tax: {
    marginLeft: width * 0.04,
    marginTop: height * 0.006,
    fontSize: 10,
  },
  txt3: {
    fontSize: 12,
    fontWeight: '400',
    textDecorationLine: 'underline',
    marginRight: width * 0.025,
  },
  offers: {
    width: '100%',
    height: height * 0.25,
    backgroundColor: 'white',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  coupon: {
    height: height * 0.17, // 136px converted to percentage of screen height
    width: width * 0.42, // 158px converted to percentage of screen width
    borderWidth: 1,
    alignSelf: 'center',
    marginLeft: width * 0.04,
    borderRadius: 10,
    padding: width * 0.025,
  },
  cpnTxt: {
    color: 'black',
    fontSize: 12,
  },
  cpnTx: {
    color: 'black',
    textDecorationLine: 'underline',
    fontWeight: '600',
    top: height * 0.012, // 10px converted to relative height
  },
  offerNo: {
    color: 'black',
    top: height * 0.012,
    left: width * 0.04,
  },
  BankOffer: {
    height: height * 0.17,
    width: width * 0.42,
    borderWidth: 1,
    alignSelf: 'center',
    marginRight: width * 0.025,
    borderRadius: 10,
    padding: width * 0.025,
  },
  bankOffer: {
    color: 'black',
    top: height * 0.05,
  },
  line: {
    height: height * 0.01, // 8px converted to relative height
    width: width * 0.95, // 440px converted to relative width
    backgroundColor: '#D9D9D980',
  },
  colorSection: {
    marginLeft: width * 0.04,
    marginTop: height * 0.02,
  },
  color: {
    fontSize: width * 0.05, // Responsive font size
    fontWeight: '600',
    fontFamily: 'Inter',
    color: 'black',
  },
  colors: {
    width: '100%',
    height: height * 0.1, // 80px converted to relative height
    alignItems: 'center',
    flexDirection: 'row',
  },
  circle: {
    height: width * 0.15, // Keeping it proportional as it's a circle
    width: width * 0.15,
    borderRadius: width * 0.075, // 50% of width to maintain circular shape
    borderWidth: 1,
    borderColor: '#D9D9D9',
    marginHorizontal: width * 0.012,
    backgroundColor: 'black',
  },
  circle2: {
    height: width * 0.15,
    width: width * 0.15,
    borderRadius: width * 0.075,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    marginHorizontal: width * 0.012,
    backgroundColor: 'blue',
  },
  circle3: {
    height: width * 0.15,
    width: width * 0.15,
    borderRadius: width * 0.075,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    marginHorizontal: width * 0.012,
    backgroundColor: 'green',
  },
  circle4: {
    height: width * 0.15,
    width: width * 0.15,
    borderRadius: width * 0.075,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    marginHorizontal: width * 0.012,
    backgroundColor: 'gray',
  },
  circle5: {
    height: width * 0.15,
    width: width * 0.15,
    borderRadius: width * 0.075,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    marginHorizontal: width * 0.012,
  },
  SizeSelection: {
    marginLeft: width * 0.04,
    marginTop: height * 0.02,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: height * 0.025,
  },
  size: {
    textDecorationLine: 'underline',
    color: 'black',
    right: width * 0.025,
  },
  box: {
    height: height * 0.045,
    width: width * 0.09,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    shadowColor: '#000',
    shadowOffset: {width: 10, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 4,
    elevation: 4,
    marginRight: width * 0.025,
  },
  boxs: {
    flexDirection: 'row',
    marginTop: height * 0.012,
  },
  sizeTxt: {
    color: 'black',
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headers: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
    color: 'black',
  },
  more: {
    fontSize: width * 0.035,
    color: 'black',
  },
  listContainer: {
    marginTop: height * 0.01,
  },
  listItem: {
    fontSize: width * 0.035,
    color: 'black',
    marginBottom: height * 0.005,
  },
  productDetails: {
    padding: height * 0.012,
    marginBottom: height * 0.012,
  },
  qulityBox: {
    width: '100%',
    height: height * 0.18,
    marginTop: height * 0.012,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Icon: {
    height: height * 0.08,
    width: width * 0.17,
  },
  IconBox: {
    height: height * 0.15,
    width: width * 0.3,
    alignSelf: 'center',
    marginLeft: width * 0.01,
    alignItems: 'center',
    justifyContent: 'center',
  },
  IconTxt: {
    color: 'black',
    fontSize: width * 0.035,
    textAlign: 'center',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    padding: height * 0.02,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  ratingContainer: {
    flex: 1,
  },
  title: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    marginBottom: height * 0.005,
    color: 'black',
  },
  starsRow: {
    flexDirection: 'row',
    marginTop: height * 0.04,
  },
  ratingText: {
    fontSize: width * 0.03,
    color: 'gray',
    marginTop: height * 0.005,
  },
  divider: {
    width: width * 0.007,
    backgroundColor: '#ddd',
    height: height * 0.13,
    marginHorizontal: width * 0.025,
    marginTop: height * 0.03,
  },
  customerWords: {
    flex: 1,
    marginTop: height * 0.03,
  },
  wordRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: width * 0.01,
    marginTop: height * 0.015,
  },
  subText: {
    fontSize: width * 0.035,
    color: 'gray',
  },
  wordText: {
    fontSize: width * 0.035,
    fontWeight: 'bold',
    color: 'black',
    marginHorizontal: width * 0.02,
    left: width * 0.012,
  },
  viewMore: {
    position: 'absolute',
    top: height * 0.02,
    right: width * 0.04,
    fontSize: width * 0.03,
    color: 'gray',
  },
  contain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: width * 0.03,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  leftButtons: {
    flexDirection: 'row',
  },
  iconButton: {
    backgroundColor: '#f5f5f5',
    padding: width * 0.03,
    borderRadius: width * 0.025,
    marginRight: width * 0.02,
  },
  addToCartButton: {
    flex: 1,
    backgroundColor: 'black',
    paddingVertical: height * 0.015,
    borderRadius: width * 0.025,
    alignItems: 'center',
    marginLeft: width * 0.02,
  },
  addToCartText: {
    color: 'white',
    fontSize: width * 0.04,
    fontWeight: 'bold',
  },
});
