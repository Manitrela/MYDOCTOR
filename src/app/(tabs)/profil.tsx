import { StyleSheet, Text, View } from "react-native";

export default function Profil(){
    return(
            <View style = {style.container}>
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