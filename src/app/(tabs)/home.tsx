import { auth } from "@/config/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import { useEffect, useState } from "react";
import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";


export default function Home(){

    const [user, setUser] = useState<User | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect (() => {
        // Ecouter etat du connexion

        const unsubcribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        })

        return unsubcribe;
    },[]);

    if(loading){
        return(
            <View style = {style.loading}>
                <ActivityIndicator size="large" color="#2563EB"/>
                <Text>Chargement...</Text>
            </View>
        )
    }

    if (!user){
        return(
            <View style = {style.container}>
                <Text>Aucun utilisateur connecté</Text>
            </View>
        )
    }

    return(
        <View style = {style.container}>
            {/* Header */}
            <View style = {style.header}>
                <View>
                    <Text style = {style.smallText}>Bonjour {user.displayName || "Utilisateurs"}</Text>
                    <Text style = {style.title}>MYDOCTOR  {user.email}</Text>
                </View>

                {user.photoURL?(<Image source={{uri: user.photoURL}} style = {style.profileImage}/>):(
                    <Text>Pas de photo</Text>
                )}

            </View>


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

    header : {
        flexDirection : "row",
        justifyContent : "space-between",
        alignItems: "center",
        marginTop : 40,
        marginBottom: 30
    },

    smallText :{
        fontSize : 16,
        color : "#777"
    },

    profileImage : {
        width : 65,
        height : 65,
        borderRadius : 35
    },

    defaultAvatar :{
        width : 65,
        height : 65,
        borderRadius : 35,
        backgroundColor : "#2563EB",
        justifyContent : "center",
        alignItems: "center"
    },

    avatarText : {
        fontSize: 28,
        color: "white",
        fontWeight: "bold"
    },

    text : {
        fontSize : 16,
        color: "#888",
        marginTop: 10
    },

    loading: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20
    }
    
})