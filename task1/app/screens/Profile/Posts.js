import { StyleSheet, Text, View,FlatList,Image } from 'react-native'
import React from 'react'
import { uploadImgs } from '../../utils/MockData'
import { hp, wp } from '../../utils/ResponsiveSize'
import { scale } from 'react-native-size-matters'

export default function Posts() {
    const _renderData=({item})=>{
        return(
          <View style={{marginBottom:scale(5)}}>
            <Image source={{uri:item}} style={styles.img}/>
          </View>
        )
      }
  return (
    <FlatList
      data={uploadImgs}
      numColumns={2}
      renderItem={_renderData}
      keyExtractor={(item,index)=>"key"+index}
      />
  )
}

const styles = StyleSheet.create({
    img:{
        width:wp(43),
        height:wp(43),
        marginRight:scale(6.5)
      },
})