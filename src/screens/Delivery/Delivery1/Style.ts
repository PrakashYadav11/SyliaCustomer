import {StyleSheet} from 'react-native';
import {heightPixel, widthPixel} from '../../../Utils/ResponsiveDimensions';

export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#D9D9D980',
    
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: widthPixel(16),
    paddingVertical: heightPixel(10),
    backgroundColor: 'white',
  },
  textContainer: {
    marginLeft: widthPixel(10),
  },
  stepText: {
    fontSize: 12,
    color: 'black',
    textAlign: 'left',
  },
  bagText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  delivery: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: heightPixel(8),
    paddingHorizontal: widthPixel(18),
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    backgroundColor: 'white',
    top: heightPixel(1),
  },
  text: {
    marginLeft: widthPixel(8),
    fontSize: 14,
    color: 'gray',
  },
  imageContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: heightPixel(10),
    borderRadius: 10,
    alignItems: 'center',
    top: heightPixel(1),
  },
  image: {
    width: widthPixel(120),
    height: heightPixel(120),
    borderRadius: 10,
  },
  detailsContainer: {
    flex: 1,
    marginLeft: widthPixel(10),
  },
  brand: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  productName: {
    fontSize: 14,
    color: 'black',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: heightPixel(4),
  },
  oldPrice: {
    fontSize: 14,
    textDecorationLine: 'line-through',
    color: 'gray',
    marginRight: widthPixel(6),
  },
  newPrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  freeDelivery: {
    fontSize: 14,
    fontWeight: 'bold',
    marginVertical: heightPixel(4),
    color: 'black',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: heightPixel(2),
  },
  infoText: {
    fontSize: 12,
    color: 'gray',
    marginLeft: widthPixel(4),
  },
  removeContainer: {
    alignItems: 'flex-end',
    padding: 10,
    backgroundColor: 'white',
    top: heightPixel(2),
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: widthPixel(12),
    paddingVertical: heightPixel(6),
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    height: heightPixel(35),
    width: widthPixel(169),
  },
  buttonText: {
    marginLeft: widthPixel(5),
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  cpuponContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: heightPixel(12),
    paddingHorizontal: widthPixel(15),
    backgroundColor: 'white',
    top: heightPixel(3),
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tex: {
    marginLeft: 8,
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  selectText: {
    fontSize: 14,
    color: 'gray',
  },
  detailcontainer: {
    top: heightPixel(4),
    padding: heightPixel(15),
    backgroundColor: 'white',
  },
  header: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: heightPixel(10),
    color: 'black',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: heightPixel(4),
  },
  subRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: heightPixel(2),
  },
  label: {
    fontSize: 14,
    color: '#333',
  },
  subLabel: {
    fontSize: 13,
    color: 'black',
  },
  value: {
    fontSize: 14,
    color: 'black',
  },
  savings: {
    color: 'black',
  },
  info: {
    fontSize: 12,
    color: 'black',
  },
  totalLabel: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  totalValue: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black',
  },
  returnContainer: {
    top: heightPixel(10),
    padding: heightPixel(15),
    backgroundColor: 'white',
  },
  head: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: heightPixel(5),
    color: 'black',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: heightPixel(5),
  },
  link: {
    fontSize: 14,
    fontWeight: 'bold',
    color: 'black',
  },
  btncontainer: {
    top: heightPixel(20),
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
    height:heightPixel(46),
    width:widthPixel(272),
    borderRadius: 10,
    alignItems:'center',
    justifyContent:'center'
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
