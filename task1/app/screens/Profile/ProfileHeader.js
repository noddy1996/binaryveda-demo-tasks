import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import { appColors } from '../../utils/appColors'
import getIcon from '../../utils/getIcon'
import { scale } from 'react-native-size-matters'

export default function ProfileHeader() {
  return (
    <View style={styles.container}>
      <View style={{flex:1}}>
      <Image source={getIcon("logo2")}
      />
      </View>
      <View style={styles.user}>
      <Image source={getIcon("user")} style={styles.userIcon}/>
      </View>
      <Image source={getIcon("plus")}  style={[styles.userIcon,{marginRight:35}]} />
      <Image source={getIcon("menu")} style={{height:scale(12),width:scale(16)}}/>

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        alignItems:"center",
        backgroundColor:appColors.white,
        marginVertical:scale(10),
    },
    user:{
        backgroundColor:appColors.cherry,
        borderRadius:scale(28/2),
        height:scale(28),
        width:scale(28),
        justifyContent:"center",
        alignItems:"center",
        marginRight:scale(35)
    },
    userIcon:{
        height:scale(16),
        width:scale(16),
       
    }
})