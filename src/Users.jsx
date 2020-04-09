import React from "react";
import Heder from "./Heder";
import "./Users.css";
class Users extends React.Component {
  state = {
    users: [],
  };
  search = (event) => {
    this.setState((prevState) => {
      return {
        ...prevState,
        users: prevState.users.filter((item) => {
          return item.name.first
            .toLocaleLowerCase()
            .startsWith(event.target.value.toLocaleLowerCase());
        }),
      };
    });
  };
  async componentDidMount() {
    const response = await fetch("https://randomuser.me/api?results=50");
    const result = await response.json();
    console.log(result);
    const us = result.results.map((item) => {
      return item;
    });
    this.setState((prevState) => {
      return {
        ...prevState,
        users: [...result.results],
      };
    });
  }
  render() {
    return (
      <div className="us">
        <Heder search={this.search} />
        <div className="users">
          {this.state.users.map((item) => {
            return (
              <div className="user">
                <img src={item.picture.large} alt="User" />
                <p className="name">{`${item.name.title} ${item.name.first} ${item.name.last}`}</p>
                <p className="country">{`${item.location.city} ${item.location.state} ${item.location.country}`}</p>
                <p className="email">{item.email}</p>
                <p className="phone">{item.phone}</p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
export default Users;
