import React, { useState, useEffect } from 'react';
import AppLoading from 'expo-app-loading';
import { useDispatch } from 'react-redux';
import { loadInitialAssets, tryAutoLogin } from '../../config/redux/actions/AuthActions';
import ImageDetails from '../../components/Home/ImageDetails';
import AppIntroScreen from './AppIntroScreens';
import { Terms } from '../Admin/Terms';
import { Privacy } from '../Admin/Privacy';
import { EditProfile } from '../Admin/EditProfile';

interface SplashScreenProps {
    navigation: Object;
}

export const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
    const [appReady, setAppReady] = useState<Boolean>(false);
    const [fontLoaded, setFontLoaded] = useState<Boolean>(false);

    useEffect(() => {
        setFontLoaded(true);
    }, []);

    const dispatch = useDispatch();
    return (
        <>
            {!appReady ? (
                <AppLoading
                    startAsync={async () => {
                        await loadInitialAssets(); //used to load fonts when user will open app
                        // await dispatch(tryAutoLogin(navigation));
                    }}
                    onFinish={() => setAppReady(true)}
                    onError={console.warn}
                    autoHideSplash={false}
                />
            ) : (
                <AppIntroScreen navigation={navigation} />
            )}
        </>
    );
};
