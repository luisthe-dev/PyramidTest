import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import {
  BlackText,
  Blue,
  GrayBG,
  Green,
  LightBlue,
  LightGreen,
  LightRed,
  MainBG,
  Red,
} from "../components/Colors";
import { Accordion } from "react-native-animated-accordion";
import { SafeAreaView } from "react-native-safe-area-context";
import { InputText } from "../components/Colors";
import { GrayText } from "../components/Colors";

const HelpCenter = () => {
  const helpCards = [
    {
      icon: <Ionicons name="notifications-outline" size={24} color={Blue} />,
      about: "Getting Started",
      bgColor: LightBlue,
    },
    {
      icon: <Feather name="hexagon" size={24} color={Green} />,
      about: "How to Invest",
      bgColor: LightGreen,
    },
    {
      icon: <FontAwesome name="money" size={24} color={Red} />,
      about: "Payment Methods",
      bgColor: LightRed,
    },
  ];

  const topQuestions = [
    {
      headerText: "How to create a account?",
      mainText:
        "Open the Tradebase app to get started and follow the steps. Tradebase doesn’t charge a fee to create or maintain your Tradebase account.",
    },
    {
      headerText: "How to add a payment method by this app?",
      mainText:
        "Open the Tradebase app to get started and follow the steps. Tradebase doesn’t charge a fee to create or maintain your Tradebase account.",
    },
    {
      headerText: "What Time Does The Stock Market Open?",
      mainText:
        "Open the Tradebase app to get started and follow the steps. Tradebase doesn’t charge a fee to create or maintain your Tradebase account.",
    },
    {
      headerText: "Is The Stock Market Open On Weekends?",
      mainText:
        "Open the Tradebase app to get started and follow the steps. Tradebase doesn’t charge a fee to create or maintain your Tradebase account.",
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: MainBG }}>
      <StatusBar animated={true} backgroundColor={MainBG} style="dark" />
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingVertical: 20,
            paddingHorizontal: 20,
          }}
        >
          <Feather name="arrow-left" size={24} color={BlackText} />
          <Text style={{ fontFamily: "Poppins_600SemiBold", fontSize: 24 }}>
            Help Center
          </Text>
          <Feather name="search" size={24} color={BlackText} />
        </View>
        <Text
          style={{
            fontFamily: "Poppins_600SemiBold",
            fontSize: 20,
            marginVertical: 6,
            textAlign: "center",
          }}
        >
          How can we help you?
        </Text>
        <View
          style={{
            backgroundColor: GrayBG,
            width: "90%",
            marginHorizontal: "5%",
            marginVertical: 8,
            borderRadius: 8,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "flex-start",
            paddingVertical: 11,
            paddingHorizontal: 12,
          }}
        >
          <Feather name="search" size={24} color={BlackText} />
          <TextInput
            placeholder="Enter your keyword"
            placeholderTextColor={InputText}
            style={{
              marginLeft: 12,
              fontFamily: "Roboto_400Regular",
              fontSize: 14,
              color: BlackText,
            }}
          />
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{ marginVertical: 12, paddingLeft: 8 }}
        >
          {helpCards.map((helpCard, key) => (
            <TouchableOpacity
              key={key}
              style={{
                width: 160,
                paddingVertical: 20,
                paddingHorizontal: 18,
                borderRadius: 8,
                backgroundColor: helpCard.bgColor,
                marginHorizontal: 8,
              }}
            >
              {helpCard.icon}
              <Text
                style={{
                  color: GrayText,
                  fontFamily: "Roboto_400Regular",
                  fontSize: 14,
                  marginTop: 12,
                }}
              >
                Questions about
              </Text>
              <Text
                numberOfLines={1}
                style={{
                  color: BlackText,
                  fontFamily: "Poppins_600SemiBold",
                  fontSize: 14,
                  marginTop: 12,
                }}
              >
                {helpCard.about}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            paddingHorizontal: 30,
            marginVertical: 20,
          }}
        >
          <Text
            style={{
              fontFamily: "Poppins_600SemiBold",
              fontSize: 16,
              color: BlackText,
            }}
          >
            Top Questions
          </Text>
          <Text
            style={{ fontFamily: "OpenSans_700Bold", fontSize: 14, color: Red }}
          >
            View all
          </Text>
        </View>
        <View style={{ width: "90%", marginHorizontal: "5%" }}>
          {topQuestions.map((topQuestion, key) => (
            <Accordion
              headerText={topQuestion.headerText}
              key={key}
              headerStyles={{
                elevation: 0,
                borderRadius: 8,
                borderStyle: "solid",
                borderWidth: 1.5,
                marginVertical: 0,
                borderBottomColor: "transparent",
              }}
              bodyStyles={{
                marginVertical: 20,
                elevation: 0,
                borderRadius: 8,
                borderStyle: "solid",
                borderWidth: 1.5,
                borderColor: GrayBG,
                borderTopColor: "transparent",
              }}
            >
              <View
                style={{
                  paddingHorizontal: 12,
                }}
              >
                <Text
                  style={{
                    fontFamily: "Roboto_400Regular",
                    fontSize: 14,
                    color: GrayText,
                  }}
                >
                  {topQuestion.mainText}
                </Text>
              </View>
            </Accordion>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HelpCenter;
