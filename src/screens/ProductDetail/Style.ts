import {StyleSheet} from 'react-native';
import {heightPixel, widthPixel} from '../../Utils/ResponsiveDimensions';

export const style = StyleSheet.create({
  containe: {
    flex: 1,
    backgroundColor: 'white',
    padding: heightPixel(10),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rightHeader: {
    alignSelf: 'center',
    flexDirection: 'row',
    marginRight: widthPixel(10),
  },
  iconStyle: {
    marginRight: widthPixel(10),
  },
  imgStyle: {
    height: heightPixel(471),
    width: widthPixel(371),
    marginLeft: widthPixel(15),
    borderRadius: 10,
    marginTop: heightPixel(10),
  },
  productDetail: {
    width: '100%',
    height: heightPixel(120),
    backgroundColor: 'white',
    marginTop: heightPixel(15),
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  productDetailBox: {
    height: heightPixel(99),
    width: widthPixel(167),
  },
  productName: {
    fontSize: 15,
    fontWeight: '700',
    marginLeft: widthPixel(15),
  },
  star: {
    flexDirection: 'row',
    marginLeft: widthPixel(15),
    marginTop: heightPixel(5),
  },
  price: {
    flexDirection: 'row',
    marginLeft: widthPixel(15),
    marginTop: heightPixel(5),
  },
  txt: {
    color: 'black',
    fontSize: 12,
    fontWeight: '400',
  },
  txt2: {
    fontSize: 12,
    fontWeight: '400',
    left: widthPixel(8),
    textDecorationLine: 'line-through',
  },
  offer: {
    fontSize: 12,
    fontWeight: '400',
    left: widthPixel(10),
    color: 'black',
  },
  tax: {
    marginLeft: widthPixel(15),
    marginTop: heightPixel(5),
    fontSize: 10,
  },
  txt3: {
    fontSize: 12,
    fontWeight: '400',
    textDecorationLine: 'underline',
    marginRight: widthPixel(10),
  },
  offers: {
    width: '100%',
    height: heightPixel(200),
    backgroundColor: 'white',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  coupon: {
    height: heightPixel(136),
    width: widthPixel(158),
    borderWidth: 1,
    alignSelf: 'center',
    marginLeft: widthPixel(15),
    borderRadius: 10,
    padding: widthPixel(10),
  },
  cpnTxt: {
    color: 'black',
    fontSize: 12,
  },
  cpnTx: {
    color: 'black',
    textDecorationLine: 'underline',
    fontWeight: '600',
    top: heightPixel(10),
  },
  offerNo: {
    color: 'black',
    top: heightPixel(10),
    left: heightPixel(15),
  },
  BankOffer: {
    height: heightPixel(136),
    width: widthPixel(158),
    borderWidth: 1,
    alignSelf: 'center',
    marginRight: widthPixel(10),
    borderRadius: 10,
    padding: widthPixel(10),
  },
  bankOffer: {
    color: 'black',
    top: heightPixel(22),
  },
  line: {
    height: heightPixel(8),
    width: widthPixel(440),
    backgroundColor: '#D9D9D980',
  },
  colorSection: {
    marginLeft: widthPixel(15),
    marginTop: heightPixel(15),
  },
  color: {
    fontSize: 20,
    fontWeight: '600',
    fontFamily: 'Inter',
    color: 'black',
  },
  colors: {
    width: '100%',
    height: heightPixel(80),
    alignItems: 'center',
    flexDirection:'row'
  },
  circle: {
    height: heightPixel(60),
    width: widthPixel(60),
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    marginHorizontal:widthPixel(5),
    backgroundColor:'black'
  },
  circle2: {
    height: heightPixel(60),
    width: widthPixel(60),
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    marginHorizontal:widthPixel(5),
    backgroundColor:'blue'
  },
  circle3: {
    height: heightPixel(60),
    width: widthPixel(60),
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    marginHorizontal:widthPixel(5),
    backgroundColor:'green'
  },
  circle4: {
    height: heightPixel(60),
    width: widthPixel(60),
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    marginHorizontal:widthPixel(5),
    backgroundColor:'gray'
  },
  circle5: {
    height: heightPixel(60),
    width: widthPixel(60),
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    marginHorizontal:widthPixel(5)
  },
  SizeSelection: {
    marginLeft: widthPixel(15),
    marginTop: heightPixel(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: heightPixel(20),
  },
  size: {
    textDecorationLine: 'underline',
    color: 'black',
    right: widthPixel(10),
  },
  box: {
    height: heightPixel(35),
    width: widthPixel(35),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
    shadowColor: '#000',
    shadowOffset: {width: 10, height: 2},
    shadowOpacity: 0.9,
    shadowRadius: 4,
    elevation: 4,
    marginRight: 10,
  },
  boxs: {
    flexDirection: 'row',
    marginTop: heightPixel(10),
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
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
  },
  more: {
    fontSize: 14,
    color: 'black',
  },
  listContainer: {
    marginTop: heightPixel(8),
  },
  listItem: {
    fontSize: 14,
    color: 'black',
    marginBottom: heightPixel(4),
  },
  productDetails: {
    padding: heightPixel(10),
    marginBottom: heightPixel(10),
  },
  qulityBox: {
    width: '100%',
    height: heightPixel(150),
    marginTop: heightPixel(10),
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Icon:{
    height:heightPixel(80),
    width:widthPixel(80),
    // alignSelf:'center',
    
  },
  IconBox:{
    height:heightPixel(120),
    width:widthPixel(118),
    alignSelf:'center',
    marginLeft:widthPixel(5),
    alignItems:'center',
    justifyContent:'center'
  },
  IconTxt:{
    color:'black',
    fontSize:13,
    textAlign:'center'
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    backgroundColor: 'white',
    padding: heightPixel(16),
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  ratingContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: heightPixel(4),
    color:'black'
  },
  starsRow: {
    flexDirection: 'row',
    marginTop:heightPixel(30)
  },
  ratingText: {
    fontSize: 12,
    color: 'gray',
    marginTop: heightPixel(4),
  },
  divider: {
    width: widthPixel(3),
    backgroundColor: '#ddd',
    height: heightPixel(100),
    marginHorizontal: widthPixel(10),
    marginTop:heightPixel(20)
  },
  customerWords: {
    flex: 1,
    marginTop:heightPixel(25)
  },
  wordRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: widthPixel(4),
    marginTop:heightPixel(10)
  },
  subText: {
    fontSize: 14,
    color: 'gray',
  },
  wordText: {
    fontSize: 14,
    fontWeight: 'bold',
    color:'black',
    marginHorizontal:widthPixel(8),
    left:widthPixel(5)
  },
  viewMore: {
    position: 'absolute',
    top: heightPixel(16),
    right: widthPixel(16),
    fontSize: 12,
    color: 'gray',
  },
  contain: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ddd',
  },
  leftButtons: {
    flexDirection: 'row',
  },
  iconButton: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    borderRadius: 10,
    marginRight: 8,
  },
  addToCartButton: {
    flex: 1,
    backgroundColor: 'black',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginLeft: 10,
  },
  addToCartText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
