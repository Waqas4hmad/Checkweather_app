import { StyleSheet } from "react-native";

export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 100,
    },

    textinput: {
        width: '90%',
        height: 40,
        borderWidth: 1,
        paddingLeft: 15,
        marginRight: 5
    },
    searchbutton: {
        borderRadius: '100%',
        margin: 1,

    },
    btn_footer: {
        flex: 1,
        alignItems: 'center',
        marginTop: 20,
    },
});
