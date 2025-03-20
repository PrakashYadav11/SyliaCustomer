import {StyleSheet} from 'react-native';
import {heightPixel, widthPixel} from '../../../Utils/ResponsiveDimensions';
import {baseGestureHandlerWithDetectorProps} from 'react-native-gesture-handler/lib/typescript/handlers/gestureHandlerCommon';

export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: heightPixel(10),
    paddingHorizontal: widthPixel(15),
    backgroundColor: 'white',
  },
  textContainer: {
    marginLeft: widthPixel(15),
  },
  stepText: {
    fontSize: 12,
    color: 'black',
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: 'black',
  },
  card: {
    backgroundColor: '#F4ECEC8C',
    padding: heightPixel(15),
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {width: 20, height: 2},
    shadowRadius: 4,
    elevation: 5,
    shadowOpacity: 0.001,
    margin: heightPixel(10),
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: heightPixel(10),
  },
  button: {
    backgroundColor: '#DADADA',
    paddingVertical: heightPixel(5),
    paddingHorizontal: heightPixel(12),
    borderRadius: 5,
    marginRight: widthPixel(5),
  },
  buttonText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  changeText: {
    fontSize: 12,
    color: '#666',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: heightPixel(2),
  },
  address: {
    fontSize: 14,
    color: '#555',
  },
  phone: {
    fontSize: 14,
    color: '#333',
    marginTop: heightPixel(5),
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginVertical: heightPixel(10),
  },
  deliveryContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  codText: {
    fontSize: 12,
    color: '#333',
  },
  estDelivery: {
    fontSize: 12,
    color: '#333',
  },
  boldText: {
    fontWeight: 'bold',
  },
  deliverycontainer: {
    backgroundColor: '#D9D9D9B2',
    padding: heightPixel(15),
    borderRadius: 10,
    marginTop: heightPixel(50),
    height: heightPixel(203),
  },
  header: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: heightPixel(5),
    color: 'black',
  },
  subHeader: {
    fontSize: 12,
    color: 'black',
    marginBottom: heightPixel(15),
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productImage: {
    width: widthPixel(80),
    height: heightPixel(105),
    borderRadius: 8,
    marginRight: widthPixel(15),
  },
  details: {
    flex: 1,
  },
  brand: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  productTitle: {
    fontSize: 13,
    color: 'black',
    marginBottom: heightPixel(2),
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  originalPrice: {
    fontSize: 12,
    color: 'gray',
    textDecorationLine: 'line-through',
    marginRight: widthPixel(5),
  },
  discountedPrice: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  freeDelivery: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    marginTop: heightPixel(5),
  },
  btncontainer: {
    top: heightPixel(190),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: heightPixel(15),
    backgroundColor: 'white',
  },
  priceContaine: {
    flexDirection: 'column',
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  viewDetails: {
    fontSize: 12,
    color: 'black',
  },
  btn: {
    backgroundColor: 'black',
    height: heightPixel(46),
    width: widthPixel(272),
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
