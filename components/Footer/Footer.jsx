import styles from "@/components/Footer/Footer.module.css";
import Image from "next/image";
import Logo from "@/public/ntu-mj-icon.png";
import Link from "next/link";

function Footer() {
  return (
    <div className="container">
      <div className="row">
        <div className={styles.footer}>
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

          <div className={styles.footer__text}>
            Est. 1993 <br />
            Courage | Ownership | Respect | Evolve
          </div>

          <div className={styles.footer__links}>
            <Link
              href="https://www.instagram.com/ntumj/"
              className={styles.link}
            >
              Instagram
            </Link>

            <div className={styles.line}>|</div>

            <Link href="https://t.me/ntumj" className={styles.link}>
              Telegram
            </Link>

            <div className={styles.line}>|</div>

            <Link
              href="https://www.youtube.com/@NTUMJArch"
              className={styles.link}
            >
              Youtube
            </Link>
          </div>

          <div className="footer__copyright">Copyright &copy; 2023 NTU MJ.</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
