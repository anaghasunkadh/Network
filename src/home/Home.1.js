import React, { Component } from "react";
import hello from "hellojs/dist/hello.all.js";
import axios from "axios";

class Home extends Component {
  constructor(props) {
    super(props);

    const msft = hello("msft").getAuthResponse();

    this.state = {
      me: "",
      successMessage: "",
      token: msft.access_token,
    };

    this.onLogout = this.onLogout.bind(this);
  }

  componentDidMount() {
    const { token } = this.state;
    axios
      .get(
        "https://graph.microsoft.com/v1.0/me?$select=displayName,mail,userPrincipalName",
        { headers: { Authorization: `Bearer ${token}` } }
      )
      .then((res) => {
        const me = res.data;
        this.setState({ me });
      });
  }

  onLogout() {
    hello("msft")
      .logout()
      .then(
        () => this.props.history.push("/"),
        (e) => console.error(e.error.message)
      );
  }

  render() {
    const { me } = this.state;
    return (
      <div>
        <p>{me.userPrincipalName}</p>
      </div>
    );
  }
}
export default Home;
