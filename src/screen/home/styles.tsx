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
    contadores: {
        flexDirection: "row",
        width: "100%",
        justifyContent: "space-between",
        marginTop: 34, 
        paddingHorizontal: 24,
    },

    contadoresBox: {
        flexDirection: "row",
        alignItems: "center",
    },

    contadorProdutos:{
        paddingVertical: 2,
        paddingHorizontal: 8,
        borderRadius: 999,
        backgroundColor: "#D9D9D9",
        fontWeight: "700",
        fontSize: 12,
        color: "#333",
    },
    produtos:{
        color: '#31C667',
        fontWeight: '700',
        fontSize: 14,
        marginRight: 8,
    },
    finalizados: {
        color: '#7A4A9E',
        fontWeight: '700',
        fontSize: 14,
        marginRight: 8,
    },
    baixo: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        paddingHorizontal: 24,   
        alignItems: 'stretch',
        justifyContent: 'flex-start',
    },

    txtListaVazia1: {
        color: '#808080',
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 19.6
    },
    txtListaVazia2: {
        color: '#808080',
        textAlign: 'center',
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 19.6
    },

    imagemLista:{
        marginTop: 48,
        marginBottom: 16,
        width: 56,
        height: 56
    },

    listaVazia:{
        width: '100%',
        justifyContent: "center",
        alignItems: "center",
        marginTop: 21,
        borderTopWidth:1,
        borderTopColor:"#D9D9D9",
        paddingVertical: 24,
    }
  });