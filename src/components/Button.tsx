import { Pressable } from "react-native";


interface ButtonProps {
    title:string;
    loading?: boolean;
    onPress: () => void;
}

export function Button({title,loading = false, onPress}: ButtonProps){

    return(
        <Pressable 
            onPress={onPress}
            disabled={loading}>

        </Pressable>
    )
}