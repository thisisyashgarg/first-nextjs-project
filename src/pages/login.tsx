import { FormEvent, useState } from "react";
import jwt from "jsonwebtoken";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("You are not logged in");

  async function submitForm() {
    const dataSent = await fetch("http:localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((t) => t.json());

    const token: string = dataSent.token;
    if (token) {
      const json = jwt.decode(token) as { [key: string]: string };
      setMessage(
        `Welcome ${json.username} and you are ${
          json.admin ? "admin" : "not an admin"
        }`
      );
    } else {
      setMessage("Something went wrong");
    }
  }

  return (
    <div>
      <h1>{message}</h1>
      <form method="POST">
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit" onSubmit={submitForm}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default Login;
