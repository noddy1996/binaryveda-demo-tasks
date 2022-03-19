import { StyleSheet, Text, View, Image ,FlatList,ScrollView} from 'react-native'
import React, { useState } from 'react'
import Container from '../../components/Container'
import ProfileHeader from './ProfileHeader'
import getIcon from '../../utils/getIcon'
import { scale } from 'react-native-size-matters'
import Label from '../../components/Label'
import ToggleSwitch from 'toggle-switch-react-native'
import { appColors } from '../../utils/appColors'
import Divider from '../../components/Divider'
import { followerData, uploadImgs } from '../../utils/MockData'
import { hp, wp } from '../../utils/ResponsiveSize'
// import TabBar from './TabBarList'
import TabBarList from './TabBarList'
import Posts from './Posts'
import TabViewExample from './TabViewExamble'
// import {  } from 'react-native-gesture-handler'

export default function Profile({ }) {
  const [toggle, setToggle] = useState(true)

  const _userProfile = () => {
    return (
      <>
        <View style={styles.userProfile}>
         <View style={styles.iconWrap}>
         <Image source={getIcon("upload-blue")} style={styles.icon} />
         <Label light text={"Upload"} style={styles.uploadText}/>
         </View>
          <View style={{ flex: 1, alignItems: "center" }}>
            <Image source={getIcon("profile")} style={{ height: scale(127), width: scale(127) }} />

          </View>
          <View style={styles.iconWrap}>
         <Image source={getIcon("edit")} style={{ height: scale(28), width: scale(27) }} />
          <Label light text={"Edit"} style={styles.uploadText}/>
         </View>
        </View>
        <Label text={"john.doe"} extlight style={{ fontSize: scale(36), alignSelf: "center" }} />
      </>
    )
  }
  const _dashboard = () => {
    return (
      <View>
        <View style={styles.dash}>
          <Label light text={"My dashboard"} style={{ fontSize: scale(14) }} />
          <ToggleSwitch
            isOn={toggle}
            onColor={appColors.midGreen}
            size="small"
            icon={<Image
              source={require("../../assets/icons/oval.png")}
              style={styles.toggleIcon} />}
            onToggle={isOn => setToggle(isOn)}
          />
        </View>
        <Divider isDark />
        <View style={[styles.dash, { justifyContent: "space-around" ,paddingVertical:scale(10)}]}>
          {followerData.map((val, key) => {
            return (
              <View key={key} style={{}}>
                <Label light text={val.count} style={{ fontSize: scale(24), alignSelf: "center" }} />
                <Label light text={val.label} style={{ fontSize: scale(14) }} />
              </View>
            )
          })}
        </View>
        <Divider isDark />
        <View style={{ flexDirection: "row", alignItems: "center",justifyContent:"center",marginTop:scale(10) }}>
          <View style={styles.fdRow}>
            <Image
              source={getIcon("heart")}
              style={{ height: scale(16), width: scale(19) }}
            />
            <Label bElight text={"120"} style={styles.text} />
          </View>
          <View style={styles.fdRow}>
            <Image
              source={getIcon("dm")}
              style={{ height: scale(16), width: scale(16) }}
            />
            <Label bElight text={"43K"} style={styles.text} />
          </View>
          <View style={styles.fdRow}>
            <Image
              source={getIcon("share")}
              style={{ height: scale(16), width: scale(13.5) }}
            />
            <Label bElight text={"2.3K"} style={styles.text} />
          </View>
        </View>
      </View>
    )
  }
  const _pallette=()=>{
    return(
      <View style={[styles.fdRow,{marginHorizontal:0,marginTop:scale(15)}]}>
          {appColors.pallate.map((val,key)=>{
            return(
              <View key={key} style={{flex:1,height:scale(42),backgroundColor:val,justifyContent:"center",paddingLeft:scale(8)}}>
                {key===0&&<Label medium style={{fontSize:scale(13.5),color:appColors.white}} text={"pallette"}/>}
              </View>
            )
          })}
      </View>
    )
  }
  const _renderTab=()=>{
    return(
     <View>
        <TabBarList/>
     </View>
    )
  }
  return (
    <Container isScrollable>
      
       <ProfileHeader />
     {_userProfile()}
      {_dashboard()}
      {_pallette()}     
      {_renderTab()}
    </Container>
  )
}

const styles = StyleSheet.create({
  userProfile: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: scale(20),
    paddingHorizontal: scale(20)
  },
  iconWrap:{
    height:scale(60),
    justifyContent:"flex-end",
},
  uploadText:{
    color:appColors.cornflowerBlue,
    fontSize:scale(13),
    marginTop:scale(3),
    alignSelf:"center"
  },
  icon: {
    height: scale(33),
    width: scale(28)
  },

  dash: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: scale(20)
  },
  toggleIcon: {
    height: scale(35),
    width: scale(35),
    marginTop: scale(1)
  },
  text: {
    fontSize: scale(18),
    marginLeft:scale(5),
    marginBottom:scale(4)
  },
  fdRow: {
    flexDirection: "row",
    alignItems: "center",
    marginHorizontal:scale(8)
  },
})