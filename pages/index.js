import Head from "next/head";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>People List | Home</title>
        <meta name="keywords" content="people" />
      </Head>
      <div>
        <h1 className={styles.title}>My Next JS app</h1>
        <p className={styles.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo cumque
          quas asperiores ullam minima in, error enim iusto, sequi reiciendis,
          perspiciatis exercitationem dolorem nobis distinctio similique fugit
          natus accusamus? Beatae, ipsa ratione! Officiis maiores illo tempora
          quam? Mollitia, repudiandae eveniet?
        </p>
      </div>
    </>
  );
}
