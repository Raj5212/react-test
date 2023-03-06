import React from 'react';
import InputSection from "../../components/input";
import { Provider } from "react-redux";
import store from "../../store";

const Index = () => {
  return (
    <Provider store={store}>
    <div>
     <InputSection />
    </div>
    </Provider>
  )
}

export default Index;