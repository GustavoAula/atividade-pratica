import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#F2F2F2",
    },
    top:{
        width:"100%",
        height:173,
        backgroundColor:"#7A4A9E",
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtTop:{
        color: "#F2F2F2",
        textAlign: "center",
        fontSize: 18,
        fontWeight: "700",
        lineHeight: 25.2,
    },meio: {
        paddingHorizontal: 24,
        backgroundColor: '#f2f2f2',
        alignItems: 'center',
        paddingTop: 8,
        paddingBottom: 8,
    },

    form: {
        flexDirection: 'row',
        marginTop: -35,
        width: "100%",
    },

    input: {
        flex: 1,
        backgroundColor :'#f2f2f2',
        borderRadius:6,
        borderWidth: 0.5,
        borderColor:'#808080',
        padding: 16,
        marginRight: 4
    },
        button: {
        width: 52,
        height: 52,
        justifyContent: 'center',
        alignItems:'center',
        backgroundColor:'#31C667',
        borderRadius:6,
    },
  });