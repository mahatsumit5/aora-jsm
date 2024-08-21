import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";
import { ResizeMode, Video } from "expo-av";

const VideoCard = ({ title, thumbnail, video, creator, avatar }) => {
  const [play, setPlay] = useState(false);
  return (
    <View className="flex-col items-center px-4 mb-14">
      <View className="flex-row gap-3 items-start">
        <View className="justify-center items-center flex-row flex-1">
          <View className="w-[46px] h-[46px] rounded-lg border-secondary justify-center items-center p-0.5 ">
            <Image
              source={{ uri: avatar }}
              className="w-full h-full rounded-lg "
              resizeMode="cover"
            />
          </View>
          <View className="justify-center flex-1 ml-3 gap-y-1 ">
            <Text className="text-white font-bold text-sm" numberOfLines={1}>
              {title}
            </Text>
            <Text
              className="text-gray-100 text-xs font-pregular"
              numberOfLines={1}
            >
              {creator}
            </Text>
          </View>
        </View>
        <View className="pt-2">
          <Image
            source={icons.menu}
            className="h-5 w-5 "
            resizeMode="contain"
          />
        </View>
      </View>
      {play ? (
        <Video
          source={{
            uri: "https://cfw-image-bucket.s3.ap-southeast-2.amazonaws.com/test.mp4",
          }}
          className="w-full h-60 rounded-xl mt-3 "
          resizeMode={ResizeMode.CONTAIN}
          useNativeControls
          shouldPlay
          onPlaybackStatusUpdate={(status) => {
            if (status.didJustFinish) {
              setPlay(false);
            }
          }}
        />
      ) : (
        <TouchableOpacity
          className="w-full h-60 rounded-xl mt-3 relative justify-center items-center"
          activeOpacity={0.7}
          onPress={() => setPlay(true)}
        >
          <Image
            source={{ uri: thumbnail }}
            className="w-full h-full rounded-xl mt-3 "
            resizeMode="cover"
          />
          <Image
            source={icons.play}
            className="w-12 h-12 absolute  "
            resizeMode="contain"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default VideoCard;
