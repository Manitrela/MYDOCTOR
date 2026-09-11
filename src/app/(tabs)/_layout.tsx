import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";

export default function TabsLayout(){
    return(
        <Tabs screenOptions={{
            headerShown:false,
            tabBarActiveTintColor: "#2563EB",
            tabBarInactiveTintColor: "#777",

            tabBarStyle : {
                height: 100,
                paddingBottom: 20,
                paddingTop: 8
            },

            tabBarLabelStyle : {
                fontSize: 12
            }
        }}>
            {/* Home */}
            <Tabs.Screen
                name="home"
                options={{
                    title:"Accueil",
                    tabBarIcon:({color, size}) => (
                        <Ionicons 
                            name="home"
                            size = {size}
                            color= {color}
                        />
                    ),
                }}
            />

            {/* Doctor */}
            <Tabs.Screen
                name="doctor"
                options={{
                    title:"Doctor",
                    tabBarIcon:({color, size}) => (
                        <Ionicons 
                            name = "medkit"
                            size = {size}
                            color= {color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="rdv"
                options={{
                    title:"Rdv",
                    tabBarIcon:({color, size}) => (
                        <Ionicons 
                            name="calendar"
                            size = {size}
                            color= {color}
                        />
                    ),
                }}
            />
            <Tabs.Screen
                name="profil"
                options={{
                    title:"Profil",
                    tabBarIcon:({color, size}) => (
                        <Ionicons 
                            name="person"
                            size = {size}
                            color= {color}
                        />
                    ),
                }}
            />
        </Tabs>
    )
}