import { Dimensions, StyleSheet } from "react-native";

const { width, height } = Dimensions.get('window')

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        marginTop: 5,
        alignItems: 'center',
      },
      iconStl: {
        alignItems: 'center',
        justifyContent: 'center',
        height: height * 0.05,
        width: width * 0.12,
        borderRadius: 10,
        backgroundColor: 'black',
      },
      searchStl: {
        color: 'black',
        flex: 1,
      },
      serch: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'white',
        height: height * 0.06,
        marginLeft: 5,
        borderRadius: 10,
        borderColor:'black',
        borderWidth:0.5,
        paddingHorizontal: 5,
      },
      icon: {
        marginRight: 8,
      },
      notification: {
        backgroundColor: 'white',
        height: height * 0.06,
        width: width * 0.12,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginLeft: 5,
        borderWidth:0.5,
      },
})

export default styles