import React, { ReactNode } from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

type GradientProps = {
  colors: string[];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
  locations?: number[];
  useAngle?: boolean;
  angle?: number;
  angleCenter?: { x: number; y: number };
};

type BorderProps = {
  borderWidth?: number;
  borderRadius?: number;
  borderTopWidth?: number;
  borderLeftWidth?: number;
  borderRightWidth?: number;
  borderBottomWidth?: number;
  borderTopLeftRadius?: number;
  borderTopRightRadius?: number;
  borderBottomLeftRadius?: number;
  borderBottomRightRadius?: number;
};

type GradientBorderProps = {
  children?: ReactNode;
  gradientProps: GradientProps;
  style?: ViewStyle;
  contentStyle?: ViewStyle;
} & BorderProps;

const GradientBorder = ({
  children,
  gradientProps,
  borderWidth = 0,
  borderRadius = 0,
  borderTopRightRadius,
  borderTopLeftRadius,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  borderTopWidth,
  borderLeftWidth,
  borderRightWidth,
  borderBottomWidth,
  style,
  contentStyle,
}: GradientBorderProps) => {
  return (
    <View style={[styles.container, style]}>
      <MaskedView
        maskElement={
          <View
            style={[
              {
                borderWidth,
                borderRadius,
                borderTopLeftRadius,
                borderTopRightRadius,
                borderBottomLeftRadius,
                borderBottomRightRadius,
                borderTopWidth,
                borderLeftWidth,
                borderRightWidth,
                borderBottomWidth,
                borderColor: 'white',
              },
              StyleSheet.absoluteFill,
            ]}
            collapsable={false}
          />
        }
        style={StyleSheet.absoluteFill}
      >
        <LinearGradient
          style={StyleSheet.absoluteFill}
          {...gradientProps}
        />
      </MaskedView>
      
      <View style={[styles.content, contentStyle]}>
        {children}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  content: {
    backgroundColor: 'transparent',
  },
});

export default GradientBorder;