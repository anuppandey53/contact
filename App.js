import React, { useState } from "react";
import { Text, View, Button, TextInput, StyleSheet, TouchableOpacity, Alert} from 'react-native';

const Contact = () =>{

    const[name, setName]= useState("");
    const[email, setEmail]= useState("");
    const[phone, setPhone]= useState("");
    const[message, setMessage]= useState("");


    const submit = () => {
        if(!name && !email && !phone && !message ) {
          Alert.alert("Please fill all fields");
        }
          else
          {
            Alert.alert('Thank You ${name}');
        }
    };



  return (
      <View style={ StyleSheet.mainContainer}> 
      <Text style={styles.mainHeader}>Contact us </Text>

      <Text style={styles.description}> How can we help you ? </Text>

      <View style={styles.inputContainer}>

          <Text style={styles.labels}> Your name </Text>
          <TextInput style={styles.inputStyle} placeholder = {"Your name"}
             value={ name }
              onChangeText={(userdata) => setName(userdata) }
          />

      </View>
      <View style={styles.inputContainer}>

          <Text style={styles.labels}> Your Email </Text>
          <TextInput style={styles.inputStyle} placeholder = {"eg. abc@email.com"}
             value={ email }
             onChangeText={(userdata) => setEmail(userdata) }
          />

      </View>
      <View style={styles.inputContainer}>

          <Text style={styles.labels}> Your Phone </Text>
          <TextInput style={styles.inputStyle} placeholder = {"eg. 9842693278"}
             value={ phone }
             onChangeText={(userdata) => setPhone(userdata) }
          />

      </View>


      <View style={styles.inputContainer}>

          <Text style={styles.labels}> Message </Text>
          <TextInput style={[styles.inputStyle, styles.multilineStyles]} placeholder = {"Tell us about your self"}
             value={ message }
             onChangeText={(userdata) => setMessage(userdata) }
              numberOfLines={5}
              multiline={true} 
          />

      </View>

        <TouchableOpacity
          style={[styles.buttonStyle,
            {
              backgroundColor:"grey",

          },
          
        ]}
        onPress={submit}>
        

          <Text style={styles.buttonText}>Send </Text>
          </TouchableOpacity>  
      
      </View>
  );
};

const styles = StyleSheet.create({
  mainContainer:{
      height : "100%",
      paddingHorizontal: 30,
      backgroundColor: "#white",
  },
  mainHeader: {
      fontSize : 40,
      color: "black",
      fontWeight: "500",
      paddingTop: 20,
      paddingBottom: 7,
      textTransform: "capitalize",
  },
  description: {
      fontSize: 20,
      color: "black",
      paddingBottom:20,
      lineHeight: 25,

  },

  inputContainer: {
      marginTop: 20,
      paddingHorizontal:10,
  },
  labels: {
      fontWeight: "bold",
      color: "black",
      paddingBottom: 5,
      LineHeight: 25
  },

  inputStyle: {
      borderWidth: 1,
      borderColor: "black",
      paddingHorizontal: 15,
      borderRadius: 2,
  },
  multilineStyle: {
      paddingVertical: 4,
  },
  buttonStyle: {
    borderRadius: 25,
    paddingVertical:15,
    paddingHorizontal:200,
    display: "flex",
    justifyContent: "center",
    marginVertical:30,
  },
  buttonText: {
    color: "white",
  }
});

export default Contact;