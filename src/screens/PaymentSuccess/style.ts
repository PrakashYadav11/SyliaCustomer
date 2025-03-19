import { Dimensions, StyleSheet } from "react-native";


const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      paddingHorizontal: width * 0.05,
    },
    iconContainer: {
      width: width * 0.3,
      height: width * 0.3,
      backgroundColor: '#444', // Dark gray color
      borderRadius: width * 0.15, // Fully circular
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: height * 0.03,
    },
    successText: {
      fontSize: width * 0.05,
      fontWeight: 'bold',
      textAlign: 'center',
      color: 'black',
    },
    buttonContainer: {
      position: 'absolute',
      bottom: height * 0.05, // Keeps the buttons at the bottom
      width: width * 0.9,
    },
    downloadButton: {
      backgroundColor: 'black',
      width: '100%',
      paddingVertical: height * 0.02,
      borderRadius: width * 0.03,
      alignItems: 'center',
      marginBottom: height * 0.015,
    },
    backButton: {
      backgroundColor: '#666', // Dark gray for back button
      width: '100%',
      paddingVertical: height * 0.02,
      borderRadius: width * 0.03,
      alignItems: 'center',
    },
    buttonText: {
      color: 'white',
      fontSize: width * 0.045,
      fontWeight: 'bold',
    },
  });

  export default styles