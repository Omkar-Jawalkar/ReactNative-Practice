import React, {useState} from "react";
import {View, Button, Text, SafeAreaView, ActivityIndicator, 
  StyleSheet

} from "react-native";


function App () {

  const [activityIndicatorStatus, setActivityIndicatorStatus] = useState(false)

  return(

    <SafeAreaView>
        <View>
          <Text>HEllo World</Text>
        </View>
        <View>
          <Text>HEllo World</Text>
        </View>
        <View>
          <Text>HEllo World</Text>
        </View>
        <View>
          <Text>HEllo World</Text>
        </View>


        <View>   
          <Button
            title="Press me"
            onPress={()=>{
              setActivityIndicatorStatus(!activityIndicatorStatus)
            }}
            color="#841584"
            touchSoundDisabled={true}
          />
        </View>
            {activityIndicatorStatus ? <ActivityIndicator size={"large"} /> : null }
       
      </SafeAreaView>
  )
}


export default App;