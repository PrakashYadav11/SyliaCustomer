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
    fontSize:10
  },
  txt3:{
    fontSize:12,
    fontWeight:'400',
    textDecorationLine:'underline',
    marginRight:widthPixel(10)
  },
  offers:{
    width:'100%',
    height:heightPixel(200),
    backgroundColor:'white',
    justifyContent:'space-between',
    flexDirection:'row'
  },
  coupon:{
    height:heightPixel(136),
    width:widthPixel(158),
    borderWidth:1,
    alignSelf:'center',
    marginLeft:widthPixel(15),
    borderRadius:10,
    padding:widthPixel(10)
  },
  cpnTxt:{
    color:'black',
    fontSize:12
  },
  cpnTx:{
    color:'black',
    textDecorationLine:'underline',
    fontWeight:'600',
    top:heightPixel(10)
  },
  offerNo:{
    color:'black',
    top:heightPixel(10),
    left:heightPixel(15)
  },
  BankOffer:{
    height:heightPixel(136),
    width:widthPixel(158),
    borderWidth:1,
    alignSelf:'center',
    marginRight:widthPixel(10),
    borderRadius:10,
    padding:widthPixel(10)
  },
  bankOffer:{
    color:'black',
    top:heightPixel(22)
  },
  line:{
    height:heightPixel(8),
    width:widthPixel(440),
    backgroundColor:'#D9D9D980'
  },
  colorSection:{
    marginLeft:widthPixel(15),
    marginTop:heightPixel(15)
  },
  color:{
    fontSize:20,
    fontWeight:'600',
    fontFamily:'Inter',
    color:'black'
  },
  colors:{
    width:'100%',
    height:heightPixel(80),
    alignItems:'center',
    justifyContent:'center'
  },
  circle:{
    height:heightPixel(60),
    width:widthPixel(60),
    borderRadius:50,
    borderWidth:1,
    borderColor:'#D9D9D9',
    
  }
});
