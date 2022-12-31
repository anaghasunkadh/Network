import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import hello from "hellojs/dist/hello.all.js";

import registerServiceWorker from "./registerServiceWorker";
import Login from "./login/login";
import { Home } from "./home/home";
import { Configs } from "./configs";

import App1 from "./home/App1";

hello.init(
  {
    msft: {
      id: Configs.appId,
      oauth: {
        version: 2,
        auth: "https://login.microsoftonline.com/common/oauth2/v2.0/authorize",
      },
      scope_delim: " ",
      form: false,
    },
  },
  { redirect_uri: window.location.href }
);

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/:id" component={App1} />
    </Switch>
  </BrowserRouter>,

  document.getElementById("root")
);

registerServiceWorker();
