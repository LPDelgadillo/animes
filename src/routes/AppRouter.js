import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "../components/Navbar";
import App from "../containers/App";

export default class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<App/>}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
