import React, { useReducer, useRef } from 'react'
import { View, } from "react-native"
import { Style, colors } from "../../theme"
import { useDrawerProgress } from '@react-navigation/drawer'
import { ProfileMenu, ProfileUser } from '../../context/array'
import { Header, DrawerItem, Footer, Profile } from './Touchable'
import Animated, { interpolate, useDerivedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated'

export const CustomDrawer = (props) => {

    const { state, descriptors, navigation } = props;
    const scrollRef = useRef(null)
    const [show, toggleProfile] = useReducer(s => !s, false);
    const drawerProgress = useDrawerProgress();

    const fun = () => {
        show ? scrollRef.current.scrollTo({
            y: 0,
            animated: true,
        }) : scrollRef.current.scrollToEnd({
            animated: true,
        })
        toggleProfile()
    }

    const viewStyles2 = (type) => useAnimatedStyle(() => {
        const val = type === 'top' ? -100 : 100;
        const translateY = interpolate(
            drawerProgress.value,
            [0, 1],
            [val, 0],
        )
        const opacity = interpolate(
            drawerProgress.value,
            [0, 1],
            [0, 1],
        )
        return {
            transform: [{ translateY }], opacity
        }
    })

    const progress = useDerivedValue(() => {
        return show ? withTiming(1) : withTiming(0);
    })

    const menuStyles = useAnimatedStyle(() => {
        const scaleY = interpolate(
            progress.value,
            [0, 1],
            [0, 1],
        )
        return {
            transform: [{ scaleY }]
        }
    })

    return (<View style={Style.container}>
        <Header />
        <Animated.ScrollView
            ref={scrollRef}
            {...props}
            showsVerticalScrollIndicator={false}
            style={[Style.marginVertival]}
        >
            <View style={[Style.view, Style.marginVertival]}>
                {state.routes.map(
                    (route, index) => {
                        const isFocused = state.index === index;
                        const { options } = descriptors[route.key]
                        const onPress = () => {
                            const event = navigation.emit({
                                type: 'tabPress',
                                target: route.key,
                            })
                            if (!isFocused && !event.defaultPrevented) {
                                navigation.navigate(route.name)
                            }
                        }
                        const color = isFocused ? colors.dark : colors.darkGray
                        const activeItemColor = isFocused ? colors.primary : null
                        const drawerItem = options.item
                        return (<DrawerItem
                            key={index}
                            onPress={onPress}
                            tabBarTestID={options.tabBarTestID}
                            {...drawerItem}
                            color={color}
                            activeItemColor={activeItemColor}
                        />)
                    }
                )}
            </View>
            <Profile menuStyles={menuStyles} name={ProfileUser.name} email={ProfileUser.email} ProfileMenu={ProfileMenu} />
        </Animated.ScrollView>
        <Footer
            fun={fun}
            viewStyles2={viewStyles2}
            name={ProfileUser.name}
            category={ProfileUser.category}
            profile={ProfileUser.profile}
        />
    </View >
    )
}