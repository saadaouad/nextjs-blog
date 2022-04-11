import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";

import Date from "../components/date";
import Layout, { siteTitle } from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import utilStyles from "../styles/utils.module.css";

type Props = {
  allPostsData: {
    date: string;
    title: string;
    id: string
  }[]
};

function Home({ allPostsData }: Props) {

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          I am Saad Aouad thirty years old, born and raised in Casablanca
          Morocco. I'm a Front-end Engineer with more than 5 years of experience
          in web development. I help companies grow and scale through software
          engineering practices so they can react to changes faster. Technically
          astute and versatile with ability to quickly learn, master, and
          leverage new technologies to meet business needs. I like solving real
          challenging problems and sharing experiences with other people. Fluent
          in English, French and Arabic with excellent communication and
          interpersonal skills. Strong work ethic, analytical mindset and
          technical skills to drive product success and process efficiency.
        </p>
        <p>
          (This is a sample website - you’ll be building a site like this in{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData
    }
  };
}

export default Home;
