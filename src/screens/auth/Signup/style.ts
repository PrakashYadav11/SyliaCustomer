import {Dimensions, StyleSheet} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: width * 0.05,
    justifyContent: 'center',
  },
  headText: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    fontSize: width * 0.07,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    marginBottom: height * 0.005,
    flexShrink: 1,
  },
  subHeader: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    marginBottom: height * 0.02,
    flexShrink: 1,
  },
  inputContainer: {
    backgroundColor: '#F5F5F5',
    padding: width * 0.04,
    borderRadius: width * 0.03,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 4,
  },
  signupButtonContainer: {
    paddingVertical: height * 0.015,
    borderRadius: width * 0.03,
    alignItems: 'center',
  },
  loginContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    bottom: 5,
  },
  loginText: {
    fontSize: width * 0.035,
    color: 'black',
    flexShrink: 1,
  },
  loginLink: {
    fontSize: width * 0.035,
    fontWeight: 'bold',
    color: 'black',
    flexShrink: 1,
  },
});

export default styles