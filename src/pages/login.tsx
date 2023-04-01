import { FormEvent, useState } from "react";
import jwt from "jsonwebtoken";
import Head from "next/head";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("You are not logged in");
  const [secret, setSecret] = useState("");

  async function submitForm() {
    const dataSent = await fetch("http://localhost:3000/api/login", {
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

      const dataSent = await fetch("http://localhost:3000/api/secret", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token,
        }),
      }).then((t) => t.json());

      if (dataSent.secretAdminCode) setSecret(dataSent.secretAdminCode);
      else setSecret("Nothing available");
    } else {
      setMessage("Something went wrong");
    }
  }

  return (
    <>
      <Head>
        <title>Ninja List | Login</title>
      </Head>
      <div className="p-8 m-8 space-y-6 items-center flex flex-col text-center">
        <h1>{message}</h1>
        <h2>Secret: {secret}</h2>
        <form className="space-y-4">
          <label htmlFor="username">Username:</label>
          <input
            className="p-2 ml-4 border"
            type="text"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <br />
          <label htmlFor="password">Password:</label>
          <input
            className="p-2 ml-4 border"
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <input
            type="button"
            value="Submit"
            onClick={submitForm}
            className=" mt-5 rounded-md border border-blue-600 px-3.5 py-1.5 text-base font-semibold leading-7 text-blue-600 hover:bg-blue-300"
          />
        </form>
      </div>
    </>
  );
};

export default Login;
