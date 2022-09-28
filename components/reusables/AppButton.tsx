import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Colors from "../../constants/Colors";
import { BUTTONPROPS } from "../../constants/interface";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import AppSvg from "./AppSvg";

const AppButton = ({
  title,
  onPress,
  color = "#583D6F",
  textColor = "#fff",
  borderColor,
  borderWidth,
  width = "85%",
  height,
  fontSize = wp(4),
  mr,
  ml,
  mt,
  mb,
  mv = "4%",
  pv = "3%",
  ph,
  size,
  style,
  styleV,
  iconName,
  innerIcon,
  iconHeight = 15,
  iconWidth = 15,
  indicator,
  borderRadius = 5,
  alignSelf = "center",
  fontFamily = "gilroy-semiBold",
  ...otherprops
}: BUTTONPROPS) => {
  return (
    <TouchableOpacity
      activeOpacity={0.4}
      {...otherprops}
      style={[
        styles.button,
        styleV,
        {
          backgroundColor: color,
          borderColor: borderColor,
          borderWidth,
          borderRadius: borderRadius,
          width: width,
          height: height,
          alignSelf: alignSelf,
          paddingVertical: pv,
          marginLeft: ml,
          marginRight: mr,
          marginTop: mt,
          marginBottom: mb,
          marginVertical: mv,
        },
      ]}
      onPress={onPress}
    >
      {innerIcon && <View>{innerIcon}</View>}
      {iconName ? (
        <AppSvg svgName={iconName} width={iconWidth} height={iconHeight} />
      ) : indicator ? (
        <View>{indicator}</View>
      ) : (
        <Text
          style={[
            styles.eText,
            {
              fontSize: fontSize,
              color: textColor,
              fontFamily,
            },
            style,
          ]}
        >
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    // marginVertical: "5%",
  },

  eText: {
    fontFamily: "gilroy-semiBold",
    color: Colors.default,
    lineHeight: 20,
  },
});

export default AppButton;
