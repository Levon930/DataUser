import React from "react";
import "./Heder.css";
class Heder extends React.Component {
  render() {
    const { search } = this.props;
    return (
      <header>
        <nav>
          <p>Contender</p>
          <ul>
            <li>Templete</li>
            <li>Featwes</li>
            <li>Subscription</li>
            <li>Support</li>
          </ul>
          <form action="#">
            <input type="button" value="LOGIN" />
          </form>
        </nav>
        <div className="exp">
          <h1>Contentder Experts</h1>
        </div>
        <div className="forms">
          <form action="#">
            <div className="search">
              <input
                type="search"
                name="q"
                className="searchin"
                placeholder="Search"
                onChange={(event) => search(event)}
              />
              <button type="submit">Search</button>
            </div>
            <button>
              <i className="fas fa-heart"></i>
            </button>
          </form>
        </div>
      </header>
    );
  }
}
export default Heder;
