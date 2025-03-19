import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  head: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft: width * 0.035, 
    marginTop: height * 0.02, 
  },
  headText: {
    fontSize: width * 0.06, 
    marginLeft: width * 0.025, 
    fontWeight: "bold",
    color: "black",
  },
  card: {
    marginTop: height * 0.03, 
  },
});

export default styles;
