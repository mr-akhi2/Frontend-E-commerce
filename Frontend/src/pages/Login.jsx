import React, { useState } from "react";
import "./Login.css";
import { toast } from "react-toastify";

const Login = () => {
  const [state, setState] = useState("Login");
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });
  // Handle input changes
  const changeHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Function to handle login

  // const handleLogin = async () => {
  //   // console.log("Login:", formData);
  //   let responsData;
  //   await fetch("http://localhost:6060/login", {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify(formData),
  //   })
  //     .then((resp) => resp.json())
  //     .then((data) => {
  //       responsData = data;
  //       toast.success(responsData);
  //     });

  //   if (responsData.success) {
  //     localStorage.setItem("auth-token", responsData.token);
  //     // console.log(responsData.token);
  //     toast.success("login success");
  //     // send email
  //     // const sendEmail = formData.email;
  //     console.log(formData.email);
  //     await fetch("http://localhost:6060/sendmail", {
  //       method: "POST",
  //       headers: {
  //         Accept: "application/json",
  //         "Conten-Type": "application/json",
  //       },
  //       body: JSON.stringify({ email: formData.email }),
  //     })
  //       .then((resp) => resp.json())
  //       .then((resdata) => {
  //         console.log(resdata);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });

  //     // window.location.replace("/");
  //   } else {
  //     toast.error(responsData.error);
  //   }
  // };

  const handleLogin = async () => {
    try {
      let responsData;
      const response = await fetch(
        "https://frontend-e-commerce-mdgv.onrender.com/login",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      responsData = await response.json();

      if (responsData.success) {
        localStorage.setItem("auth-token", responsData.token);
        toast.success("Login success");
        setTimeout(() => {
          window.location.replace("/");
        }, 1000);

        // Ensure formData.email exists
        if (!formData.email) {
          console.error("Email is missing from formData");
          toast.error("Email is missing.");
          return;
        }

        console.log("Sending email:", formData.email);

        const mailResponse = await fetch(
          "https://frontend-e-commerce-mdgv.onrender.com/sendmail",
          {
            method: "POST",
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json", // Fixed typo
            },
            body: JSON.stringify({ email: formData.email }), // Send as an object
          }
        );

        const resData = await mailResponse.json();
        console.log("Email response:", resData);
      } else {
        toast.error(responsData.error);
      }
    } catch (error) {
      console.error("Error in login:", error);
      toast.error("Something went wrong.");
    }
  };

  // Function to handle signup
  const handleSignup = async () => {
    // console.log("Signup:", formData);
    let responsData;
    let response = await fetch(
      "https://frontend-e-commerce-mdgv.onrender.com/signup",
      {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    )
      .then((resp) => resp.json())
      .then((data) => {
        responsData = data;
        toast.success(responsData);
      });

    if (responsData.success) {
      localStorage.setItem("auth-token", responsData.token);
      setTimeout(() => {
        window.location.replace("/");
      }, 1000);

      //dfghjkl

      // Ensure formData.email exists
      if (!formData.email) {
        console.error("Email is missing from formData");
        toast.error("Email is missing.");
        return;
      }

      // console.log("Sending email:", formData.email);

      const mailResponse = await fetch(
        "https://frontend-e-commerce-mdgv.onrender.com/sendmail",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json", // Fixed typo
          },
          body: JSON.stringify({ email: formData.email }), // Send as an object
        }
      );

      const resData = await mailResponse.json();
      console.log("Email response:", resData);
    } else {
      toast.error(responsData.error);
    }
  };

  return (
    <div className="loginsignup">
      <div className="loinsignup-container">
        <h1>{state}</h1>
        <form className="loginsignup-fields">
          {state === "Sign up" && (
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={changeHandler}
              placeholder="Your Name"
            />
          )}
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={changeHandler}
            placeholder="Your Email"
          />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={changeHandler}
            placeholder="Password"
          />
        </form>
        <button
          onClick={() => {
            state === "Login" ? handleLogin() : handleSignup();
          }}
        >
          Continue
        </button>
        {state === "Sign up" ? (
          <p className="loginsignup-login">
            Already have an account?{" "}
            <span onClick={() => setState("Login")}>Login here</span>
          </p>
        ) : (
          <p className="loginsignup-login">
            Create an account?{" "}
            <span onClick={() => setState("Sign up")}>Click here</span>
          </p>
        )}

        <div className="loginsignup-agree">
          <input type="checkbox" />
          <p>By continuing, I agree to the Terms of Use & Privacy Policy.</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
