import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const ReceiverMessage = ({ message }) => {
  //console.log(message);
  return (
    <View style={styles.recieve}>
      <View style={styles.container}>      
        <Text>{message.message}</Text>      
      </View>
    </View>      
    
  );
};

const styles = StyleSheet.create({
  recieve:{
    display: "flex",
    flexDirection: "row",
  },
  container: {
    fontSize: 14,    
    position: "relative",     
    padding: 10,
    textAlign: "justify",
    width: "60%",
    marginBottom: '5%',
    //top: 307px
    backgroundColor: "#B9B0B0",
    borderRadius: 20,
  },
});
export default ReceiverMessage;
