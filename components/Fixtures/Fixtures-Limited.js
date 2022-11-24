import styles from "./fixtures.module.css";
import { Grid, Image, Row, Col } from "@nextui-org/react";

const fixturesLimited = [
  {
    id: "01",
    tournament: "MABB Men’s League",
    TeamA: "kestrels",
    TeamB: "Kildare Gliders BC",
    Location: "Colaiste losagain, Portarlington",
    Date: "Friday 18 November 2022",
    Time: "19:30",
  },
  {
    id: "02",
    tournament: "Juvenile U14 Boys Div 2",
    TeamA: "kestrels",
    TeamB: "Kildare Gliders BC",
    Location: "Colaiste losagain, Portarlington",
    Date: "Friday 22 November 2022",
    Time: "20:30",
  },
  {
    id: "03",
    tournament: "Juvenile U14 Boys Div 2",
    TeamA: "kestrels",
    TeamB: "Kildare Gliders BC",
    Location: "Colaiste losagain, Portarlington",
    Date: "Friday 22 November 2022",
    Time: "20:30",
  },
];

export default function FixturesLimited() {
  return (
    <div className={styles.container}>
      <Grid.Container>
        <Grid xs={12} sm={4} md={4}>
          AAAAA
        </Grid>
        <Grid
          xs={12}
          sm={8}
          md={8}
          justify="center"
          className={styles.fixtures_container}
        >
          <div className={styles.fixture_container}>
            <div className={styles.teams_container}>
              <div>
                <h6>MABB Men’s League</h6>
              </div>
              <div className={styles.teams}>
                <div>
                  <h5>Kestrels</h5>
                </div>
                <div>
                  <span>VS</span>
                </div>
                <div>
                  <h5 className={styles.h5_last}>Kildare Gliders BC</h5>
                </div>
              </div>
            </div>
            <div className={styles.game_details}>
              <div>Colaiste losagain, Portarlington</div>
              <div>Friday 18 November 2022</div>
              <div>19:30</div>
            </div>
          </div>
        </Grid>
      </Grid.Container>
    </div>
  );
}
