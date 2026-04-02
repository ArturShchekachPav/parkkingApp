import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: 16,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  button: {
    borderRadius: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  profileButtonWrapper: {
    paddingVertical: 8,
    paddingLeft: 8,
    paddingRight: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  profileButtonText: {
    fontFamily: 'Inter Regular',
    fontWeight: 500,
    fontSize: 16,
    color: '#132351'
  },
  profileIconContainer: {
    width: 40,
    height: 40,
    backgroundColor: '#FFF',
    borderRadius: '50%',
  },
  profileIcon: {
    width: 16,
    height: 16,
    margin: 'auto'
  },
  infoButtonWrapper: {
    width: 40,
    height: 40,
  },
  infoIcon: {
    width: 16,
    height: 16,
    margin: 'auto'
  }
});