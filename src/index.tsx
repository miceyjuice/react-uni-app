import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import MainPage from "./components/MainPage/MainPage";
import Layout from "./layout/Layout";
import store from './tools/store';

ReactDOM.render(
  <Provider store={store}>
    <Layout>
      <MainPage />
    </Layout>
  </Provider>,

  document.getElementById("root")
);
