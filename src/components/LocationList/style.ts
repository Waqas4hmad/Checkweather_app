import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        position: 'absolute',
        zIndex: 1,
        flex: 1,
        width: '90%',
        marginTop: 50,
        flexDirection: 'column',
        borderRadius: 20,
        backgroundColor: '#fff'
    },
    list: {
        flexDirection: 'row',
        alignItems: 'center',
        margin: 5,
        padding: 3,
        paddingLeft: 4,
        paddingRight: 4
    },
    textinput: {
        width: '90%',
        height: 40,
        borderColor: 'black',
        borderWidth: 1,
        paddingLeft: 15,
        marginRight: 5
    },
    searchbutton: {
        borderRadius: '100%',
        margin: 1,

    },
    stretch: {
        width: 50,
        height: 200,
        resizeMode: 'stretch',
    },
    btn_footer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20,
    },
    text: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16,
        marginLeft: 5

    }
});
