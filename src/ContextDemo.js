import React from "react";
import ReactDOM from "react-dom";
import Name from "./components/contextdemo/NameComponent";
import Location from "./components/contextdemo/LocationComponent";
import UserForm from "./components/contextdemo/UserForm";
import UserProvider from "./components/contextdemo/UserContext";
//import "./styles.css";

// This component updates with data from context
function ContextDemo() {
  return <UserProvider>
      <div className="ContextDemo">
      
        <div>
          <h4>Enter a name and location.  The "Name" and "Location" components will update using the Provider/Context classes.</h4>
        </div>
        <div>
          Reference: <a href="https://scotch.io/courses/10-react-challenges-beginner/use-context-to-pass-data">
            https://scotch.io/courses/10-react-challenges-beginner/use-context-to-pass-data</a>
        </div>       
      
      <div className="container">
        <UserForm />

        <h2 className="is-size-4">Display User Info Here</h2>
        <p>
          These two children components will receive data. These could be nested
          components.
        </p>
        <Name />
        <Location />
      </div>
    </div>
    </UserProvider>;
}

export default ContextDemo;
// const rootElement = document.getElementById("root");
// ReactDOM.render(<UserProvider><ContextDemo /></UserProvider>, rootElement);
