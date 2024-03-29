import messaging from '@react-native-firebase/messaging';
import {Alert, PermissionsAndroid, Platform} from 'react-native';
import notifee from '@notifee/react-native';

export const FCM_TOKEN_KEY = 'token';

export const requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  if (enabled) {
    console.log(`permassion status: ${enabled} ${authStatus}`);
  }

  return enabled;
};

export const getFCMToken = async () => {
  if (Platform.OS === 'android') {
    PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS,
    );
  }
  let fcmToken = '';
  try {
    const hasPermession = await messaging().hasPermission();

    if (hasPermession) {
      await messaging().setAPNSToken('', 'unknown');
      await messaging().registerDeviceForRemoteMessages(); //
      fcmToken = await messaging().getToken();

      console.log(fcmToken);

      return fcmToken;
    }
  } catch (error) {
    console.log(error);
    return fcmToken;
  }
};

export const notificationListener = async () => {
  const grated = await messaging().requestPermission();
  if (grated) {
    messaging().onNotificationOpenedApp(async remoteMessage => {
      console.log(
        'Notification caused app to open from background state:',
        remoteMessage.notification,
      );
    });

    messaging()
      .getInitialNotification()
      .then(remoteMessage => {
        console.log(
          'Notification caused app to open from quit state:',
          remoteMessage.notification,
        );
      })
      .catch(err => console.log(err));
    messaging().onMessage(async remoteMessage => {
      Alert.alert(JSON.stringify(remoteMessage));
    });
  } else {
    console.log('grated false');
  }
};

export const onMessafeReceived = async (message: any) => {
  if (message?.data) {
    notifee.displayNotification(message.data);
  }
};
