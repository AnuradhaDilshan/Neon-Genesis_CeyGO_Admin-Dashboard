import React, { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import { useNavigate } from "react-router-dom";

function Login() {
  const [adminData, setAdminData] = useState(null);
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [loginError, setLoginError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAdminData();
  }, []);

  const fetchAdminData = async () => {
    try {
      const adminDocRef = doc(db, "admin", "admin-dashboard");
      const adminDoc = await getDoc(adminDocRef);

      if (adminDoc.exists()) {
        console.log("Document data:", adminDoc.data());
        setAdminData(adminDoc.data());
      } else {
        console.error("No such document!");
      }
    } catch (error) {
      console.error("Error fetching document:", error.message);
    }
  };

  const handleLogin = (event) => {
    event.preventDefault();

    if (
      emailInput === adminData.email &&
      passwordInput === adminData.password
    ) {
      navigate("/dashboard");
    } else {
      setLoginError("Invalid email or password.");
    }
  };

  return (
    <div>
      <h1>Admin Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <label>
            Email:
            <input
              type="email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
              required
            />
          </label>
        </div>
        <div>
          <label>
            Password:
            <input
              type="password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
              required
            />
          </label>
        </div>
        <button type="submit">Login</button>
        {loginError && <p style={{ color: "red" }}>{loginError}</p>}
      </form>
    </div>
  );
}

export default Login;
