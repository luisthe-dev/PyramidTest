import React from "react";
import { useFonts } from "expo-font";
import { Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import { Roboto_400Regular } from "@expo-google-fonts/roboto";
import { OpenSans_700Bold } from "@expo-google-fonts/open-sans";
import HelpCenter from "./screens/HelpCenter";

const App = () => {
  const [fontsLoaded] = useFonts({
    Poppins_600SemiBold,
    Roboto_400Regular,
    OpenSans_700Bold,
  });

  if (!fontsLoaded) {
    return null;
  }

  return <HelpCenter />;
};

export default App;
