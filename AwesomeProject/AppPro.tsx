import React from 'react'
import {
    ScrollView, 
    Text, 
    View, 
    StyleSheet,
    useColorScheme,
    Appearance,
    Button
} from "react-native";

const styles = StyleSheet.create({
    container : {
        flex:1,
        alignItems:"center",
        justifyContent:"center",
        gap:40,
        fontSize: 20,
    },
    lightMode : {
        fontSize: 30,
        fontWeight:"100",
        color:"white"
    },  
    darkMode : {
        fontSize: 30,
        fontWeight:"100",
        color:"red"
    }
})

const AppPro = ():JSX.Element => {

    const colorScheme = useColorScheme();

   return (
    <View style={styles.container}>
        <Text style={colorScheme === "dark" ? styles.darkMode : styles.lightMode }>
            Hello People
        </Text>
        <Button
            title={`${colorScheme} Mode`}
            onPress={()=>{
                if(colorScheme === "dark") {Appearance.setColorScheme("light")}else{
                    Appearance.setColorScheme("dark")
                }
            }}
        ></Button>


    </View>

   ) 
}

export default AppPro;