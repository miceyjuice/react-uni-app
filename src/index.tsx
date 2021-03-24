import ReactDOM from "react-dom";

import MainPage from "./components/MainPage/MainPage";
import Layout from "./layout/Layout";

ReactDOM.render(
  <Layout>
    <MainPage />
  </Layout>,
  document.getElementById("root")
);
