import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

export const style = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#D9D9D980',
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: width * 0.04, // 4% of screen width
    paddingVertical: height * 0.012, // 1.2% of screen height
    backgroundColor: 'white',
  },

  textContainer: {
    marginLeft: width * 0.025, // 2.5% of screen width
  },
  stepText: {
    fontSize: width * 0.03, // 3% of screen width
    color: 'black',
    textAlign: 'left',
  },
  bagText: {
    fontSize: width * 0.035, // 3.5% of screen width
    fontWeight: 'bold',
    color: 'black',
  },
  delivery: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: height * 0.01, // 1% of screen height
    paddingHorizontal: width * 0.045, // 4.5% of screen width
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    backgroundColor: 'white',
    top: height * 0.001, // Small adjustment for positioning
  },
  text: {
    marginLeft: width * 0.02, // 2% of screen width
    fontSize: width * 0.035, // 3.5% of screen width
    color: 'gray',
  },
  imageContainer: {
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: height * 0.012, // 1.2% of screen height
    borderRadius: width * 0.025, // 2.5% of screen width
    alignItems: 'center',
    top: height * 0.001, // Small adjustment
  },
  image: {
    width: width * 0.3, // 30% of screen width
    height: width * 0.3, // Keep aspect ratio square
    borderRadius: width * 0.025, // 2.5% of screen width
  },
  detailsContainer: {
    flex: 1,
    marginLeft: width * 0.025, // 2.5% of screen width
  },
  brand: {
    fontSize: width * 0.035, // 3.5% of screen width
    fontWeight: 'bold',
    color: 'black',
  },
  productName: {
    fontSize: width * 0.035, // 3.5% of screen width
    color: 'black',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: height * 0.005, // 0.5% of screen height
  },
  oldPrice: {
    fontSize: width * 0.035, // 3.5% of screen width
    textDecorationLine: 'line-through',
    color: 'gray',
    marginRight: width * 0.015, // 1.5% of screen width
  },

  newPrice: {
    fontSize: width * 0.035, // 3.5% of screen width
    fontWeight: 'bold',
    color: 'black',
  },
  freeDelivery: {
    fontSize: width * 0.035, // 3.5% of screen width
    fontWeight: 'bold',
    marginVertical: height * 0.005, // 0.5% of screen height
    color: 'black',
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: height * 0.003, // 0.3% of screen height
  },
  infoText: {
    fontSize: width * 0.03, // 3% of screen width
    color: 'gray',
    marginLeft: width * 0.02, // 2% of screen width
  },
  removeContainer: {
    alignItems: 'flex-end',
    padding: height * 0.012, // 1.2% of screen height
    backgroundColor: 'white',
    top: height * 0.002, // Small adjustment
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: width * 0.03, // 3% of screen width
    paddingVertical: height * 0.008, // 0.8% of screen height
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: width * 0.015, // 1.5% of screen width
    height: height * 0.045, // 4.5% of screen height
    width: width * 0.45, // 45% of screen width
  },
  buttonText: {
    marginLeft: width * 0.02, // 2% of screen width
    fontSize: width * 0.035, // 3.5% of screen width
    fontWeight: 'bold',
    color: 'black',
  },
  cpuponContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: height * 0.015, // 1.5% of screen height
    paddingHorizontal: width * 0.04, // 4% of screen width
    backgroundColor: 'white',
    top: height * 0.004, // Adjust position responsively
  },
  leftSection: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tex: {
    marginLeft: width * 0.02, // 2% of screen width
    fontSize: width * 0.035, // 3.5% of screen width
    fontWeight: 'bold',
    color: 'black',
  },
  selectText: {
    fontSize: width * 0.035, // 3.5% of screen width
    color: 'gray',
  },
  detailcontainer: {
    top: height * 0.005, // Adjusted dynamically
    padding: width * 0.04, // 4% of screen width
    backgroundColor: 'white',
  },
  header: {
    fontSize: width * 0.04, // 4% of screen width
    fontWeight: 'bold',
    marginBottom: height * 0.012, // 1.2% of screen height
    color: 'black',
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: height * 0.005, // 0.5% of screen height
  },
  subRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: height * 0.003, // 0.3% of screen height
  },
  label: {
    fontSize: width * 0.035, // Responsive font size (3.5% of screen width)
    color: '#333',
  },
  subLabel: {
    fontSize: width * 0.032, // 3.2% of screen width
    color: 'black',
  },
  value: {
    fontSize: width * 0.035, // 3.5% of screen width
    color: 'black',
  },
  savings: {
    color: 'black',
  },
  info: {
    fontSize: width * 0.03, // 3% of screen width
    color: 'black',
  },
  totalLabel: {
    fontSize: width * 0.038, // 3.8% of screen width
    fontWeight: 'bold',
    color: 'black',
  },
  totalValue: {
    fontSize: width * 0.038, // 3.8% of screen width
    fontWeight: 'bold',
    color: 'black',
  },
  returnContainer: {
    top: height * 0.012, // Adjusted for responsiveness (1.2% of screen height)
    padding: width * 0.04, // 4% of screen width
    backgroundColor: 'white',
  },
  head: {
    fontSize: width * 0.04, // Responsive font size (4% of screen width)
    fontWeight: 'bold',
    marginBottom: height * 0.007, // 0.7% of screen height
    color: 'black',
  },
  description: {
    fontSize: width * 0.035, // 3.5% of screen width
    color: '#666',
    marginBottom: height * 0.007, // 0.7% of screen height
  },
  link: {
    fontSize: width * 0.035, // 3.5% of screen width
    fontWeight: 'bold',
    color: 'black',
  },
  btncontainer: {
    top: height * 0.025, // 2.5% of screen height
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: width * 0.04, // 4% of screen width
    backgroundColor: 'white',
  },
  priceContaine: {
    flexDirection: 'column',
  },
  price: {
    fontSize: width * 0.04, // 4% of screen width
    fontWeight: 'bold',
    color: 'black',
  },
  viewDetails: {
    fontSize: width * 0.03, // 3% of screen width
    color: 'black',
  },

  btn: {
    backgroundColor: 'black',
    height: height * 0.06, // 6% of screen height
    width: width * 0.7, // 70% of screen width
    borderRadius: width * 0.025, // 2.5% of screen width
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: 'white',
    fontSize: width * 0.045, // 4.5% of screen width
    fontWeight: 'bold',
  },
});
