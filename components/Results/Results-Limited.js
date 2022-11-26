import styles from "./resultslimited.module.css";
import { Grid, Image } from "@nextui-org/react";

const resultsLimited = [
  {
    id: "01",
    TeamA: "kestrels",
    TeamB: "Kildare Gliders BC",
    TeamScoreA: "38",
    TeamScoreB: "40",
    Tournament: "Juvenile U14 Boys Div 2",
  },
  {
    id: "02",
    TeamA: "kestrels",
    TeamB: "Longford Falcons BC",
    TeamScoreA: "38",
    TeamScoreB: "40",
    Tournament: "MABB Men’s League",
  },
  {
    id: "03",
    TeamA: "kestrels",
    TeamB: "Portlaoise Panthers BC",
    TeamScoreA: "45",
    TeamScoreB: "30",
    Tournament: "Juvenile U14 Boys Div 2",
  },
];
export default function ResultsLimited() {
  return (
    <div>
      <div className={styles.container}>
        <Grid.Container>
          <Grid xs={12} sm={4} md={4} justify="center">
            AAAA
          </Grid>
          <Grid xs={12} sm={8} md={8} justify="center">
            <div className={styles.results_desktop_container}>
              <ul>
                {resultsLimited.map((results) => {
                  return (
                    <li key={results.id}>
                      <div className={styles.result_card}>
                        <div className={styles.Tournament_title}>
                          <h6>{results.Tournament}</h6>
                        </div>
                        <div className={styles.results_container}>
                          <div>
                            <h5>{results.TeamA}</h5>
                          </div>
                          <div className={styles.scores}>
                            <h4>{results.TeamScoreA}</h4>
                            <h4>-</h4>
                            <h4>{results.TeamScoreB}</h4>
                          </div>
                          <div>
                            <h5>{results.TeamB}</h5>
                          </div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Grid>
        </Grid.Container>
      </div>
    </div>
  );
}
