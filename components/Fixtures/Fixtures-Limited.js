import styles from "./fixtures.module.css";
import { Grid } from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

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
    TeamB: "Longford Falcons BC",
    Location: "Old Sports Hall, Maynooth PP",
    Date: "Friday 22 November 2022",
    Time: "17:30",
  },
  {
    id: "03",
    tournament: "Juvenile U14 Boys Div 2",
    TeamA: "kestrels",
    TeamB: "Portlaoise Panthers BC",
    Location: "Colaiste losagain, Portarlington",
    Date: "Friday 22 November 2022",
    Time: "20:30",
  },
];

export default function FixturesLimited() {
  return (
    <div>
      <div className={styles.container}>
        <Grid.Container>
          <Grid xs={12} sm={4} md={4}>
            <div className={styles.fixture_graphic_container}>ss</div>
          </Grid>
          <Grid xs={12} sm={8} md={8} justify="center">
            <div className={styles.fixtures_deskop_layout}>
              <ul>
                {fixturesLimited.map((fixture) => {
                  return (
                    <li key={fixture.id}>
                      <div className={styles.fixture_Card}>
                        <div className={styles.fixture_tournament_title}>
                          <h6>{fixture.tournament}</h6>
                        </div>
                        <div className={styles.teams}>
                          <div>
                            <h5>{fixture.TeamA}</h5>
                          </div>
                          <div>
                            <span>VS</span>
                          </div>
                          <div>
                            <h5 className={styles.h5_left_align}>
                              {fixture.TeamB}
                            </h5>
                          </div>
                        </div>
                        <div className={styles.game_details_container}>
                          <div>{fixture.Location}</div>
                          <div>{fixture.Date}</div>
                          <div>{fixture.Time}</div>
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div>
          </Grid>
        </Grid.Container>
        <div className={styles.fixtures_carousel_container}>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true, dynamicBullets: true }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {fixturesLimited.map((fixture) => {
              return (
                <SwiperSlide key={fixture.id}>
                  <div className={styles.carousel_card}>
                    <div className={styles.carousel_teams}>
                      <div>
                        <h6>{fixture.tournament}</h6>
                      </div>
                      <div>
                        <h5>{fixture.TeamA}</h5>
                      </div>
                      <div>
                        <h3>VS</h3>
                      </div>
                      <div>
                        <h5>{fixture.TeamB}</h5>
                      </div>
                    </div>
                    <hr className={styles.solid}></hr>
                    <div className={styles.game_details}>
                      <div>
                        <h4>{fixture.Location}</h4>
                      </div>
                      <div>
                        <h5>{fixture.Date}</h5>
                      </div>
                      <div>
                        <h6>{fixture.Time}</h6>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
