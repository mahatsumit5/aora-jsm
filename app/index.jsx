import { Link, Redirect, router } from "expo-router";
import { StatusBar } from "expo-status-bar";
import {
  Image,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../constants";
import CustomButton from "../components/CustomButton";
import { useGlobalContext } from "../context/GlobalProvider";
export default function App() {
  const { isLoading, isLoggedIn } = useGlobalContext();
  console.log(isLoading, isLoggedIn);
  if (!isLoading && isLoggedIn) return <Redirect href="/home" />;
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{ height: "100%" }}>
        <View className="w-full max-w-[600px] mx-auto justify-center items-center h-[80vh] px-4">
          <Image
            source={images.logo}
            className="w-[130px] h-[84px]"
            resizeMode="contain"
          />
          <Image
            source={images.cards}
            className="max-w-[380px] h-[300px]"
            resizeMode="contain"
          />
          <View className="relative mt-5 ">
            <Text className="font-bold text-center text-white text-3xl">
              Discover Endless Possibilities with {` `}
              <Text className="text-secondary-200 ">Aora </Text>
            </Text>

            <Image
              source={images.path}
              className="w-[136px] absolute -bottom-2 -right-8 h-[15px]"
              resizeMode="contain"
            />
          </View>
          <Text className="text-sm text-gray-100 mt-7 text-center font-pregular">
            Where creativity meets innovation: embark on a journey of limitless
            exploration
          </Text>
          <CustomButton
            title="Continue with Email"
            handlePress={() => {
              router.push("/sign-in");
            }}
            containerStyles="w-full mt-7"
          />
        </View>
      </ScrollView>
      <StatusBar backgroundColor="#161622" style="light" />
    </SafeAreaView>
  );
}
