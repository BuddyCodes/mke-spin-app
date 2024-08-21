import Link from 'next/link';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.heroContainer}>
      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Milwaukee Software Process Improvement Network (SPIN)
        </h1>
        <p className={styles.heroSubtitle}>
          Enhancing the software engineering practice in the Milwaukee region through innovation, collaboration, and excellence.
        </p>
        <div className={styles.heroBoxes}>
          <Link href="/about">
            <div className={styles.heroBox}>
              <h2 className={styles.boxTitle}>About Us</h2>
              <p className={styles.boxText}>
                Learn more about Milwaukee SPIN, our mission, and the community we serve.
              </p>
            </div>
          </Link>
          <Link href="/events">
            <div className={styles.heroBox}>
              <h2 className={styles.boxTitle}>Our Events</h2>
              <p className={styles.boxText}>
                Discover upcoming events, workshops, and seminars hosted by Milwaukee SPIN.
              </p>
            </div>
          </Link>
          <Link href="/sponsors">
            <div className={styles.heroBox}>
              <h2 className={styles.boxTitle}>Sponsors</h2>
              <p className={styles.boxText}>
                Meet the organizations and individuals supporting our initiatives.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
