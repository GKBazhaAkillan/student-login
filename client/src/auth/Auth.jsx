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
  const [show, setShow] = React.useState("login");
  const base_url = "http://localhost:3000";

  const handleLogin = async () => {
    try {
      const loginResponse = await axios.post(`${base_url}/loginUser`, {
        user_email: email,
        user_password: password,
      });
      console.log(loginResponse, "loginResponse");
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

  return (
    <div class="items-center flex justify-center py-20 flex-col text-2xl bg-amber-600 flex-space-x-4 rounded-md p-4">
      <div className="flex text-2xl bg-green-800">
        <button onClick={() => setShow("SignUp")}>SignUp </button>
        <button onClick={() => setShow("Login")}>Login</button>
      </div>
      {/* Login */}
      {show == "Login" && (
        <div className="text-2xl bg-rose-600">
          <h1>Login </h1>
          <CustomInput
            type="email"
            value={email}
            placeholder={"Email"}
            onChange={(e) => setEmail(e.target.value)}
          />
          <CustomInput
            type="password"
            value={password}
            placeholder={"password"}
            onChange={(e) => setPassword(e.target.value)}
          />
          

          <Custombutton button={"Login"} onClick={handleLogin} />
        </div>
      )}

      {/* {Register} */}
      {show == "SignUp" && (
        <div className="bg-orange-400 ">
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
            placeholder={"Email"}
            onChange={(e) => setEmail(e.target.value)}
          />
          <CustomInput
            type="password"
            value={password}
            placeholder={"password"}
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
            placeholder={"district"}
            onChange={(e) => setDistrict(e.target.value)}
          />
          <CustomInput
            type="text"
            value={state}
            placeholder={"state"}
            onChange={(e) => setState(e.target.value)}
          />
          <Custombutton button={"Register"} onClick={handleSignUp} />
        </div>
      )}
    </div>
  );
};

export default Auth;
