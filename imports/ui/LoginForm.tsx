import { Meteor } from "meteor/meteor";
import React, { useState } from "react";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const submit = (e: any) => {
    e.preventDefault();

    Meteor.loginWithPassword(username, password, (error) => {
      if (error) {
        if (error instanceof Meteor.Error) {
          console.error("Erro ao fazer login:", error.reason);
        } else {
          console.error("Erro ao fazer login:", error.message);
        }
      } else {
        console.log("Login bem-sucedido!");
      }
    });
  };

  return (
    <form onSubmit={submit} className="login-form">
      <div>
        <label htmlFor="username">Username</label>

        <input
          type="text"
          placeholder="Username"
          name="username"
          required
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>

        <input
          type="password"
          placeholder="Password"
          name="password"
          required
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div>
        <button type="submit">Log In</button>
      </div>
    </form>
  );
};
