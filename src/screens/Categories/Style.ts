import { StyleSheet } from "react-native";
import { heightPixel, pixelSizeVertical, widthPixel } from "../../Utils/ResponsiveDimensions";

export const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        padding:heightPixel(10)       
    },
    header:{
        flexDirection:'row'
    },
    headerTxt:{
        fontWeight:'600',
        fontSize:20,
        color:'black',
        marginLeft:widthPixel(10)
    }
})