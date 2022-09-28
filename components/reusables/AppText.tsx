import React from "react";
import { Text, View } from "react-native";
import { TEXTPROPS } from "../../constants/interface";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const AppText = ({
  title,
  width,
  color = "#333333",
  fontSize = wp(4),
  textAlign,
  fontFamily = "gilroy-regular",
  lineHeight = 18,
  style,
  alignItems,
  m,
  mv,
  mh,
  ml,
  mr,
  mt,
  mb,
  ...otherProps
}: TEXTPROPS) => {
  return (
    <View
      style={[
        otherProps,
        style,
        {
          alignItems: alignItems,
          margin: m,
          marginVertical: mv,
          marginHorizontal: mh,
          marginLeft: ml,
          marginRight: mr,
          marginTop: mt,
          marginBottom: mb,
          width: width,
          ...otherProps,
        },
      ]}
    >
      <Text
        style={[
          { ...otherProps.textStyle },
          {
            color: color,
            fontSize: fontSize,
            textAlign: textAlign,
            fontFamily: fontFamily,
            lineHeight: lineHeight,
            fontWeight: "600",
          },
        ]}
      >
        {title}
      </Text>
    </View>
  );
};

export default AppText;
