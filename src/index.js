import React from "react";
import ReactDOM from "react-dom";
import Airtable from "airtable";
import axios from "axios";
import { BrowserRouter, Route } from "react-router-dom";

import { Layout } from "./components/Layout";
import { Default } from "./pages/Default";

// Airtable settings
new Airtable({ apiKey: "key65gqCdfYa4ZQjs" }).base("appzv1gqnbxS4OW8F");

// base endpoint to call with each request
axios.defaults.baseURL =
  "https://api.airtable.com/v0/appzv1gqnbxS4OW8F/food_data";

// content type to send with all POST requests
axios.defaults.headers.post["Content-Type"] = "application/json";

// authenticate to the base with the API key
axios.defaults.headers["Authorization"] = "Bearer key65gqCdfYa4ZQjs";

const rootElement = document.getElementById("root");

ReactDOM.render(
  <BrowserRouter>
    <Layout>
      <Route extract="/" component={Default}></Route>
    </Layout>
  </BrowserRouter>,
  rootElement
);
