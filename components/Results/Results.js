import styles from "./resultslimited.module.css";
import { Grid } from "@nextui-org/react";
import Link from "next/link";
import { API_URL } from "@config/index";
import { GraphQLClient } from "graphql-request";

export default function Results(props) {
  const { result } = props;
  return (
    <div>
      <div className={styles.container}>
        <Grid.Container>
          <Grid
            xs={12}
            sm={8}
            md={8}
            className={styles.results_container_order}
          >
            <div className={styles.results_desktop_container}>
              <ul>
                {result.map((result) => (
                  <li key={result.id}>
                    <div className={styles.result_card}>
                      <div className={styles.Tournament_title}>
                        <h6>{result.tournament}</h6>
                      </div>
                      <div className={styles.results_container}>
                        <div>
                          <h5>{result.teamA}</h5>
                        </div>
                        <div className={styles.scores}>
                          <h4>{result.teamAScore}</h4>
                          <h4>-</h4>
                          <h4>{result.teamBScore}</h4>
                        </div>
                        <div className={styles.align_right}>
                          <h5>{result.teamB}</h5>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <div className={styles.view_more_btn_container}>
                <Link href="/Result">
                  <button>View More</button>
                </Link>
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
          </Grid>
          <Grid
            xs={12}
            sm={4}
            md={4}
            justify="center"
            className={styles.latast_container_order}
          >
            <div className={styles.latest_heading}>
              <div>
                <h4>latest</h4>
                <h3>Results</h3>
              </div>
            </div>
          </Grid>
        </Grid.Container>
      </div>
    </div>
  );
}
export async function getStaticProps() {
  const hygraph = new GraphQLClient(`${API_URL}`);
  const { result } = await hygraph.request(
    `
    {
      result {
        id
        publishedAt
        teamA
        teamAScore
        teamB
        teamBScore
        tournament
      }
    }

    `
  );
  return {
    props: {
      result,
    },
    revalidate: 10,
  };
}
