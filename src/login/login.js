import React, { Component } from "react";
import hello from "hellojs/dist/hello.all.js";
import "bulma/css/bulma.min.css";
import { Configs } from "../configs";

class Login extends Component {
  constructor(props) {
    super(props);

    this.onLogin = this.onLogin.bind(this);
  }

  onLogin() {
    hello("msft")
      .login({ scope: Configs.scope })
      .then(
        () => this.props.history.push("/home"),
        (e) => console.error(e.error.message)
      );
  }

  render() {
    return (
      <div>
        <section className="hero is-light is-fullheight">
          <div className="hero-body ">
            <div className="container  ">
              <div className="columns is-flex is-centered mb-5 pd-5  has-text-centered">
                <figure className="image  is-inline-block ml-auto mr-auto">
                  <img
                    src="https://www.triconinfotech.com/wp-content/uploads/2022/02/RETINA-LOGO-1-1-3.svg"
                    className=" main-logo svg-logo "
                    alt="Tricon Infotech"
                  />
                </figure>
              </div>
              <div class=" has-text-centered">
                <button className="button is-info " onClick={this.onLogin}>
                  Sign in with your Microsoft account
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Login;
