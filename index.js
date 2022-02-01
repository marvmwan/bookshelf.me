import React from 'react';
import { registerRootComponent } from 'expo';

import App from './App';
import {Provider} from 'react-redux';

import configureStore from './store/store';

const store = configureStore();

const ReduxApp = () => {
    return (
        <Provider store={store}>
            <App/>
        </Provider>
    )
}

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(ReduxApp);
