import styles from "@/components/Nav/Nav.module.css";
import Image from "next/image";
import Logo from "@/public/ntu-mj-icon.png";
import Link from "next/link";

function Nav() {
  return (
    <div className="container">
      <div className="row">
        <div className={styles.nav}>
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

          <div className={styles.link__wrapper}>
            <Link href="/" className={styles.link}>
              Home
            </Link>

            <Link href="/about" className={styles.link}>
              About
            </Link>

            <Link href="/events" className={styles.link}>
              Events
            </Link>

            <Link href="/alumni" className={styles.link}>
              Alumni
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
