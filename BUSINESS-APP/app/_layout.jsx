import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import LoginScreen from "./../app-example/components/LoginScreen";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function RootLayout() {
  useFonts({
    'outfit':require('../assets/fonts/Outfit-Regular.ttf'),
    'outfit-medium':require('../assets/fonts/Outfit-Medium.ttf'),
    'outfit-bold':require('../assets/fonts/Outfit-Bold.ttf'),
  })
  return( 
  <ClerkProvider publishableKey={process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY}>
    <SignedIn>
      <Stack screenOptions={{headerShown: false}}>
      <Stack.Screen name="(tabs)" />
      </Stack>
    </SignedIn>
    <SignedOut>
      <LoginScreen/>
    </SignedOut>
  
  </ClerkProvider>
  );
}
