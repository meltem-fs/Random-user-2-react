import React, { useEffect, useState } from "react";
import mailSvg from "./assets/mail.svg";
import manSvg from "./assets/man.svg";
import womanSvg from "./assets/woman.svg";
import manAgeSvg from "./assets/growing-up-man.svg";
import womanAgeSvg from "./assets/growing-up-woman.svg";
import mapSvg from "./assets/map.svg";
import phoneSvg from "./assets/phone.svg";
import padlockSvg from "./assets/padlock.svg";
import cwSvg from "./assets/cw.svg";
import axios from "axios";

const defaultImage = "https://randomuser.me/api/portraits/men/75.jpg";

function App() {
  const [user, setUser] = useState([]);

  const getusers = async () => {
    const url = "https://randomuser.me/api/";
    try {
      const { data } = await axios(url);
      console.log(data);
      setUser(data.results[0]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getusers();
  }, []);

  const { picture, email, name, phone, location, dob ,login,gender} = user;
  console.log(user);

  const [changeuser, setChangeuser] = useState(["name"]);

  console.log(changeuser);


  const dataConfigure = {
    name: `${name?.first} ${name?.last}`,
    email,
    age:dob?.age,
    country:location?.country,
    phone,
    password:login?.password
  }

  const [add, setAdd] = useState([])



  return (
    <main>
      <div className="block bcg-orange">
        <img src={cwSvg} alt="cw" id="cw" />
      </div>
      <div className="block">
        <div className="container">
          <img src={picture?.large} alt="random user" className="user-img" />
          <p className="user-title">My {changeuser} is</p>
          <p className="user-value"> {dataConfigure[changeuser]} </p>
          <div className="values-list">
            <button
              className="icon"
              data-label="name"
              onClick={() => setChangeuser("name")}
            >
              <img src={gender == "female" ? womanSvg : manSvg} alt="user" id="iconImg" />
            </button>
            <button
              className="icon"
              data-label="email"
              onClick={() => setChangeuser("email")}
            >
              <img src={mailSvg} alt="mail" id="iconImg" />
            </button>
            <button
              className="icon"
              data-label="age"
              onClick={() => setChangeuser("age")}
            >
              <img src={gender=="female" ? womanAgeSvg : manAgeSvg} alt="age" id="iconImg" />
            </button>
            <button
              className="icon"
              data-label="street"
              onClick={() => setChangeuser("country")}
            >
              <img src={mapSvg} alt="map" id="iconImg" />
            </button>
            <button
              className="icon"
              data-label="phone"
              onClick={() => setChangeuser("phone")}
            >
              <img src={phoneSvg} alt="phone" id="iconImg" />
            </button>
            <button
              className="icon"
              data-label="password"
              onClick={() => setChangeuser("password")}
            >
              <img src={padlockSvg} alt="lock" id="iconImg" />
            </button>
          </div>
          <div className="btn-group">
            <button
              className="btn"
              type="button"
              onClick={() => getusers(dataConfigure.name)}
            >
              new user
            </button>
            <button
              className="btn"
              type="button"
              onClick={() => setAdd([...add].includes(user) ? [...add] : [...add,user]  )}
            >
              add user
            </button>
          </div>

          <table className="table">
            <thead>
              <tr className="head-tr">
                <th className="th">Firstname</th>
                <th className="th">Email</th>
                <th className="th">Phone</th>
                <th className="th">Age</th>
              </tr>
            </thead>
            <tbody>
              {add?.map((item) => (
                <tr className="body-tr">
                  <td className="th">
                    {item.name?.first} {item.name?.last}
                  </td>
                  <td className="th">{item?.email}</td>
                  <td className="th">{item?.phone}</td>
                  <td className="th">{item.dob?.age}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}></div>
    </main>
  );
}

export default App;
