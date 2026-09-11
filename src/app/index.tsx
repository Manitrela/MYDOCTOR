import { router } from "expo-router";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import { auth } from "../config/firebase";

export default function Login(){

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsregister] = useState(false);

  async function handleLoginRegister(){
        if (email === "" || password === ""){
            Alert.alert("Erreur ,  veuillez remplir tous les champs ");
            return;
        }

        // CREATION DU COMPTE

        if (isRegister){
          // Creer l'utilisateur

          try {

            await createUserWithEmailAndPassword(
              auth,
              email,
              password
            );

            // Si email et password existe et n'a pas encore un compte.
            Alert.alert("Succés, Votre compte a été créer ")
            router.replace("/home");
          }catch(error:any){
            if(error.code === "auth/email-already-in-use"){
              Alert.alert("Erreur, Cette mail a déja un compte !");
            }
            else if (error.code === "auth/invalid-email"){
              Alert.alert("Erreur, Cette mail n'est pas valide !");
            }

            else{
              Alert.alert("Erreur, Impossible de créer le compte !");
            }
          }

        // CONNEXION

        }else{
          
          try{
            await signInWithEmailAndPassword(
              auth,
              email,
              password
            );

            router.replace("/home");
          }catch(error:any){

            if(error.code === "auth/invalid-credential"){
              Alert.alert("Erreur, Mail ou mot de passe incorrect !")
            }
            else{
              Alert.alert("Erreur, Une erreur est survenue !")
            }
          }
        }


        
    }

  function rafraichir(){
    setEmail("");
    setPassword("");
  }
    return(
        <View style={style.container}>
          {isRegister?
            <Text style = {style.title}>
              Register
            </Text>:
            <Text style = {style.title}>
              Login
            </Text>
          }
            
            

            <Text style = {style.label}>
              Email
            </Text>
            <TextInput 
              placeholder="email" 
              placeholderTextColor= "#999"
              keyboardType = "email-address"
              value={email} 
              autoCapitalize="none"
              onChangeText={setEmail} 
              style = {style.input}
            />
            
            <Text style = {style.label}>
              Password
            </Text>
            <TextInput 
              placeholder="Mot de passe"
              placeholderTextColor= "#999"
              secureTextEntry = {true} 
              value={password} 
              onChangeText={setPassword} 
              style = {style.input}
            />


            <Pressable onPress={handleLoginRegister} style = {style.button}>
              {isRegister?
                <Text style = {style.buttonText}> S'iscrire </Text> :
                <Text style = {style.buttonText}> Se connecter </Text>}
              
            </Pressable>

            <Pressable onPress={() => {setIsregister(!isRegister); rafraichir()}}>
              {isRegister?<Text style = {style.isregister}> Deja un compte ?</Text> : <Text style = {style.isregister}>Pas encore un compte ?</Text>}
            </Pressable>
            
        </View>
    )
}

const style = StyleSheet.create({


  container:{
    flex:1,
    justifyContent: 'center',
    paddingHorizontal: 25,
    backgroundColor :"#F5F9FF"
  },

  title : {
    fontSize: 32,
    fontWeight: "bold",
    textAlign: "center",
    color: "#2563EB",
    marginBottom: 32
  },

  subTitle : {
    fontSize: 22,
    fontWeight: 600,
    textAlign: "center",
    marginBottom: 8,
    color: "#333"
  },

  label:{
    fontSize: 16,
    fontWeight: 600,
    marginBottom: 8,
    color : "#333"
  },

  input: {
    height: 50,
    borderWidth: 1,
    borderColor: "#D0D7E2",
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: "#FFFFFF",
    marginBottom: 20,
    fontSize: 16
  },

  button : {
    height: 50,
    backgroundColor: "#2563EB",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
  },

  buttonText : {
    color:"#FFFFFF",
    fontSize: 17,
    fontWeight: "bold"
  },

  isregister : {
    color: "#7195e2",
    marginTop: 10
  }
  
})