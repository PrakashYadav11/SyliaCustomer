import { Dimensions, StyleSheet } from "react-native";
import { heightPixel, widthPixel } from "../../Utils/ResponsiveDimensions";

const {width, height} = Dimensions.get('window');

export const style = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#D9D9D9'
    },
    view:{
        backgroundColor:'#fff',
        height:heightPixel(200),
        width:widthPixel(500),
        transform: [{ rotate: '160deg' }],
        bottom:height * 0.87,
        right:widthPixel(20),
        position: 'absolute',
    },
    view2:{
        backgroundColor:'#fff',
        height:heightPixel(200),
        position:'absolute',
        width:widthPixel(650),
        bottom:height * 0.43,
        transform: [{ rotate: '3deg' }],
        borderTopRightRadius:1020,
        right:widthPixel(0.1)
    },
    view3:{
        backgroundColor:'#fff',
        height:heightPixel(380),
        position:'absolute',
        width:width * 1.2,
        top:height*0.68,
        borderTopLeftRadius:(width *2) / 2,
        right:widthPixel(1)
    },
    screenStyle:{
        alignItems:'center',
        height:heightPixel(755),
        justifyContent:'space-between'
    },
    logoStyle:{
        height:heightPixel(120),
        width:widthPixel(290),
        backgroundColor:'black',
        top:heightPixel(101),
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center'
    },
    logoTxt:{
        fontSize:30,
        color:'white',
        fontWeight:'700'
    },
    btnStyle:{
        height:heightPixel(107),
        width:widthPixel(314),
        backgroundColor:'#D9D9D980',
        borderRadius:50,
        alignItems:'center',
        justifyContent:'center'
    },
    btnTxt:{
        color:'black',
        fontWeight:'700',
        fontSize:20
    }
})