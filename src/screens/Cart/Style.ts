import {StyleSheet} from 'react-native';
import {heightPixel, widthPixel} from '../../Utils/ResponsiveDimensions';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: heightPixel(10),
  },
  header: {
    flexDirection: 'row',
  },
  headerTxt: {
    fontWeight: '600',
    fontSize: 22,
    color: 'black',
    marginLeft: widthPixel(115),
  },
  line: {
    width: widthPixel(395),
    height: heightPixel(3),
    backgroundColor: '#D9D9D9',
    top: heightPixel(120),
  },
  priceDetailStyle: {
    height: heightPixel(252),
    width: widthPixel(395),
    top: heightPixel(140),
  },
  priceDetailTxt: {
    fontSize: 20,
    paddingHorizontal: widthPixel(10),
    color: 'black',
    fontWeight: '600',
    paddingVertical: heightPixel(10),
  },
  rawStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  price: {
    fontSize: 15,
    fontWeight: '600',
    color: 'black',
    paddingHorizontal: widthPixel(10),
    paddingVertical: heightPixel(10),
  },
  priceStyle: {
    right: widthPixel(10),
    fontSize: 15,
    fontWeight: '600',
    color: 'black',
    paddingVertical: heightPixel(10),
    textDecorationLine: 'line-through',
  },
  Discount: {
    paddingHorizontal: widthPixel(10),
    fontSize: 15,
    fontWeight: '600',
    color: 'black',
  },
  DiscountPrice: {
    right: widthPixel(10),
    fontSize: 15,
    fontWeight: '600',
    color: 'black',
  },
  Delivery: {
    paddingVertical: heightPixel(10),
    paddingHorizontal: widthPixel(10),
    fontSize: 15,
    fontWeight: '600',
    color: 'black',
  },
  DeliveryPrice: {
    right: widthPixel(10),
    fontSize: 15,
    fontWeight: '600',
    color: 'black',
    paddingVertical: heightPixel(10),
  },
  dashedLine: {
    borderBottomWidth: 2,
    borderBottomColor: '#D9D9D9',
    borderStyle: 'dashed',
    width: widthPixel(395),
    marginVertical: 20,
  },
  totalPrice: {
    left: widthPixel(10),
    color: 'black',
    fontSize: 15,
    fontWeight: '600',
  },
  Totalamount: {
    right: widthPixel(10),
    color: 'black',
    fontSize: 15,
    fontWeight: '600',
  },
  bottomStyle: {
    height: heightPixel(57),
    width: widthPixel(395),
    backgroundColor: '#D9D9D9',
    borderRadius: 5,
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: widthPixel(20),
    marginTop:heightPixel(10)
  },
  lastPrice: {
    alignSelf: 'center',
    color: 'black',
    fontSize:15,
    fontWeight:'600'
  },
  placeOrder:{
    height:heightPixel(32),
    width:widthPixel(128),
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'black',
    borderRadius:10,
    alignSelf:'center'
  },
  placeOrderStl:{
    fontSize:12,
    fontWeight:'600',
    color:'white',

  }
});
