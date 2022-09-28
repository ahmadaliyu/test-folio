import { Combinable } from "../types";

export interface TEXTPROPS {
  title: string;
  color?: string;
  fontSize?: number;
  textAlign?: string;
  width?: Combinable;
  m?: Combinable;
  mv?: Combinable;
  mh?: Combinable;
  ml?: Combinable;
  mr?: Combinable;
  mt?: Combinable;
  mb?: Combinable;
  style?: any;
  fontFamily?: string;
  lineHeight?: number;
  alignItems?: string;
  textStyle?: any;
  otherProps?: any;
}

export interface BUTTONPROPS {
  title?: string;
  onPress?: () => void;
  color?: string;
  textColor?: string;
  borderColor?: string;
  borderWidth?: Combinable;
  width?: Combinable;
  height?: Combinable;
  fontSize?: number;
  mr?: Combinable;
  ml?: Combinable;
  mt?: Combinable;
  mb?: Combinable;
  mv?: Combinable;
  pv?: Combinable;
  ph?: Combinable;
  size?: Combinable;
  style?: any;
  styleV?: any;
  iconName?: any;
  innerIcon?: string;
  iconHeight?: number;
  iconWidth?: number;
  indicator?: any;
  borderRadius?: number;
  alignSelf?: string;
  fontFamily?: string;
}

export interface TEXTINPUTPROPS {
  iconName?: string;
  smallBtn?: any;
  onPressSmallBtn?: () => void;
  rightIcon?: any;
  placeholderTextColor?: string;
  textAlign?: string;
  alignSelf?: string;
  textWidth?: Combinable;
  width?: Combinable;
  height?: Combinable;
  style?: any;
  mv?: Combinable;
  ml?: Combinable;
  mr?: Combinable;
  mb?: Combinable;
  mt?: Combinable;
  m?: Combinable;
  pv?: Combinable;
  ML?: Combinable;
  rIconWidth?: number;
  rIconHeight?: number;
  marginHorizontal?: Combinable;
  onPressRightIcon?: any;
  textSize?: number;
  fontFamily?: string;
  keyboardType?: any;
  styley?: any;
  placeholder?: string;
  value?: any;
  onChangeText?: (text: string) => void;
  onFocus?: () => void;
  otherProps?: any;
}
