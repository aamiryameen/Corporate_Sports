import { LogBox } from 'react-native';
import { setJSExceptionHandler } from 'react-native-exception-handler';
import { Provider as ReduxProvider } from 'react-redux';

import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from './src/config/redux/store';
import Router from './src/navigation/Router';
import { NativeBaseProvider, Text } from 'native-base';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

const DEBUG_KEY = '[APP ROOT]';

setJSExceptionHandler((error, isFatal) => {
    console.log(`${DEBUG_KEY} Error while doing the action`, error);

    //Uncomment alert line when deploying it will give an alert when app is crashed.
    // Alert.alert(`Error in application. Please contact developer for support`);
}, true);

export default function App() {
    return (
        <NativeBaseProvider>
            <ReduxProvider store={store}>
                <PersistGate persistor={persistor}>
                    <Router />
                </PersistGate>
            </ReduxProvider>
        </NativeBaseProvider>
    );
}
