import { ReactNode } from "react";
import { ViewStyle } from "react-native";
import { LinearGradientProps } from "react-native-linear-gradient";

type TBorderProps = Partial<Pick<ViewStyle, 
  | 'borderWidth'
  | 'borderRadius'
  | 'borderTopWidth'
  | 'borderLeftWidth'
  | 'borderRightWidth'
  | 'borderBottomWidth'
  | 'borderTopLeftRadius'
  | 'borderTopRightRadius'
  | 'borderBottomLeftRadius'
  | 'borderBottomRightRadius'
>>;

export type TGradientBorderProps = {
  children?: ReactNode;
  gradientProps: LinearGradientProps;
  style?: ViewStyle;
  contentStyle?: ViewStyle;
} & TBorderProps;