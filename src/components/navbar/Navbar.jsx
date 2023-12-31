"use client";

import axios from "axios";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import DarkModeToggle from "../DarkModeToggle/DarkModeToggle";
import styles from "./navbar.module.css";

const links = [
  {
    id: 1,
    title: "Home",
    url: "/",
  },
  {
    id: 3,
    title: "Services",
    url: "/service",
  },
  {
    id: 2,
    title: "Feedback",
    url: "/feedback",
  },
  {
    id: 4,
    title: "About",
    url: "/about",
  },
  {
    id: 5,
    title: "Contact",
    url: "/contact",
  },


];



const Navbar = () => {
  const session = useSession();
  //  console.log(session.data);
  const user = session?.data;
  const email = user?.user?.email;



  const [users, setUsers] = useState([]);

  useEffect(() => {
    const apiUrl = `https://think-best.vercel.app/api/auth/register?email=${email}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setUsers(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, [email]);
  const role = users?.[0]?.role;
  console.log(role)

  return (
    <div className="container">
      <div className="navbar bg-base-100 ">
        <div className="navbar-start w-4/5">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {links.map((link) => (
                <Link key={link.id} href={link.url} className={`${styles.link} mx-2`}>
                  {link.title}
                </Link>
              ))}
            </ul>
          </div>
          <Link href='/' className="btn btn-ghost normal-case text-xl">Prestige~Planner</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <DarkModeToggle />
          <ul className="menu menu-horizontal px-1">
            {links.map((link) => (
              <Link key={link.id} href={link.url} className={`${styles.link} mx-2`}>
                {link.title}
              </Link>
            ))}
            {user ?
              <>
                {role == admin ?
                  <Link href='/admin' className={`${styles.link} mx-2`}>
                    Dashboard
                  </Link> :
                  <Link href='/userdashboard' className={`${styles.link} mx-2`}>
                    Dashboard
                  </Link>
                }

              </>
              :
              ''

            }

          </ul>
        </div>
        {session.status === "authenticated" ?
          <> <button className={`${styles.logout} `} onClick={signOut}>
            Logout
          </button></> : <> <button className={styles.logout} >
            <Link href='/dashboard/login'>
              login
            </Link>
          </button></>

        }
      </div>
    </div>
  );
};

export default Navbar;
