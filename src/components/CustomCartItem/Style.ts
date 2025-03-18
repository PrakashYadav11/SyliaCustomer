import { StyleSheet } from "react-native";
import { heightPixel, widthPixel } from "../../Utils/ResponsiveDimensions";

export const style = StyleSheet.create({
    container:{
        padding:heightPixel(10),
        marginTop:heightPixel(20)
    },
    imgStyle:{
        marginHorizontal:widthPixel(5),
        height:heightPixel(172),
        width:widthPixel(167)
    },
    btnStyle:{
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row',
        height:heightPixel(22),
        width:widthPixel(167),
        backgroundColor:'black',
        marginTop:heightPixel(10),
        borderRadius:10
    },
    txtStyle:{
        fontSize:10,
        color:'white'
    },
    iconStyle:{
        left:widthPixel(10)
    },
    nameStyle:{
        fontSize:14,
        fontWeight:'600',
        color:'black',
    },
    descriptionStyle:{
        fontSize:12,
        fontWeight:'600',
        color:'black'
    },
    amountStyle:{
        fontSize:12,
        fontWeight:'600',
        marginLeft:widthPixel(10)
    },
    typeStyle:{
        fontSize:12,
        fontWeight:'600',
        color:'black'
    },
    priceStl:{
        flexDirection:'row'
    },
    prvAmount:{
        textDecorationLine:'line-through',

    }
})