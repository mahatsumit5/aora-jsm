import { View, Text, ScrollView, Image } from "react-native";
import React, { useState } from "react";
import Check from "../../components/FormField";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";
import FormField from "../../components/FormField";

import CustomButton from "../../components/CustomButton";
import { Link } from "expo-router";
const SignUp = () => {
  const [form, setform] = useState({
    userName: "",
    email: "",
    password: "",
  });

  function submit() {
    console.log(form);
  }

  return (
    <SafeAreaView className="bg-primary h-full ">
      <ScrollView className="">
        <View className="w-full max-w-[600px] justify-center mx-auto min-h-[85vh] px-4 my-6 ">
          <Image
            source={images.logo}
            resizeMode="contain"
            className="w-[135px] h-[35px]"
          />
          <Text className="text-2xl text-white font-semibold mt-10 font-psemibold">
            Sign up to Aora
          </Text>
          <FormField
            title="Username"
            value={form.userName}
            handleOnChangeText={(e) => setform({ ...form, userName: e })}
            otherStyles="mt-7 "
            keyboardType="email-address"
          />
          <FormField
            title="Email"
            value={form.email}
            handleOnChangeText={(e) => setform({ ...form, email: e })}
            otherStyles="mt-7 "
            keyboardType="email-address"
          />
          <FormField
            title="Password"
            value={form.password}
            handleOnChangeText={(e) => setform({ ...form, password: e })}
            otherStyles="mt-7 "
          />

          <CustomButton
            title={"Sign Up"}
            containerStyles={"mt-7"}
            handlePress={submit}
          />
          <View className="justify-center gap-2 flex-row pt-5">
            <Text className="text-lg text-gray-100 font-pregular ">
              Have an account?
            </Text>
            <Link
              href={"/sign-in"}
              className="text-lg font-psemibold text-secondary-100"
            >
              Sign In
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
