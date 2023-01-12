import Head from "next/head";
import styles from "../styles/resultspage.module.css";
import { Grid } from "@nextui-org/react";
import JoinClub from "@/components/Join-Club/Join-Club";
import Sponsors from "@/components/Sponsors/sponsors";
import Footer from "@/components/Footer/Footer";

import { API_URL } from "@config/index";
import { GraphQLClient } from "graphql-request";

export default function Results(props) {
  const { result } = props;
  const { sponsors } = props;
  return (
    <div>
      <Head>
        <title>
          Latest Results Kestrels Basketball Club Portarlington, Co Offaly, Ireland
        </title>
        <meta
          name="description"
          content="Kestrels Results, Kestrels Basketball Club, Portarlington, Co Offaly, Ireland"
        />
        <meta
          name="keywords"
          content="Results, Kestrels Basketball Club, Basketball, Portarlington, Sports, Laois, Ireland"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.results_title_header_container}>
        <h4>Latast</h4>
        <h3>Results</h3>
      </div>
      <div className={styles.container_desktop_layout}>
        <div>
          {result.lenght === 0 && <h3>NO Results</h3>}
          <ul>
            {result.map((result) => (
              <li key={result.id}>
                <div className={styles.result_outer_container}>
                  <div className={styles.scores_content_container}>
                    <div>
                      <h5>{result.teamA}</h5>
                    </div>
                    <div className={styles.scores_container}>
                      <div>
                        <h6>{result.tournament}</h6>
                      </div>
                      <div className={styles.score_values}>
                        <h4>{result.teamAScore}</h4>
                        <h4>-</h4>
                        <h4>{result.teamBScore}</h4>
                      </div>
                    </div>
                    <div>
                      <h5 className={styles.align_right}>{result.teamB}</h5>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className={styles.results_mobile_container}>
        <ul>
          {result.map((result) => (
            <li key={result.id}>
              <div className={styles.results_card_mobile}>
                <div>
                  <h6>{result.tournament}</h6>
                </div>
                <div className={styles.Team_A}>
                  <div>
                    <h5>{result.teamA}</h5>
                  </div>
                  <div>
                    <h5>{result.teamAScore}</h5>
                  </div>
                </div>
                <div>
                  <hr></hr>
                </div>
                <div className={styles.Team_B}>
                  <div>
                    <h5>{result.teamB}</h5>
                  </div>
                  <div>
                    <h5>{result.teamBScore}</h5>
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
  const { result, sponsors } = await hygraph.request(
    `
      {
        result(orderBy: createdAt_DESC) {
          id
          teamA
          teamAScore
          teamB
          teamBScore
          tournament
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
      result,
      sponsors,
    },
    revalidate: 10,
  };
}
