import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  TextInput,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Height = ({ styles, height, setHeight, edit }) => {
  const [modalVisible, setModalVisible] = useState(false);

  // console.log(height)

  return (
    <>
      <TouchableOpacity
        style={[
          styles.basicOption,
          {
            alignItems: "center",
          },
        ]}
        onPress={() => setModalVisible(!modalVisible)}
        disabled={!edit}
      >
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            flexGrow: 1,
          }}
        >
          <MaterialCommunityIcons
            name="human-male-height-variant"
            style={{
              marginRight: 10,
              marginTop: 4,
            }}
            size={22}
            color="#222"
          />

          <Text style={styles.basicText}>Height</Text>
        </View>

        <View
          style={{
            backgroundColor: "#efefef",
            textAlign: "center",
            paddingHorizontal: 10,
            right: 10,
            borderRadius: 20,
            borderColor: "#ddd",
            borderWidth: 1,
            display: height.feet !== "0" ? "flex" : "none",
          }}
        >
          <Text>
            {height.feet}'{height.inch}
          </Text>
        </View>

        <Icon
          name="chevron-forward"
          style={{
            marginRight: 8,
            // marginTop:6
          }}
          size={18}
          color="#333"
        />
      </TouchableOpacity>

      <View style={styles.centeredView}>
        <Modal
          animationType="fade"
          transparent={true}
          onRequestClose={() => setModalVisible(!modalVisible)}
          visible={modalVisible}
          style={{
            zIndex: 10,
          }}
        >
          <View style={styles.centeredView}>
            <View
              style={[
                styles.modalView,
                {
                  justifyContent: "space-around",
                },
              ]}
            >
              <TextInput
                placeholder="Feet"
                style={style.input}
                value={height.feet}
                selectionColor="#FF4E8C"
                keyboardType="numeric"
                onChangeText={(f) => {
                  f > 7
                    ? setHeight({
                        feet:'0',
                        inch:'0'
                    })
                    : setHeight((h) => ({
                        ...h,
                        feet: f,
                      }));
                }}
                selectTextOnFocus={true}
                maxLength={1}
                maxValue={6}
              />

              <TextInput
                placeholder="Inch"
                style={style.input}
                value={height.inch}
                selectionColor="#FF4E8C"
                keyboardType="numeric"
                onChangeText={(inch) => {
                  inch > 11
                    ? setHeight({
                        feet:'0',
                        inch:'0'
                    })
                    : setHeight((h) => ({
                        ...h,
                        inch: inch,
                      }));
                }}
                selectTextOnFocus={true}
                maxLength={2}
                maxValue={11}
              />
            </View>

            <TouchableOpacity
              onPress={() => setModalVisible(!modalVisible)}
              style={{
                backgroundColor: "#222",
                padding: 10,
                width: "50%",
                borderRadius: 20,
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: "#fff",
                  fontWeight: "bold",
                }}
              >
                Done
              </Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
    </>
  );
};

export default Height;

const style = StyleSheet.create({
  input: {
    width: 80,
    height: 60,
    backgroundColor: "rgb(250,250,250)",
    marginVertical: 5,
    marginHorizontal: 5,
    borderRadius: 10,
    borderWidth: 2,
    padding: 10,
    borderColor: "#eee",
    textAlign: "center",
  },
});
