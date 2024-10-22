import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from the backend API
    axios
      .get("http://localhost:5000/api/users")
      .then((response) => {
        console.log('response,.,', response)
        setUsers(response.data); // Update state with fetched users
      })
      .catch((error) => {
        console.error("There was an error fetching the users:", error);
      });
  }, []);
  return (
    <div className="App">
      <h1>Full Stack App With React + Node + Postgres...</h1>
      <p>Example for deploying to ec2 instance in AWS</p>
      <h1>User List</h1>
      <div>
      
        {users?.length >=1 && users?.map((user) => (
          <div key={user.id}><p>{user.name}</p></div>
        ))}
        
      </div>
    </div>
  );
}

export default App;
