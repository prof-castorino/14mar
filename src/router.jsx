import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { CustomDrawer } from './screens/drawer/'
import { Platform } from 'react-native'
import { Style } from './theme'
import { ScreensArray } from './screens/drawer/array'

const { Navigator, Screen } = createDrawerNavigator()



export const Router = () => {
    return (
        <NavigationContainer>
            <Navigator
                screenOptions={{
                    drawerStyle: Style.drawerStyles,
                    drawerType: 'front',
                    swipeEdgeWidth: Platform.OS === 'android' && 180,
                }}
                drawerContent={
                    (props) => (<CustomDrawer {...props} />)
                }

            >
                {ScreensArray.map((_, i) =>
                (<Screen key={i} name={_.route} component={_.component}
                    options={{
                        item: _,
                    }}
                />)
                )}
            </Navigator>
        </NavigationContainer>
    )
}