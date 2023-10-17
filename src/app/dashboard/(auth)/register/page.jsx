"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Register = () => {
  const [error, setError] = useState(null);
  const [termsAccepted, setTermsAccepted] = useState(false); // New state for the checkbox

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const role = e.target[0].value;
    const name = e.target[1].value;
    const email = e.target[2].value;
    const password = e.target[3].value;

  

    if (!termsAccepted) {
      setError("Please accept the terms and conditions.");
      return;
    }

    try {
      const res = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
          role
        }),
      });

      if (res.status === 201) {
        router.push("/dashboard/login?success=Account has been created");
      } else {
        setError("Registration failed. Please try again.");
      }
    } catch (err) {
      setError("Something went wrong.");
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Create an Account</h1>
      <h2 className={styles.subtitle}>Please sign up to see the dashboard.</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <input
          type="text"
          placeholder="Role"
          value='user'
          readonly          
          className='text-slate-500 text-center'
        />
        <input
          type="text"
          placeholder="Username"
          required
          className={styles.input}
        />
        <input
          type="text"
          placeholder="Email"
          required
          className={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          required
          className={styles.input}
        />
        {/* Checkbox for terms and conditions */}
        <label>
          <input
            type="checkbox"
            checked={termsAccepted}
            onChange={() => setTermsAccepted(!termsAccepted)}
          />
          I accept the <Link href="/terms-and-conditions">Terms and Conditions</Link>
        </label>
        <button className={styles.button}>Register</button>
        {error && <p className={styles.error}>{error}</p>}
      </form>
      <span className={styles.or}>- OR -</span>
      <Link className={styles.link} href="/dashboard/login">
        Login with an existing account
      </Link>
    </div>
  );
};

export default Register;
