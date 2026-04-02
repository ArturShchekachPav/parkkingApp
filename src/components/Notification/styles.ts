import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    overflow: 'hidden',
    position: 'relative'
  },
  blur: {
    zIndex: 0,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  wrapper: {
    padding: 8,
    gap: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  indicator: {
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 12
  },
  indicatorWrapper: {
    width: 40,
    height: 40,
    display: 'flex',
  },
  text: {
    color: '#ffffff',
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: 12,
    flex: 1
  }
});