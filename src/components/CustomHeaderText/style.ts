import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
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
})

export default styles