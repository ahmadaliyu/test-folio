import React from "react";
import { View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import Colors from "../../constants/Colors";
import { TEXTINPUTPROPS } from "../../constants/interface";
import AppSvg from "./AppSvg";
import AppText from "./AppText";

const AppInput = ({
  iconName,
  smallBtn,
  onPressSmallBtn,
  rightIcon,
  placeholderTextColor = "#C4C4C4",
  textAlign,
  alignSelf,
  textWidth = "75%",
  width = "90%",
  height,
  style,
  mv,
  ml,
  mr,
  mb,
  mt,
  m,
  pv,
  ML,
  rIconWidth = 25,
  rIconHeight = 25,
  marginHorizontal,
  onPressRightIcon,
  textSize = 16,
  fontFamily,
  styley,
  placeholder,
  keyboardType = "default",
  value,
  onChangeText,
  onFocus,
  ...otherProps
}: TEXTINPUTPROPS) => {
  return (
    <>
      <View
        style={[
          styles.textInput,
          style,
          {
            width,
            height,
            margin: m,
            marginHorizontal,
            marginVertical: mv,
            marginLeft: ml,
            marginRight: mr,
            marginBottom: mb,
            marginTop: mt,
            paddingVertical: pv,
            alignSelf: alignSelf,
            ...otherProps,
          },
        ]}
      >
        {iconName && (
          <AppSvg svgName={iconName} style={[styles.icon, styley]} />
        )}
        <TextInput
          placeholderTextColor={placeholderTextColor}
          placeholder={placeholder}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          onFocus={onFocus}
          value={value}
          style={[
            styles.inputName,
            {
              fontSize: textSize,
              width: textWidth,
              fontFamily: fontFamily,
              marginLeft: ML,
            },
          ]}
          {...otherProps}
        />
        {smallBtn && (
          <View style={{ marginLeft: "-15%" }}>{smallBtn}</View>

          // <AppButton
          //   onPress={onPressSmallBtn}
          //   title="All"
          //   color="grey"
          //   width="18%"
          //   mt="4.5%"
          // />
        )}
        {rightIcon && (
          <TouchableOpacity
            style={{ marginLeft: "15%" }}
            onPress={onPressRightIcon}
            activeOpacity={0.8}
          >
            <AppSvg
              svgName={rightIcon}
              height={rIconWidth}
              width={rIconHeight}
            />
          </TouchableOpacity>
        )}
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  textInput: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: Colors.default,
    padding: "2%",
    borderRadius: 6,
    borderColor: "#B5B5B5",
    borderWidth: 1,
  },
  icon: {
    marginHorizontal: "5%",
    marginLeft: "2%",
  },
  inputName: {
    // width: '100%',
    fontFamily: "gilroy-regular",
    fontSize: 16,
    color: "#333",
  },
});

export default AppInput;
