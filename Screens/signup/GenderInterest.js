import React, { useContext } from "react";
import {
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import styles from "./Style/Styles";
import Header from "./Header";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigation } from "@react-navigation/native";
import useAuth from "../../hooks/useAuth";
import AppContext from "../../context/AppContext";

const GenderInterest = () => {
    let { user } = useAuth();
  const navigation = useNavigation();

  const { updateUserData } = useContext(AppContext)

  const Interests = [
    {
      Options: [
        { optionText: "Men", value: "male" },
        { optionText: "Women", value: "female" },
        { optionText: "Both", value: "both" },
      ],
    },
  ];
  let handleFormData = (lookingFor) => {
    let data = { aboutStuff: arrayUnion({ type: "looking_for", value: lookingFor }) };
    updateDoc(doc(db, "users", user.uid), {
      ...data,
    })
      .then(() => {
        // console.log("done");
        updateUserData()
        navigation.navigate("Batch");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  return (
    <View style={styles.container}>
      <Header title="I like" />

      <View style={styles.interestsconatiner}>
        {Interests[0].Options.map((Option) => (
          <TouchableOpacity onPress={() => handleFormData(Option.value)}>
            <Text style={styles.option}>{Option.optionText}</Text>
          </TouchableOpacity>
        ))}
      </View>

    </View>
  );
};

export default GenderInterest;
