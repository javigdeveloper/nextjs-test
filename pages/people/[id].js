import Head from "next/head";
import Link from "next/link";
import styles from "../../styles/Person.module.css";

export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((person) => {
    return {
      params: { id: person.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();

  return {
    props: { person: data },
  };
};

const Details = ({ person }) => {
  return (
    <>
      <Head>
        <title>People List | Details</title>
        <meta name="keywords" content="people" />
      </Head>
      <div>
        <h1>{person.name}</h1>
        <p>{person.email}</p>
        <p>{person.website}</p>
        <p>{person.address.city}</p>
      </div>
      <Link href="/people">
        <a className={styles.backToPeople}>Back to people</a>
      </Link>
    </>
  );
};

export default Details;
