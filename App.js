import React from "react";
import { Provider } from "react-redux";
import AppContainer from "./app/navigation";
import store from "./app/reducers";
import navigationService from "./app/service/navigationService";

export default function App() {
  return (
      <Provider store={store}>
        <AppContainer
          ref={(navigatorRef) => {
            navigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
      </Provider>
  );
}
