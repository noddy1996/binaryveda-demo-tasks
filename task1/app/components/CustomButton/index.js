import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { scale } from 'react-native-size-matters'
import { appColors } from '../../utils/appColors'
import TouchableRipple from 'react-native-touch-ripple'
import Label from '../Label'

export default function index({label,style,onPress,labelStyle,leftIcon}) {
    return (
        <TouchableRipple rippleColor={appColors.white} onPress={onPress} rippleDuration={800} style={[styles.container,style]}> 
           {<View style={{justifyContent:"center"}}>
            {leftIcon}
            </View>}
            <Label text={`${label}`} extlight style={[styles.label,labelStyle]}/>
            
        </TouchableRipple>
    )
}

const styles = StyleSheet.create({
    container:{
        height:scale(40),
        backgroundColor:appColors.primary,
        borderRadius:scale(9),
        justifyContent:"center",
        // alignItems:"center",
        overflow:"hidden",
        marginVertical:scale(10),
        paddingHorizontal:scale(10),
        flexDirection:"row",
    },
    label:{
        fontSize:scale(27),
        // fontWeight:"500",
        color:appColors.white,
        // backgroundColor:"blue"
    }
})
