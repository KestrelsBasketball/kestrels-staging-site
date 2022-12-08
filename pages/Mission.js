import styles from "../styles/mission.module.css";
import Footer from "@/components/Footer/Footer";

import { API_URL } from "@config/index";
import { GraphQLClient } from "graphql-request";

import { RichText } from "@graphcms/rich-text-react-renderer";

export default function Mission(props) {
  const { missions } = props;
  return (
    <div>
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
