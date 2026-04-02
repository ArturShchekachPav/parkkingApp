import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    gap: 16,
  },
  slide: {
    flexDirection: 'row',
    gap: 16,
    marginRight: 20
  },
  image: {
    width: 108,
    borderRadius: 16
  },
  content: {
    flex: 1,
    gap: 16,
  },
  link: {
    flexDirection: 'row',
    gap: 8,
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 16,
    backgroundColor: '#EAEDF3',
    alignSelf: 'flex-start'
  },
  linkText: {
    fontFamily: 'Inter',
    fontWeight: 400,
    fontSize: 12,
    color: '#132351'
  },
  linkIcon: {
    width: 10,
    height: 10
  },
  info: {
    gap: 4
  },
  pubDate: {
    fontFamily: 'Inter',
    fontWeight: 400,
    fontSize: 10,
    color: '#8A8E9E'
  },
  text: {
    fontFamily: 'Inter',
    fontWeight: 500,
    fontSize: 12,
    color: '#132351'
  },
  dots: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 3
  },
  dot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#DFE2E8'
  },
  activeDot: {
    width: 12,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#8A8E9E'
  }
});