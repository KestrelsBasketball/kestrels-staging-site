import styles from "./sponsors.module.css";
import { Grid, Image, Row, Col } from "@nextui-org/react";

import { API_URL } from "@config/index";
import { GraphQLClient } from "graphql-request";

export default function Sponsors(props) {
  const { sponsors } = props;
  return (
    <div>
      <div className={styles.container}>
        <Grid.Container justify="center" align="center">
          <Grid xs={12} sm={2} md={3} className={styles.sponsor_img}>
            <Image
              showSkeleton
              src="https://res.cloudinary.com/dk5prkqtv/image/upload/v1669298046/site/Sponsors_graphic_rdpani.png"
              alt="sponsors graphic"
            />
          </Grid>
          <Grid xs={12} sm={3} md={3} className={styles.sponsors_list}>
            <div>
              {sponsors.map((sponsors) => (
                <div key={sponsors.id}>
                  <div>
                    <Image
                      showSkeleton
                      src={sponsors.sponsorLogo.url}
                      height={50}
                      alt={sponsors.name}
                    />
                  </div>
                  <div>
                    <span>{sponsors.name}</span>
                  </div>
                </div>
              ))}
            </div>
          </Grid>
        </Grid.Container>
      </div>
    </div>
  );
}
export async function getStaticProps() {
  const hygraph = new GraphQLClient(`${API_URL}`);
  const { sponsors } = await hygraph.request(
    `
    {
      sponsors {
        name
        id
        sponsorLogo {
          height
          url
          width
        }
      }
    }

    `
  );
  return {
    props: {
      sponsors,
    },
    revalidate: 50,
  };
}
