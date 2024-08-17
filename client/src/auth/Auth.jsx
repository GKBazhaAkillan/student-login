import React from "react";
import CustomInput from "../components/CustomInput";
import Custombutton from "../components/Custombutton";
import axios from "axios";


const Auth = () => {
  const [Name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [address, setAddress] = React.useState("");
  const [district, setDistrict] = React.useState("");
  const [state, setState] = React.useState("");
  const [userId, setUserId] = React.useState("");
  const [userData, setUserData] = React.useState("");
  const [show, setShow] = React.useState("login");
  const base_url = "http://localhost:3000";

  const [data, setData] = React.useState([]);

  const handleLogin = async () => {
    try {
      const loginResponse = await axios.post(`${base_url}/loginUser`, {
        user_email: email,
        user_password: password,
      });
      console.log(loginResponse.data, "loginResponse");

      if (loginResponse.data.message == "success") {
        const user = await axios.post(`${base_url}/getUserById`, {
          _id: loginResponse.data.id,
        });
        setData(user.data.data.user_email, "user");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignUp = async () => {
    try {
      const SignUpResponse = await axios.post(`${base_url}/createUser`, {
        user_Name: Name,
        user_email: email,
        user_password: password,
        user_address: address,
        district: district,
        state: state,
      });
      console.log(SignUpResponse, "SignUpResponse");
    } catch (error) {
      console.log(error);
    }
  };

  const UserId = async () => {
    try {
      const response = await axios.get(`${base_url}/getUser/${userId}`);
      setUserData(response.data);
      console.log(response.data, "User Data");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-4 py-20 text-2xl rounded-md bg-amber-600">
      <div className="flex mb-4 text-2xl bg-green-800">
        <button onClick={() => setShow("SignUp")}>SignUp</button>
        <button onClick={() => setShow("Login")}>Login</button>
      </div>
      {/* Login */}
      {show === "Login" && (
        <div className="flex flex-col p-4 font-serif rounded-md bg-rose-600">
          <div className="flex-1">
            <h1>Login</h1>
            <CustomInput
              type="email"
              value={email}
              placeholder={" Email"}
              onChange={(e) => setEmail(e.target.value)}
            />
            <CustomInput
              type="password"
              value={password}
              placeholder={"Password"}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Custombutton button={"Login"} onClick={handleLogin} />
          </div>
         
          <div>
            <>
              <h3>Email:{data}</h3>
            </>
          </div>
        </div>
      )}
      {/* Register */}
      {show === "SignUp" && (
        <div className="flex flex-row p-4 font-mono bg-orange-400 rounded-md">
          <div className="flex-1">
            <h2>Register</h2>
            <CustomInput
              type="text"
              value={Name}
              placeholder={"Enter your Name"}
              onChange={(e) => setName(e.target.value)}
            />
            <CustomInput
              type="email"
              value={email}
              placeholder={"Enter your Email"}
              onChange={(e) => setEmail(e.target.value)}
            />
            <CustomInput
              type="password"
              value={password}
              placeholder={"Password"}
              onChange={(e) => setPassword(e.target.value)}
            />
            <CustomInput
              type="text"
              value={address}
              placeholder={"Enter your Address"}
              onChange={(e) => setAddress(e.target.value)}
            />
            <CustomInput
              type="text"
              value={district}
              placeholder={"District"}
              onChange={(e) => setDistrict(e.target.value)}
            />
            <CustomInput
              type="text"
              value={state}
              placeholder={"State"}
              onChange={(e) => setState(e.target.value)}
            />
            <Custombutton button={"Register"} onClick={handleSignUp} />
          </div>
          <div className="flex-shrink-0 ml-4">
            
          </div>
        </div>
      )}
    </div>
  );
};

export default Auth;
