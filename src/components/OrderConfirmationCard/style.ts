import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: "#E0E0E0",
    borderRadius: width * 0.025, // Responsive border radius
    padding: width * 0.04, // Responsive padding
    width: "90%",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
    marginBottom:19,
  },
  header: {
    backgroundColor: "#5C5C5C",
    padding: width * 0.025, // Responsive padding
    borderRadius: width * 0.025,
  },
  headerText: {
    color: "white",
    fontSize: width * 0.045, // Responsive font size
    fontWeight: "bold",
  },
  content: {
    paddingVertical: width * 0.025,
  },
  confirmationText: {
    fontSize: width * 0.04, // Responsive font size
    marginBottom: width * 0.015,
    color: "black",
  },
  message: {
    fontSize: width * 0.035,
    color: "black",
    marginBottom: width * 0.03,
  },
  button: {
    backgroundColor: "white",
    paddingVertical: width * 0.015,
    paddingHorizontal: width * 0.04,
    borderRadius: width * 0.025,
    alignSelf: "flex-start",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 2,
  },
  buttonText: {
    fontSize: width * 0.035,
    fontWeight: "bold",
    color: "black",
  },
});

export default styles;
