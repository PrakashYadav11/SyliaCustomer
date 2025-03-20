import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    scrollContainer: {
      flexGrow: 1,
    },
    container: {
      flex: 1,
      backgroundColor: 'white',
      paddingHorizontal: width * 0.05,
      paddingTop: height * 0.03,
      paddingBottom: height * 0.05,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center', // Centers title
      position: 'relative',
      marginBottom: height * 0.02,
    },
    backButton: {
      position: 'absolute',
      left: 0,
      width: width * 0.12, // Scales dynamically
      height: width * 0.12,
      backgroundColor: 'black',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: width * 0.03,
    },
    title: {
      fontSize: width * 0.05,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    paymentOption: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#F5F5F5',
      paddingVertical: height * 0.018,
      paddingHorizontal: width * 0.05,
      borderRadius: width * 0.03,
      marginVertical: height * 0.009,
      top:10,
    },
    icon: {
      width: width * 0.07,
      height: width * 0.07,
      marginRight: width * 0.04,
    },
    paymentText: {
      flex: 1,
      fontSize: width * 0.045,
      color: 'black',
    },
    linkText: {
      fontSize: width * 0.04,
      color: 'gray',
      fontWeight: '500',
    },
    cardTitle: {
      fontSize: width * 0.045,
      fontWeight: 'bold',
      marginVertical: height * 0.02,
      color: 'black',
    },
    inputContainer: {
      backgroundColor: '#F5F5F5',
      borderRadius: width * 0.03,
      paddingHorizontal: width * 0.04,
      paddingVertical: height * 0.015,
    },
    input: {
      backgroundColor: '#D3D3D3',
      borderRadius: width * 0.03,
      padding: height * 0.02,
      fontSize: width * 0.045,
      color: 'black',
      marginVertical: height * 0.01,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    smallInput: {
      width: '48%',
    },
    nextButton: {
      backgroundColor: 'black',
      paddingVertical: height * 0.02,
      borderRadius: width * 0.03,
      marginTop: height * 0.05,
      marginBottom: height * 0.03,
      alignSelf: 'center',
      width: width * 0.9, 
    },
    nextText: {
      color: 'white',
      fontSize: width * 0.045,
      fontWeight: 'bold',
      textAlign: 'center',
    },
});

export default styles;
