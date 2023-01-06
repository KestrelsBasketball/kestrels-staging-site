import Head from "next/head";
import styles from "../styles/mission.module.css";
import Footer from "@/components/Footer/Footer";

import { API_URL } from "@config/index";
import { GraphQLClient } from "graphql-request";

import { RichText } from "@graphcms/rich-text-react-renderer";

export default function Mission(props) {
  const { missions } = props;
  return (
    <div>
      <Head>
        <title>Mission Statement Kestrels Basketball Club Portarlington, Laois, Ireland</title>
        <meta
          name="description"
          content="Kestrels Basketball Club, Portarlington, Laois, Ireland"
        />
        <meta
          name="keywords"
          content="Kestrels Basketball Club, Basketball, Portarlington, Sports, Laois, Ireland"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.mission_content}>
          {missions.map((missions) => (
            <div key={missions.id}>
              <h2>{missions.heading}</h2>
              <h4>{missions.excerpt}</h4>
              <div className={styles.rich_content_styles}>
                <RichText content={missions.body.raw.children} />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
export async function getStaticProps() {
  const hygraph = new GraphQLClient(`${API_URL}`);
  const { missions } = await hygraph.request(
    `
      {
        missions {
            id
            heading
            excerpt
            body {
              raw
            }
          }
      }
  
      `
  );
  return {
    props: {
      missions,
    },
    revalidate: 10,
  };
}
