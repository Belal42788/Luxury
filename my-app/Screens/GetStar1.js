import { StyleSheet, View, Text, Image, useWindowDimensions, TouchableOpacity, ImageBackground } from "react-native";
import React from "react";
import { ReactDOM } from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import Ionicons from "@expo/vector-icons/Ionicons"
import FontAwesome from "@expo/vector-icons/FontAwesome"
import { useFonts } from "expo-font";
//import { StatusBar } from "expo-status-bar";
import backgroundpic from "../assets/zachary-edmundson-ygqZpaNl_dM-unsplash - Copy.jpg"



function wellcome({ navigation }) {
    const { height } = useWindowDimensions();
    return (

        <ImageBackground source={require('../assets/Exclusive Luxury Car  (Instagram Post15).jpg')} style={styles.container}>
            <View style={styles.logocont}>
                <Text style={styles.logoText}><FontAwesome name="xing" size={"25px"} color="white" style={{}} /> Luxury</Text>
            </View>
            <View style={styles.topScreenView}>
            <Text style={styles.screenTopText}>Luxury Cars.</Text>
                <Text style={styles.screenTopText}>Enjoy the Permium</Text>
                
            </View>
            <View style={styles.bottomScreenView}>
            <Text style={styles.screenBottomText}>
                    Find a variety of the car of your dreams, at a good price and quality premium.
                </Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Get Start2')} >
                <Text style={styles.buttonText}>GET STARTED </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                <Text style={styles.skipButton}>Skip</Text>
            </TouchableOpacity>
            
            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
                <Text style={styles.signInButton}>Already have an account? SIGN IN</Text>
            </TouchableOpacity>
        </ImageBackground >
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: 3,
        backgroundColor: 'transparent',

    },
    logocont: {
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        width: "100%"
    },

    topScreenView: {
        flex:1,
        alignItems:'center',
        width: '100%',
        marginBottom:'100%'
    },

    bottomScreenView: {
        flex:1,
        alignItems:'center',
        textAlign:'center',
        width:'90%',
        paddingTop:'5%'
        // marginBottom: '1%'
    },

    button: {
        width: "90%",
        borderRadius: 18,
        // height: "8%",
        // marginBottom: "2%",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        backgroundColor: "#ce9e04",
        borderStyle: "solid",
        borderWidth: 2,
        borderColor: "black",
        display: "flex",
    },

    ico: {
        alignSelf: "flex-end",
        justifyContent: "flex-end",
        marginLeft: "5%",
        width: "100%",

    },
    buttonText: {
        color: "black",
        fontSize: "200%",
        fontWeight: "700",
        fontFamily: 'cairo',
        alignSelf: "center",

    },
    logoText: {
        color: "white",
        fontSize: "20px",
        fontWeight: "600",
        fontFamily: 'prompt',
        justifyContent:'center',
        alignSelf: "center",
        marginTop: "5%",
    },
    screenTopText: {
        color:'white',
        fontSize:'38px',
        fontWeight:'400',
        // marginTop:'5%',
        alignContent:'center'
    },
    screenBottomText:{
        color:'#d8d8d8',
        fontWeight:'400',
        fontSize: '16px',
        fontFamily: 'cairo',
        
    },
    signInButton: {
        marginBottom: "6%",
        // marginTop: "9%",
        textDecorationLine: "underline",
        fontSize: 16,
        color:'#d8d8d8',
        fontFamily: 'cairo'
    },
    skipButton: {
        marginBottom: "10%",
        textDecorationLine: "underline",
        fontSize: 20,
        color:'#d8d8d8',
        fontFamily: 'cairo',
        fontWeight:'bold'
    }
});

export default wellcome; 