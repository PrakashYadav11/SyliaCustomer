import {Dimensions, StyleSheet} from 'react-native';
import {heightPixel, widthPixel} from '../../../Utils/ResponsiveDimensions';
const { width, height } = Dimensions.get('window');

export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: height * 0.012,
    paddingHorizontal: width * 0.04,
    backgroundColor: 'white',
  },
  textContainer: {
    marginLeft: width * 0.04,
  },
  stepText: {
    fontSize: width * 0.03,
    color: 'black',
  },
  title: {
    fontSize: width * 0.04,
    fontWeight: '500',
    color: 'black',
  },
  card: {
    backgroundColor: '#F4ECEC8C',
    padding: height * 0.018,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: { width: width * 0.05, height: height * 0.002 },
    shadowRadius: 4,
    elevation: 5,
    shadowOpacity: 0.1,
    margin: height * 0.012,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: height * 0.012,
  },
  button: {
    backgroundColor: '#DADADA',
    paddingVertical: height * 0.006,
    paddingHorizontal: width * 0.03,
    borderRadius: 5,
    marginRight: width * 0.012,
  },
  buttonText: {
    fontSize: width * 0.03,
    fontWeight: 'bold',
  },
  changeText: {
    fontSize: width * 0.03,
    color: '#666',
  },
  name: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    marginBottom: height * 0.002,
  },
  address: {
    fontSize: width * 0.035,
    color: '#555',
  },
  phone: {
    fontSize: width * 0.035,
    color: '#333',
    marginTop: height * 0.006,
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginVertical: height * 0.012,
  },
  deliveryContaine: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  codText: {
    fontSize: width * 0.03,
    color: '#333',
  },
  estDelivery: {
    fontSize: width * 0.03,
    color: '#333',
  },
  boldText: {
    fontWeight: 'bold',
  },
  deliverycontainer: {
    backgroundColor: '#D9D9D9B2',
    padding: height * 0.018,
    borderRadius: 10,
    marginTop: height * 0.06,
    height: height * 0.25,
  },
  header: {
    fontSize: width * 0.04,
    fontWeight: '600',
    marginBottom: height * 0.006,
    color: 'black',
  },
  subHeader: {
    fontSize: width * 0.03,
    color: 'black',
    marginBottom: height * 0.018,
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  productImage: {
    width: width * 0.2,
    height: height * 0.13,
    borderRadius: 8,
    marginRight: width * 0.04,
  },
  details: {
    flex: 1,
  },
  brand: {
    fontSize: width * 0.035,
    fontWeight: 'bold',
    color: 'black',
  },
  productTitle: {
    fontSize: width * 0.032,
    color: 'black',
    marginBottom: height * 0.002,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  originalPrice: {
    fontSize: width * 0.03,
    color: 'gray',
    textDecorationLine: 'line-through',
    marginRight: width * 0.012,
  },
  discountedPrice: {
    fontSize: width * 0.035,
    fontWeight: 'bold',
  },
  freeDelivery: {
    fontSize: width * 0.038,
    color: 'black',
    fontWeight: 'bold',
    marginTop: height * 0.006,
  },
  btncontainer: {
    top: height * 0.25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: height * 0.018,
    backgroundColor: 'white',
  },
  priceContaine: {
    flexDirection: 'column',
  },
  price: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    color: 'black',
  },
  viewDetails: {
    fontSize: width * 0.03,
    color: 'black',
  },
  btn: {
    backgroundColor: 'black',
    height: height * 0.06,
    width: width * 0.7,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: width * 0.04,
    fontWeight: 'bold',
  },
});
