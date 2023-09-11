import styles from "@/components/Nav/Nav.module.css";
import Image from "next/image";
import Logo from "@/public/ntu-mj-icon.png";
import Link from "next/link";

function Nav() {
  return (
    <div className={styles.nav}>
      <figure className={styles.logo__wrapper}>
        <Image
          src={Logo}
          width={48}
          height={48}
          alt="MJ Logo"
          className={styles.nav__logo}
          priority
        />
      </figure>

      <div className={styles.link__wrapper}>
        <Link href="/" className={styles.nav__link}>
          Home
        </Link>

        <Link href="/about" className={styles.nav__link}>
          About
        </Link>
        
        <Link href="/events" className={styles.nav__link}>
          Events
        </Link>
      </div>

      <div></div>
    </div>
  );
}

export default Nav;
