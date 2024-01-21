import React from "react";
import Link from "next/link";

import styles from "./styles.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <Link href="" target="_blank">
        Footer Place
      </Link>
    </footer>
  );
}

export default Footer;