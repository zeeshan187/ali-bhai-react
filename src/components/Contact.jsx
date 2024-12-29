import React, { useEffect, useRef, useState } from "react";
import "../styles/general.css";
import axios from "axios";
const Contact = () => {
  let [data, setData] = useState([]);
  // let data=useRef()
  // let FormSubmitted=(e)=>{
  //   e.preventDefault()
  //   const formData = new FormData(data.current);
  //   const value = Object.fromEntries(formData.entries());
  //   console.log(value)
  // }

  // Api Integration
  let ApiCalling = async () => {
    let value = await axios("https://jsonplaceholder.typicode.com/users");
    setData(value.data);
  };
  useEffect(() => {
    ApiCalling();
  }, []);

  console.log(data);

  return (
    <div>
      {/* <table border="1">
        <tr>
          <td>Name</td>
          <td>Email</td>
          <td>Username</td>
          <td>Actions</td>
        </tr>
        {data.map((item) => (
          <tr>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.username}</td>
            <td><button>Delete</button></td>
          </tr>
        ))}
      </table> */}

      <table class="table table-striped">
        <thead>
          <tr >
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">UserName</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr >
              <td class="bg-warning">{item.name}</td>
              <td class="bg-dark custom_text_color">{item.email}</td>
              <td>{item.username}</td>
            </tr>
          ))}

        </tbody>
      </table>
    </div>
  );
};

export default Contact;
