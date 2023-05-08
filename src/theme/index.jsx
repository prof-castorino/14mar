import { StyleSheet } from "react-native";
export const colors = {
  primary: '#60c5a8',
  primaryDark: '#039a83',
  normal: '#b0e6fd',
  important: '#e892ab',
  icon1: '#ea7a72',
  icon2: '#f8c907',
  icon3: '#82a7c9',
  icon4: '#c2c5d1',
  light: '#f0f0f0',
  gray: '#CCCCCC',
  darkGray: '#999999',
  dark: '#123',
  black: '#000',
  white: 'white',
  active: '#05294a99',
  sceneBg: '#04567f',
  screenBg: '#05294a',
  transparent: 'transparent'
}

export const constant = {
  SPACING: 16,
  borderRadius: 10,
  titleFontSize: 24,
  textFontSize: 16,
  subTextFontSize: 14,
}


export const Style = StyleSheet.create({
  constainer: {
    flex: 1
  },
  view: {
    backgroundColor: colors.white,
    borderRadius: constant.borderRadius,
    marginHorizontal: constant.SPACING / 2,
    padding: constant.SPACING
  },
  drawerStyles: {
    width: 260,
    backgroundColor: colors.transparent,
  },
  drawerItem: {
    padding: constant.SPACING / 2,
    justifyContent: 'space-between',
    borderRadius: constant.borderRadius,
  },
  profile: {
    marginVertical: constant.SPACING / 2,
    marginRight: constant.SPACING,
    marginLeft: constant.SPACING / 2,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: colors.light,
  },
  profileText: {
    color: colors.dark,
  },
  notification: {
    paddingHorizontal: constant.SPACING / 5,
    paddingVertical: constant.SPACING / 5,
    borderRadius: constant.borderRadius / 2,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontSize: constant.textFontSize,
    color: colors.dark,
    paddingHorizontal: constant.SPACING
  },
  headerTitle: {
    fontSize: constant.titleFontSize,
    color: colors.dark,
  },
  safeArea: {
    flex: 1,
    backgroundColor: colors.white
  },
  marginVertival: { marginVertical: constant.SPACING / 2 },
  marginTop: { marginTop: constant.SPACING * 2 },
  marginBottom: { marginBottom: constant.SPACING / 2 }
});

