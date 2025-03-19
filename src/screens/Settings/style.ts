import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: 10,
      },
      header: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
      },
      headerText: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 10,
        color: "black",
      },
      sectionTitle: {
        fontSize: 14,
        fontWeight: "bold",
        color: "black",
        marginTop: 20,
        marginBottom: 10,
        left:9,
      },
      settingItem: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 12,
        left:11,
      },
      settingText: {
        fontSize: 14,
        fontWeight: "bold",
        color: "black",
        marginLeft: 10,
      },
      subText: {
        fontSize: 12,
        color: "gray",
        marginLeft: 10,
      },
      line:{
        height:3,
        marginTop:10,
        width:'100%',
        backgroundColor:'grey',
      },
});

export default styles