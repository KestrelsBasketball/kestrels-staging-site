import Head from "next/head";
import styles from "../styles/fixturespage.module.css";
import JoinClub from "@/components/Join-Club/Join-Club";
import Sponsors from "@/components/Sponsors/sponsors";
import Footer from "@/components/Footer/Footer";

import { API_URL } from "@config/index";
import { GraphQLClient } from "graphql-request";
import { format } from "date-fns";

export default function Fixtures(props) {
  const { fixtures } = props;
  const { sponsors } = props;

  return (
    <div>
      <Head>
        <title>
          Latest Fixtures Kestrels Basketball Club Portarlington, Ireland
        </title>
        <meta
          name="description"
          content="Kestrels Fixtures, Kestrels Basketball Club, Portarlington, Ireland"
        />
        <meta
          name="keywords"
          content="Results, Kestrels Basketball Club, Basketball, Portarlington, Sports, Offaly, Ireland"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.fixture_title_header_container}>
        <h4>Upcoming</h4>
        <h3>Fixtures</h3>
      </div>
      <div className={styles.fixtures_desktop_layout}>
        <ul>
          {fixtures.map((fixtures) => (
            <li key={fixtures.id}>
              <div>
                <div className={styles.fixture_container}>
                  <div>
                    <h4>{fixtures.teamA}</h4>
                  </div>
                  <div className={styles.fixtures_values}>
                    <div>
                      <h6>{fixtures.tournament}</h6>
                    </div>
                    <div>
                      <h5>VS</h5>
                    </div>
                  </div>
                  <div>
                    <h4 className={styles.align_right}>{fixtures.teamB}</h4>
                  </div>
                </div>
                <div className={styles.fixtures_details}>
                  <div>
                    <h6>{fixtures.location}</h6>
                  </div>
                  <div>
                    <h6>{format(new Date(fixtures.date), "dd-LLL-yyyy")}</h6>
                  </div>
                  <div>
                    <h6>{fixtures.time}</h6>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.fixtures_mobile_layout}>
        <ul>
          {fixtures.map((fixtures) => (
            <li key={fixtures.id}>
              <div className={styles.fixtures_card_container}>
                <div>
                  <h6>{fixtures.tournament}</h6>
                </div>
                <div>
                  <h5>{fixtures.teamA}</h5>
                </div>
                <div>
                  <h5>VS</h5>
                </div>
                <div>
                  <h5>{fixtures.teamB}</h5>
                </div>
                <div className={styles.divider}>
                  <hr></hr>
                </div>
                <div className={styles.game_details}>
                  <div>
                    <h4>{fixtures.location}</h4>
                  </div>
                  <div>
                    <h5>{format(new Date(fixtures.date), "dd-LLL-yyyy")}</h5>
                  </div>
                  <div>
                    <h4>{fixtures.time}</h4>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <JoinClub />
      </div>
      <div>
        <Sponsors sponsors={sponsors} />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const hygraph = new GraphQLClient(`${API_URL}`);
  const { fixtures, sponsors } = await hygraph.request(
    `
    {
      fixtures(orderBy: createdAt_DESC) 
      {
        id
        teamA
        teamB
        tournament
        location
        date
        time
      }
      sponsors {
        id
        name
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
      fixtures,
      sponsors,
    },
    revalidate: 10,
  };
}
