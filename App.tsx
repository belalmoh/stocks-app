import { SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";
import { NavigationContainer } from "@react-navigation/native";

import TabRoutes from './src/routes/tabs'

const App = () => {
	const isLoggedIn = false;
	return (
		<NavigationContainer>
			<NativeBaseProvider>
				<StatusBar style="auto"/>
				<SafeAreaView style={{flex: 1}}>
          <TabRoutes />
				</SafeAreaView>
			</NativeBaseProvider>
		</NavigationContainer>
	)
}

export default App;