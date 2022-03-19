import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Container from '../../components/Container'
import CustomButton from '../../components/CustomButton'
import getIcon from '../../utils/getIcon'
import { hp, wp } from '../../utils/ResponsiveSize'
import { scale } from 'react-native-size-matters'
import Label from '../../components/Label'
import { appColors } from '../../utils/appColors'
import { FlatList } from 'react-native-gesture-handler'
import { footerBtns, landingData } from '../../utils/MockData'
import Divider from '../../components/Divider'

export default function Landing({navigation}) {
    const _register = () => {
        return (
            <View style={styles.registerWrap}>

                <CustomButton
                onPress={()=>navigation.navigate("Profile")}
                    leftIcon={<Image source={getIcon("arrowRight")} style={{ height: hp(3), width: wp(6) }} />}
                    label={" register"} />
                <Label extlight text={"me as a collector"} style={styles.txtColl} />
            </View>
        )
    }
    const _track = () => {
        return (
            <View style={[styles.registerWrap, { marginBottom: scale(30) }]}>
                <Image source={getIcon("arrowRightBlue")} style={{ height: hp(3), width: wp(6) }} />
                <Label extlight text={"track my application"} style={styles.txtTrack} />
            </View>
        )
    }
    const _copyright = () => {
        return (
            <View style={[styles.registerWrap, { marginBottom: scale(30),marginTop:scale(15) }]}>
                <Image source={getIcon("copyright")} />
                <Label light text={"Content Copyright reserved."} style={styles.txtCopy} />
            </View>
        )
    }
    const _socialButtons = () => {
        return (
            <View style={styles.socialWrap}>
                {["fb", "insta"].map((val, key) => {
                    return (
                        <Image
                            key={key}
                            source={getIcon(val)}
                            style={{ marginHorizontal: scale(5) }} />
                    )
                })}
            </View>
        )
    }
    const _renderItem = ({ item }) => {
        
        const { title, icon, desc } = item
        return (
            <View style={styles.item}>
                <Image
                    source={getIcon(icon)}
                    style={{ marginLeft: scale(10) }}
                />
                <Label light text={title} style={styles.title} />
                <Label bElight text={desc} style={styles.txtDesc} />
            </View>
        )
    }
    const _renderFooter = ({ item }) => {

        return (
            <Label medium text={item} style={styles.txtFooter} />
        )
    }
    return (
        <Container noPadding isScrollable>
            <Image
                source={getIcon("logo")}
                resizeMode={"center"}
                style={styles.logo} />
            <Image
                source={getIcon("loginImg")}
                resizeMode={"cover"}
                style={styles.loginImg} />
            <View style={styles.body}>
                <Label
                    bElight
                    style={styles.txt}
                    text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit"} />
                {_register()}
                {_track()}
                <FlatList
                    data={landingData}
                    renderItem={_renderItem}
                    keyExtractor={(item, index) => "key" + index}
                />
                {_socialButtons()}
                <Divider isDark />
                <Image
                    source={getIcon("logo1")}
                    style={{ alignSelf: "center",marginVertical:scale(25) }}
                />
                <FlatList
                    data={footerBtns}
                    numColumns={2}
                    renderItem={_renderFooter}
                    keyExtractor={(item, index) => "key" + index}
                />
                  <Divider isDark />
                  {_copyright()}
            </View>
        </Container>
    )
}

const styles = StyleSheet.create({
    logo: {
        height: hp(12),
        width: wp(50),
        marginHorizontal: wp(5),
        marginTop: hp(5)
    },
    txt: {
        fontSize: scale(16),
        paddingHorizontal: scale(10),
        textAlign: "center",
        marginVertical: scale(20)
    },
    txtCopy: {
        fontSize: scale(16),
        marginBottom:scale(2),
        marginLeft:scale(5)
        
    },
    txtTrack: {
        fontSize: scale(22),
        paddingHorizontal: scale(10),
        textAlign: "center",
        marginVertical: scale(20),
        color: appColors.cornflowerBlue,
        marginBottom: scale(25)
    },
    loginImg: {
        height: wp(85.6),
        width: wp(99.9),
    },
    body: {
        paddingHorizontal: scale(20)
    },
    registerWrap: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    txtColl: {
        fontSize: scale(30),
        marginBottom: scale(5),
        marginLeft: scale(5),
        color: appColors.black2
    },
    item: {
        // backgroundColor:"red" 
    },
    itemIcon: {
        height: wp(14.8),
        width: wp(13.9)
    },
    title: {
        fontSize: scale(28),
        maxWidth: wp(35),
        marginVertical: scale(15)
    },
    txtDesc: {
        fontSize: scale(16),
        // maxWidth:wp(35),
        marginBottom: scale(55),
        color: appColors.black49
    },
    socialWrap: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: scale(20)
    },
    txtFooter:{
        fontSize:scale(16),
        flex:1,
        // textAlign:"center",
        marginBottom:scale(20),
        marginLeft:scale(30)
    }
})