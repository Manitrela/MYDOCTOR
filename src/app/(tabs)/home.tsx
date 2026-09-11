import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function Home(){
    return(
        <View style = {style.container}>
            <Pressable onPress={() => {router.replace("/")} }>
                <Text>Deconnecter</Text>
            </Pressable>
            <Text style = {style.title}>
                Bienvenue sur MYDOCTOR
            </Text>

            <Text style = {style.text}>
                Accueil
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F5F9FF"
    },

    title: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#444"
    },

    text : {
        fontSize : 16,
        color: "#888",
        marginTop: 10
    }
    
})