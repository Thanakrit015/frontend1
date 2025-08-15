import styles from './Footer.module.css';
import { FaFacebookF, FaYoutube, FaInstagram, FaLine } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles['footer-container']}>
        <div className={styles['footer-top']}>
          
          <div className={styles['contact-info']}>
            <a href="tel:0000000000">โทร : 090-674-2723</a>
            <a href="mailto:email@example.com">bigfather.015@gmail.com</a>
          </div>

          <div className={styles['social-icons']}>
            <a className={`${styles['social-icon']} ${styles.facebook}`} href="https://facebook.com/its.tonkla">
              <FaFacebookF />
            </a>
            <a className={`${styles['social-icon']} ${styles.youtube}`} href="https://youtube.com/@sowbath?si=77U2eKQvmLhJo63Z">
              <FaYoutube />
            </a>
            <a className={`${styles['social-icon']} ${styles.instagram}`} href="https://www.instragram.com/rubbish___06?igsh=MXNrcDY2Y2ZsdWJ6dA%3D%3D&utm_source=qr">
              <FaInstagram />
            </a>
            <a className={`${styles['social-icon']} ${styles.line}`} href="#">
              <FaLine />
            </a>
          </div>
        </div>

        <div className={styles['footer-bottom']}>
          © 2025 Your Company. All rights reserved.
        </div>
      </div>
    </footer>
  );
}