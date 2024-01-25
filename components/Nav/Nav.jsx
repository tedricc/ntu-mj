"use client";

import styles from "@/components/Nav/Nav.module.css";
import Image from "next/image";
import Logo from "@/public/ntu-mj-icon.png";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

function Nav() {
  const [menu, setMenu] = useState(false);

  function handleMenu() {
    if (!menu) {
      setMenu(true);
      console.log("open menu");
    } else {
      setMenu(false);
      console.log("close menu");
    }
  }

  return (
    <>
      <>
        <div
          className={
            !menu ? styles.menu : `${styles.menu} ${styles.menu__active}`
          }
        >
          <div className={styles.menu__links}>
            <Link href="/" className={styles.menu__link} onClick={handleMenu}>
              Home
            </Link>
            <Link
              href="/about"
              className={styles.menu__link}
              onClick={handleMenu}
            >
              About
            </Link>
            <Link
              href="/events"
              className={styles.menu__link}
              onClick={handleMenu}
            >
              DTT 2023
            </Link>
            <Link
              href="/alumni"
              className={styles.menu__link}
              onClick={handleMenu}
            >
              Alumni
            </Link>
          </div>
        </div>
      </>

      <div className="container">
        <div className="row">
          <div className={styles.nav}>
            <Link href="/" className={styles.home}>
              <figure className={styles.logo__wrapper}>
                <Image
                  src={Logo}
                  width={48}
                  height={48}
                  alt="MJ Logo"
                  className={styles.logo}
                  priority
                />
              </figure>
              <div className={styles.title}>NTU MJ</div>
            </Link>

            <div className={styles.link__wrapper}>
              <Link href="/" className={styles.link}>
                Home
              </Link>

              <Link href="/about" className={styles.link}>
                About
              </Link>

              <Link href="/events" className={styles.link}>
                DTT 2023
              </Link>

              <Link href="/alumni" className={styles.link}>
                Alumni
              </Link>

              <div className={styles.menu__btn}>
                <GiHamburgerMenu onClick={handleMenu} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
