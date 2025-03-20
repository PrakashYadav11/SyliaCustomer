import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  carouselContainer: {
    alignItems: "center",
    marginTop: height * 0.02, 
  },
  imageContainer: {
    width: width * 0.9, 
    height: height * 0.25, 
    marginHorizontal: width * 0.05, 
  },
  img: {
    width: "100%",
    height: "85%",
    resizeMode: "cover",
    borderRadius: width * 0.05, 
  },
});

export default styles;
