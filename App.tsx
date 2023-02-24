/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState, useEffect, useCallback} from 'react';
import {SafeAreaView, Text, View} from 'react-native';
// @ts-ignore
import JitsiMeet, {JitsiMeetView} from 'react-native-jitsi-meet';

function App(): JSX.Element {
  const [showJitsiView, setShowJitsiView] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      const url = 'EquivalentUpdatesBenefitFar';
      const userInfo = {
        displayName: 'User',
        email: 'user@example.com',
        avatar: 'https:/gravatar.com/avatar/abc123',
      };
      JitsiMeet.call(url, userInfo);
      console.log('Called');
      setShowJitsiView(true);
    }, 1000);
  }, []);

  useEffect(() => {
    return () => {
      JitsiMeet.endCall();
    };
  }, []);

  const meetUI = useCallback(() => {
    console.log('Meet UI Init');
    return (
      <>
        {showJitsiView && <Text>{Math.random().toString()}</Text>}
        <View
          style={{
            backgroundColor: 'black',
            flex: 1,
          }}>
          <JitsiMeetView
            onConferenceTerminated={() => JitsiMeet.endCall()}
            onConferenceJoined={() => console.log('joined')}
            onConferenceWillJoin={() => console.log('will join')}
            style={{flex: 1, height: '100%', width: '100%'}}
          />
        </View>
      </>
    );
  }, [showJitsiView]);

  return <>{meetUI()}</>;
}

export default App;
