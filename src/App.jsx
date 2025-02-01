import { Outlet } from "react-router-dom";
import ExamProvider from "./store/myStore";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css"
import * as mdb from 'mdb-ui-kit'; // lib
window.mdb = mdb;

const App = () => {
  return (
    <ExamProvider>
      <Header></Header>
      <Outlet />
      <Footer></Footer>
    </ExamProvider>
  );
};

export default App;
