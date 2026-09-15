 import { StyleSheet } from "react-native";

 export const commonStyle = StyleSheet.create({
    btnQuitter : {
        backgroundColor : "red",
        paddingVertical: 12,
        paddingHorizontal:20,
        borderRadius:15,
        marginBottom:15,
        alignItems:"center",
        width: 100
    },

    btnAjouter: {
        width: 135,
        height: 45,
        backgroundColor : "#16A085",
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center",
        elevation: 4,
    },

    btnAjouterTxt: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "bold",
    },
    btnText : {
        color: "#fff",
        fontWeight: "bold"
    },
    input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#D0D7E2",
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: "#FFFFFF",
    marginBottom: 20,
    fontSize: 16,
    width: "90%",
    color: "#222"
  },
 })