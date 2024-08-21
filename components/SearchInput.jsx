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
const SearchInput = ({
  title,
  value,
  placeholder,
  handleOnChangeText,
  otherStyles,
  ...props
}) => {
  const [showPass, setshowPass] = useState(false);
  return (
    <View
      className={`w-full h-16 px-4 bg-black-100 border border-black-200 rounded-2xl focus:border-secondary items-center flex-row space-x-4`}
    >
      <TextInput
        className={`text-base mt-0.5 text-white flex-1 font-pregular`}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={"#7B7B8B"}
        onChangeText={handleOnChangeText}
        secureTextEntry={title === "Password" && !showPass}
        {...props}
      />

      <TouchableOpacity>
        <Image source={icons.search} className="w-5 h-5" resizeMode="contain" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;

const styles = StyleSheet.create({});
