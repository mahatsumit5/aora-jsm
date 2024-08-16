import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";
const FormField = ({
  title,
  value,
  placeholder,
  handleOnChangeText,
  otherStyles,
  ...props
}) => {
  const [showPass, setshowPass] = useState(false);
  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>

      <View
        className={`w-full h-16 px-4 bg-black-100 border border-black-200 rounded-2xl focus:border-secondary items-center flex-row`}
      >
        <TextInput
          className={`flex-1 text-white font-psemibold text-base  w-full`}
          value={value}
          placeholder={placeholder}
          placeholderTextColor={"#7B7B8B"}
          onChangeText={handleOnChangeText}
          secureTextEntry={title === "Password" && !showPass}
        />

        {title === "Password" && (
          <TouchableOpacity
            onPress={() => {
              setshowPass(!showPass);
            }}
          >
            <Image
              source={!showPass ? icons.eye : icons.eyeHide}
              resizeMode="contain"
              className="w-6 h-6"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;

const styles = StyleSheet.create({});
