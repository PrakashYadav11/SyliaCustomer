import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  container: {
    padding: width * 0.04, 
    flex: 1,
    backgroundColor: "white",
    bottom:25,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: width * 0.02, 
  },
  title: {
    fontSize: width * 0.05, 
    fontWeight: "bold",
    color: "black",
  },
  seeAll: {
    fontSize: width * 0.028, 
    color: "black",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: width * 0.025, 
    alignItems: "center",
    width: width * 0.35, 
  },
  image: {
    width: width * 0.3, 
    height: width * 0.35, 
    borderRadius: 10,
  },
  name: {
    fontSize: width * 0.03, 
    fontWeight: "bold",
    marginTop: width * 0.02,
  },
  price: {
    fontSize: width * 0.025,
    color: "black",
  },
  pricetag: {
    fontWeight: "900",
  },
});

export default styles;
