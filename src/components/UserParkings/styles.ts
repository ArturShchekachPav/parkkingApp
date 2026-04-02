import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 24,
  },
  wrapper: {
    padding: 20,
    gap: 16,
  },
  header: {
    flexDirection: 'row',
    gap: 16,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  title: {
    fontFamily: 'Inter',
    fontWeight: 600,
    fontSize: 18
  },
  linkIcon: {
    width: 16,
    height: 16
  },
  info: {
    borderRadius: 16,
    backgroundColor: '#EAEDF3',
    position: 'relative'
  },
  infoWrapper: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 12,
    paddingVertical: 8
  },
  carInfo: {
    flexDirection: 'row',
    gap: 4,
    alignItems: 'center',
    zIndex: 1,
    position: 'relative'
  },
  text: {
    fontFamily: 'Inter',
    fontSize: 12
  },
  primaryText: {
    color: '#132351',
    fontWeight: 500
  },
  secondaryText: {
    color: '#8A8E9E',
    fontWeight: 400
  },
  invertedText: {
    color: '#FFFFFF',
    fontWeight: 500
  },
  carIcon: {
    width: 16,
    height: 16
  },
  parkingTimeInfo: {
    alignItems: 'flex-end',
    zIndex: 1,
    position: 'relative'
  },
  progress: {
    borderRadius: 16,
    width: '35%',
    height: '100%',
    position: 'absolute'
  },
  buttons: {
    flexDirection: 'row',
    gap: 8
  },
  button: {
    flex: 1,
    borderRadius: 20,
  },
  primaryButton: {
    backgroundColor: '#132351'
  },
  secondaryButton: {
    backgroundColor: '#EDF5FF'
  },
  buttonWrapper: {
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 8,
  },
  buttonIcon: {
    height: 16,
    width: 16
  }
});