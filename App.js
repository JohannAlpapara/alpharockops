import React from 'react';
import { WebView } from 'react-native';

class App extends React.Component {
  render() {
    return (
      <WebView
        source={{ uri: 'https://alpharockops.herokuapp.com/' }}
        style={{ marginTop: 20 }}
      />
    );
  }
}

export default App;
