import { useState } from "react";
import { login, useLoggedIn } from "../cart";

const Login = () => {
  const loggedIn = useLoggedIn();

  const [showLogin, setShowLogin] = useState(false);

  const [username, setUsername] = useState("sally");
  const [password, setPassword] = useState("123");

  console.log({ loggedIn });

  if (loggedIn) return null;

  return (
    <>
      <span onClick={() => setShowLogin((prev) => !prev)}>
        <i className="ri-fingerprint-line text-2xl" id="showLogin"></i>
      </span>

      {showLogin && (
        <div
          className="absolute bg-white p-5 border-2 border-blue-800 rounded-md"
          style={{
            width: 300,
            top: "2rem",
          }}
        >
          <input
            type="text"
            placeholder="User Name"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border text-sm border-gray-400 p-2 rounded-md w-full"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border text-sm border-gray-400 p-2 rounded-md w-full"
          />

          <button
            className="bg-green-900 text-white py-2 px-5"
            onClick={() => login(username, password)}
            id="loginbtn"
          >
            Login
          </button>
        </div>
      )}
    </>
  );
};

export default Login;
