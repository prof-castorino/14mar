import { Text, Image, View, TouchableOpacity } from "react-native"
import Animated from 'react-native-reanimated'
import { Style, colors, constant } from "../../theme"
import Icon from "../Icon"

export const Header = () => {
    return (
        <View style={[Style.view, Style.marginTop, Style.row]}>
            <Text style={Style.headerTitle}>Olá! 👋</Text>
        </View>)
}



export const Footer = ({ fun, viewStyles2, name, category, profile }) => {

    return (
        <TouchableOpacity
            onPress={fun}>
            <Animated.View
                style={[Style.row, Style.view, Style.marginBottom, viewStyles2('bottom')]}>
                <Image style={Style.profile} source={profile} />
                <View style={Style.textContainer}>
                    <Text style={Style.headerTitle}>{name}</Text>
                    <Text style={Style.text}>{category}</Text>
                </View>
            </Animated.View>
        </TouchableOpacity>
    )
}


export const DrawerItem = ({ label, onPress, tabBarTestID, type, icon, notification, color, activeItemColor }) => {
    return (<TouchableOpacity
        onPress={onPress}
        testID={tabBarTestID}
        accessibilityRole="button"
        style={[Style.drawerItem, Style.row, { backgroundColor: activeItemColor }]}>
        <View style={[Style.row]}>
            <Icon type={type} name={icon} {...{ color }} />
            <Text style={[Style.label, { color: color }]}>{label}</Text>
        </View>
        {notification > 0 &&
            <View style={[
                Style.notification,
                { backgroundColor: notification > 5 ? colors.important : colors.light }
            ]}>
                <Text style={Style.label}>{notification}</Text>
            </View>
        }

    </TouchableOpacity>)
}

export const Profile = ({ menuStyles, name, email, ProfileMenu }) => {
    return (
        <Animated.View style={[Style.view,
        { backgroundColor: colors.primary },
            menuStyles
        ]}>
            <Text>{name}</Text>
            <Text>{email}</Text>
            <View style={Style.separator} />
            {ProfileMenu.map((_, i) => (
                <ProfileItem key={i} label={_.label}
                    type={_.iconType}
                    name={_.icon}
                />
            ))}
            <Text style={{ marginTop: 10 }}>v1.0.0 - Terms & Condition</Text>
        </Animated.View>)
}

const ProfileItem = ({ label, onPress, type, name }) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[Style.row, { margin: constant.SPACING / 4 }]}>
            <Icon type={type} name={name} color={colors.dark} />
            <Text style={Style.label}>{label}</Text>
        </TouchableOpacity>
    )
}