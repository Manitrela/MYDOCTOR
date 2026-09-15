import { Alert, FlatList, Modal, Pressable, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import { doctors } from "@/services/doctor";
import { commonStyle } from "@/styles/communStyle";
import { useState } from "react";

export default function doctor(){


    const [modalVisible, setModalVisible] = useState(false);
    const [modalAjoutDoctor, setModalAjoutDoctor] = useState(false);
    const [selectedDoctor, setSelectedDoctor] = useState<any>(null);
    const [recherche, setRecherche] = useState("");
    const [nouvDoctor, setNouvDoctor] = useState({
        id:"",
        nom:"",
        telephone: "",
        specialite:"",
        horaire:[]
    });
    const [docteurs, setDocteurs] = useState(doctors);

    const voirCreneau = (doctor:any) => {
        setSelectedDoctor(doctor);
        setModalVisible(true);
    }

    const ajouterDoctor = () => {
        setModalAjoutDoctor(true);
    }

    const rafraichir = () => {
        setNouvDoctor({
            id:"",
        nom:"",
        telephone: "",
        specialite:"",
        horaire:[]
        });
    }

    const handleAjout = () => {
        if (nouvDoctor.nom === "" || 
            nouvDoctor.specialite === "" ||
            nouvDoctor.telephone === ""
        ){
            Alert.alert("Veuillez remplir tous les champs !");  
            return;  
        }
        const doc = {
            ...nouvDoctor,
            id:Date.now().toString()
        };

        setDocteurs([...docteurs,doc]);
        Alert.alert("Nouvelle docteur ajouter!");
        rafraichir();
        setModalAjoutDoctor(false);
        
    }

    const docteurFiltre = docteurs.filter((d) => {
        const txt = recherche.toLowerCase();

        return(
            d.nom.toLowerCase().includes(txt) || d.specialite.toLowerCase().includes(txt)
        );
    })

    return(
            <View style = {style.container}>

                <View style = {style.header}>

                    <View style = {style.header1}>
                        <Text style = {style.title}>
                            Les docteurs
                        </Text>

                        <Pressable style = {commonStyle.btnAjouter} onPress={() => ajouterDoctor()}>
                            <Text style = {commonStyle.btnAjouterTxt}>
                                + Ajouter
                            </Text>
                        </Pressable>
                    </View>

                </View>

                <View style = {style.searchContainer}>
                    <TextInput style = {commonStyle.input} placeholder="Rechercher..." value={recherche} onChangeText = {setRecherche}/>
                </View>

                

                
                <FlatList 
                    data={docteurFiltre}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => (
                        <View style = {style.doctorCard}>
                            <View>
                                <Text style = {style.text}>
                                    Specialite : {item.specialite}
                                </Text>
                                <Text style = {style.text}>
                                    Nom : {item.nom}
                                </Text>
                                <Text style = {style.text}>
                                    Telephone : {item.telephone}
                                </Text>

                            </View>
                            
                            <View>
                                <Pressable style = {commonStyle.btnQuitter} onPress={() => {voirCreneau(item)}}>
                                    <Text style = {commonStyle.btnText}>
                                        Voir creneau
                                    </Text>
                                </Pressable>
                            </View>
                            
                        </View>
                    )}>

                </FlatList>
                
                {/* Modal voir creneau*/}
                <Modal 
                    visible= {modalVisible}
                    transparent={true}
                    animationType="slide"
                    onRequestClose={() => setModalVisible(false)}
                >
                    <View style = {style.overlay}>
                        <View style = {style.modal}>
                            <TouchableOpacity onPress={() => setModalVisible(false)} style = {commonStyle.btnQuitter}>
                                <Text style = {commonStyle.btnText}>Quitter</Text>
                            </TouchableOpacity>

                            <Text>
                                {selectedDoctor.nom}
                                {selectedDoctor.specialite}
                            </Text>

                            
                            
                            
                        </View>
                    </View>
                    
                </Modal>

                <Modal 
                    visible= {modalAjoutDoctor}
                    transparent={true}
                    animationType="slide"
                    onRequestClose={() => setModalAjoutDoctor(false)}
                >
                    <View style = {style.overlay}>
                        <View style = {style.modal}>
                            <TouchableOpacity onPress={() => setModalAjoutDoctor(false)} style = {commonStyle.btnQuitter}>
                                <Text style = {commonStyle.btnText}>X</Text>
                            </TouchableOpacity>

                            <View style = {style.ajouForm}>
                                <Text style = {style.title}>
                                    Ajouter un docteur
                                </Text>

                                <TextInput placeholder="nom" style = {commonStyle.input} value = {nouvDoctor.nom} onChangeText={(texte) => setNouvDoctor({...nouvDoctor,nom:texte})}/>
                                <TextInput placeholder="specialite" style = {commonStyle.input} value = {nouvDoctor.specialite} onChangeText={(texte) => setNouvDoctor({...nouvDoctor,specialite:texte})}/>
                                <TextInput placeholder="telephone" style = {commonStyle.input} value = {nouvDoctor.telephone} onChangeText={(texte) => setNouvDoctor({...nouvDoctor,telephone:texte})}/>
                                <TouchableOpacity  style = {commonStyle.btnQuitter} onPress={handleAjout}>
                                    <Text style = {commonStyle.btnText}>Ajouter</Text>
                                </TouchableOpacity>
                            </View>
                            
                        </View>
                    </View>
                    
                </Modal>

                    
            </View>
        )
    }
    
    const style = StyleSheet.create({
        container:{
            flex: 1,
            justifyContent: "center",
            backgroundColor: "#0c3572"
        },

        header : {
            height : 100,
            flexShrink:0,
            justifyContent: "center",
            alignItems:"center",
            paddingHorizontal: 30,
            width : "100%",
            marginTop: 80,
            flexDirection: "column",
        },

        header1 : {
            flex:1,
            alignItems: "center",
            justifyContent : "center",
            gap: 30,
            flexDirection: "row",
            marginTop: 30,
            backgroundColor: "transparent",
            paddingHorizontal: 100
        },

        searchContainer : {
            width: "100%",
            paddingHorizontal : 35,
            marginTop: 15,
            marginBottom: 20,
            flexShrink:0,
        },
    
        title: {
            fontSize: 20,
            fontWeight: "bold",
            color: "#fff"
        },
    
        text : {
            fontSize : 16,
            color: "#888",
            marginTop: 10
        },

        doctorCard : {
            flex : 1,
            flexDirection: "row",
            backgroundColor : "#fff",
            padding: 35,
            marginBottom: 10,
            marginTop: 10,
            borderRadius:12,
            justifyContent: "center",
            alignItems: "center",
            marginHorizontal: 30,
            boxShadow: "0 0 1 1 black",
            gap: 20
        },

        button : {
            backgroundColor : "#567",
            padding: 10,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 10,
            marginTop: 10
        },

        overlay : {
            flex:1,
            backgroundColor: "rgba(0,0,0,0.5)",
            justifyContent:"center",
            alignItems:"center"
        },

        modal:{
            width: "88%",
            backgroundColor:"#fff",
            borderRadius:20,
            padding:20,
            elevation:10,
            justifyContent :"center",
            alignItems: "center"
        },

        ajouForm: {
            backgroundColor: "#999",
            margin: 30,
            padding: 30,
            borderRadius: 10,
            gap: 20,
            width: "100%",
            alignItems: "center",
            justifyContent: "center"
        },

        creneau: {
            paddingHorizontal: 40,
            backgroundColor: "#153D4C",
            width : "100%"
        },

        miniCreneau:{
            backgroundColor: "#fff",
        }
        
    })
