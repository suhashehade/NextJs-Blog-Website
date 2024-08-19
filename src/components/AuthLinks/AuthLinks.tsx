"use client";
import Link from "next/link";
import styles from "./authLinks.module.css";
import { signOut, useSession } from "next-auth/react";

const AuthLinks = () => {
  const { data, status } = useSession();

  return (
    <>
      {status === "unauthenticated" ? (
        <Link href='/login' className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href='/write'>Write</Link>
          <span className={styles.link} onClick={() => signOut()}>
            Logout
          </span>
        </>
      )}
    </>
  );
};

export default AuthLinks;
