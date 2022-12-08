import styles from "../styles/constitution.module.css";
import Footer from "@/components/Footer/Footer";

import { API_URL } from "@config/index";
import { GraphQLClient } from "graphql-request";

import { RichText } from "@graphcms/rich-text-react-renderer";

export default function Constitution(props) {
  const { constitutions } = props;
  return (
    <div>
      <div className={styles.container}>
        {constitutions.map((constitutions) => (
          <div key={constitutions.id}>
            <div>
              <h2>{constitutions.title}</h2>
            </div>
            <div className={styles.rich_content_styles}>
              <RichText content={constitutions.body.raw.children} />
            </div>
          </div>
        ))}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
export async function getStaticProps() {
  const hygraph = new GraphQLClient(`${API_URL}`);
  const { constitutions } = await hygraph.request(
    `
        {
            constitutions {
                id
                title
                body {
                  raw
                }
              }
        }
    
        `
  );
  return {
    props: {
      constitutions,
    },
    revalidate: 10,
  };
}
