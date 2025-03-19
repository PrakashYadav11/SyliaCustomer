import { Dimensions, StyleSheet } from 'react-native';

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: width * 0.05,
  },
  img: {
    height: height * 0.03,
    width: height * 0.03,
  },
  productContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: height * 0.039,
  },
  productImage: {
    width: width * 0.22,
    height: width * 0.22,
    borderRadius: 8,
  },
  productDetails: {
    marginLeft: width * 0.04,
    flex: 1,
  },
  productTitle: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
    color: 'black',
  },
  productDescription: {
    fontSize: width * 0.038,
    color: 'black',
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  oldPrice: {
    textDecorationLine: 'line-through',
    color: 'gray',
    fontSize: width * 0.038,
  },
  newPrice: {
    fontWeight: 'bold',
    color: 'black',
    fontSize: width * 0.045,
  },
  freeDelivery: {
    fontSize: width * 0.035,
    color: 'black',
    fontWeight: 'bold',
  },
  divider: {
    height: 1,
    backgroundColor: 'black',
    marginVertical: height * 0.017,
    width: '95%',
    alignSelf: 'center',
  },
  ratingTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: height * 0.04,
  },
  ratingTitle: {
    fontSize: width * 0.045,
    fontWeight: 'bold',
    marginLeft: width * 0.02,
    color: 'black',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5',
    padding: height * 0.015,
    borderRadius: 9,
    width: '90%',
    alignSelf: 'center',
  },
  ratingText: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    marginRight: width * 0.025,
  },
  stars: {
    flexDirection: 'row',
  },
  orderStepContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: height * 0.007,
    marginTop: height * 0.02,
  },
  lineContainer: {
    alignItems: 'center',
    marginRight: width * 0.025,
  },
  solidLine: {
    width: 2,
    height: height * 0.025,
    backgroundColor: 'green',
  },
  orderStatusText: {
    fontSize: width * 0.038,
    color: 'gray',
  },
  completedText: {
    fontWeight: 'bold',
    color: 'black',
  },
});

export default styles;
