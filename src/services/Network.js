import NetInfo from '@react-native-community/netinfo';
export default class Network {
  checkNetwork = (onResult: (arg0: any) => void) => {
    NetInfo.fetch().then((state: {isConnected: any}) => {
      console.log(state.isConnected);
      onResult(state.isConnected);
    });
  };
}
