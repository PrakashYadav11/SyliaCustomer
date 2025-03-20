import { StyleSheet } from "react-native";
import { heightPixel, widthPixel } from "../../Utils/ResponsiveDimensions";

export const styles=StyleSheet.create({
    container:{
        height:heightPixel(100),
        width:widthPixel(100),
        backgroundColor:'#D9D9D9',
        alignItems:'center',
        justifyContent:'center',
        marginHorizontal:widthPixel(15),
        marginVertical:heightPixel(15),
        borderRadius:10
    },
    txt:{
        fontSize:16,
        color:'black',
        fontWeight:'600',
        textAlign:'center'
    },
})