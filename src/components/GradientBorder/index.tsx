import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import { TGradientBorderProps } from './types';

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
}: TGradientBorderProps) => {
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