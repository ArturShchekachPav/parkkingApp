import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        paddingHorizontal: 20,
        paddingTop: 16,
        paddingBottom: 32,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#FFFFFF',
        boxShadow: '0px 0px 20px 0px #00000040'
    },
    navItem: {
        gap: 5,
        flex: 1,
        alignItems: 'center',
    },
    icon: {
        width: 24,
        height: 24
    },
    text: {
        fontFamily: 'Inter',
        fontSize: 10,
        color: '#8A8E9E'
    },
    active: {
        color: '#116ADF',
    }
});