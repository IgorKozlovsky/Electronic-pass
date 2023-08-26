import { NativeStackNavigationOptions } from '@react-navigation/native-stack'

export const SCREEN_OPTIONS: NativeStackNavigationOptions = {
  headerShown: false,
  animation: 'fade',
  orientation: 'portrait',
  animationDuration: 400,
  navigationBarColor: 'transparent',
  navigationBarHidden: true,
  contentStyle: {
    backgroundColor: '#FFFFFF',
  },
}

export const BASE64_PREFIX = 'data:image/png;base64,'

export const BASE_URL = 'http://127.0.0.1:5000'
