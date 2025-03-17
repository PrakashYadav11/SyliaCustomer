import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: width * 0.05,
    backgroundColor: 'white',
  },
  btmBtn: {
    marginTop: height * 0.05, 
  },
  btnStyle: {
    backgroundColor: '#F4F4F4',
    borderRadius: width * 0.04,
    borderWidth: 1,
    borderColor: '#CFCFCF',
    paddingVertical: height * 0.018,
    paddingHorizontal: width * 0.08,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: 'black',
    fontSize: width * 0.045, 
    fontFamily: 'Roboto',
    fontWeight: 'bold',
  },
  img: {
    height: height * 0.05, 
    width: width * 0.1,
    marginRight: width * 0.02,
    tintColor: 'black',
    resizeMode: 'contain',
  },
  desLine: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: height * 0.05,
  },
  des: {
    height: 1,
    width: '28%',
    backgroundColor: 'black',
  },
  desText: {
    fontSize: width * 0.03,
    marginHorizontal: width * 0.02,
    color: '#000',
  },
  acc: {
    marginTop: height * 0.02,
  },
  accTxt: {
    color: 'black',
    fontSize: width * 0.03,
    fontWeight: 'bold',
  },
  btn: {
    backgroundColor: '#D9D9D9',
    alignItems: 'center',
    width: '60%',
    height: height * 0.06,
    borderRadius: width * 0.03,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5, 
  },
  txt: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    color: 'black',
  },
  forgotPass: {
    fontSize: width * 0.03,
    alignSelf: 'flex-end',
    marginTop: height * 0.015,
  },
  btnContainer: {
    alignItems: 'center',
    marginTop: height * 0.03,
  },
  headerText: {
    fontSize: width * 0.08,
    color: 'black',
    fontWeight: '900',
    marginBottom: height * 0.05,
  },
  text: {
    color: 'black',
    marginTop: height * 0.05,
    marginLeft: width * 0.1,
    fontSize: width * 0.04,
  },
  Box: {
    borderWidth: 1,
    height: height * 0.5,
    width: width * 0.9,
    backgroundColor: '#FFF',
    borderRadius: width * 0.04,
    justifyContent: 'center',
    alignItems: 'center',
    padding: width * 0.05,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5, 
  },
});

export default styles;
