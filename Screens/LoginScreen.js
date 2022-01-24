import { TouchableOpacity, StyleSheet, View,Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import useAuth from "../hooks/useAuth";

const LoginScreen = () => {
  const { signInWithGoogle, loading} = useAuth();
  const colors = ["#F9D7D5", "#FF9B7B", "#FF4E8C"];
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={colors}
        style={styles.background}
        end={{ x: 0.90, y: 0.10 }}
      >
        <Image source={require("../assets/ico.png")} style={styles.image} />        
        <View style={{top:450,alignItems: "center"}}>
          <Text style={{fontSize: 20,color:'#fff'}}>{loading ? "Loading..." : "Login using your IIITK Gmail"}</Text>
        </View>
        <TouchableOpacity onPress={signInWithGoogle}  style={styles.button}>
            <Text style={styles.text}>
              Google SignIn
            </Text>
        </TouchableOpacity> 
                    
      </LinearGradient>          
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: "100%",
  },
  white: {
    backgroundColor: "transparent",
    fontSize: 15,
    color: "#fff",
  },
  image: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    left: "37.5%",
    top: "40%",
    height: 100,
    width: 100,
  },
  button: {
    position: "absolute",
    left: 35,
    width: "80%",
    height: 50,
    top: 500,   
    backgroundColor: "#FFFFFF",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    elevation: 3,
  },
  text:{
    "fontWeight": "500",
    "fontSize": 15,
    "lineHeight": 18,
    "textAlign": "center",
    "textTransform": "uppercase",
    "color": "#373737",
    "marginTop":"5%"
  }
});

export default LoginScreen;
