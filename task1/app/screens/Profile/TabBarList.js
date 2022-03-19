import { View, StyleSheet, Text, useWindowDimensions, Image } from 'react-native'
import React, { useState } from 'react'
import { TabBar, TabView, SceneMap } from 'react-native-tab-view'
import { appColors, shadow } from '../../utils/appColors';
import { scale } from 'react-native-size-matters';
import Label from '../../components/Label';
import Posts from './Posts';
import getIcon from '../../utils/getIcon';
import { wp } from '../../utils/ResponsiveSize';


const renderScene = SceneMap({
    uploads: Posts,
    exhibitions: Posts,
    revenue: Posts,
});
export default function TabBarList({ }) {
    const layout = useWindowDimensions();
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'uploads', title: 'Uploads', img: getIcon("upload") },
        { key: 'exhibitions', title: 'Exhibitions', img: getIcon("exhibitions") },
        { key: 'revenue', title: 'Revenue', img: getIcon("revenue") },
    ]);

   
    const renderTabBar = (props) => {
        return (
            <TabBar
                {...props}
                indicatorStyle={{ backgroundColor: appColors.white }}
                style={{ backgroundColor: appColors.white, paddingVertical: scale(15) }}
                renderLabel={() => null}
                renderIcon={({ route, focused, color }) => {
                   
                    return (
                        <View style={[{ paddingHorizontal: scale(10), }, focused && styles.tabActive]} >
                            <View style={styles.center}>
                                <Image
                                    resizeMode="contain"
                                    style={[{ height: scale(30), width: scale(33) },]}
                                    source={route.img}
                                />
                                <Label
                                    text={route.title}
                                    bMedium
                                    style={
                                        {
                                            color: focused ? appColors.black : appColors.black46,
                                            paddingVertical: scale(5), fontSize: scale(12)
                                        }
                                    }
                                />
                            </View>
                        </View>
                    )
                }}
            />
        )
    };



    return (
        <View style={{ flex: 1 ,height:wp(170)}}>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                renderTabBar={renderTabBar}
                style={{}}
                
            />
        </View>
    )
}


const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        paddingHorizontal: 20,
    },
    center: { justifyContent: 'center', alignItems: 'center' },
    rowSb: {
        paddingVertical: scale(20),
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    switchcontainerStyle: {
        width: scale(50),
        height: scale(20),
        borderRadius: scale(30),
    },
    switchcircleStyle: {
        width: scale(25),
        height: scale(25),
        borderRadius: scale(20),
        borderWidth: scale(10),
        borderColor: appColors.white,
        ...shadow,
    },
    tabActive: {
        borderBottomWidth: scale(2),
        borderBottomColor: appColors.yellow
    }
});