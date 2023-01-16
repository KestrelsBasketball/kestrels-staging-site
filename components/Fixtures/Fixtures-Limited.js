import styles from "./fixtures.module.css";
import { Grid, Image } from "@nextui-org/react";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { format } from "date-fns";

import { API_URL } from "@config/index";
import { GraphQLClient } from "graphql-request";

export default function FixturesLimited(props) {
  const { fixtures } = props;
  return (
    <div>
      <div className={styles.container}>
        <Grid.Container>
          <Grid xs={12} sm={4} md={4} justify="center">
            <div className={styles.fixture_graphic_container_desktop}>
              <div>
                <h4>Upcoming</h4>
                <h3>Fixtures</h3>
              </div>
            </div>
          </Grid>
          <Grid xs={12} sm={8} md={8} className={styles.fixtures_deskop_layout}>
            <div className={styles.fixtures_deskop_layout}>
              <ul>
                {fixtures.map((fixtures, id) => (
                  <li key={fixtures.id}>
                    <div className={styles.fixture_Card}>
                      <div className={styles.fixture_tournament_title}>
                        <h6>{fixtures.tournament}</h6>
                      </div>
                      <div className={styles.teams}>
                        <div>
                          <h5>{fixtures.teamA}</h5>
                        </div>
                        <div>
                          <span>VS</span>
                        </div>
                        <div>
                          <h5 className={styles.h5_left_align}>
                            {fixtures.teamB}
                          </h5>
                        </div>
                      </div>
                      <div className={styles.game_details_container}>
                        <div>{fixtures.location}</div>
                        <div>
                          {format(new Date(fixtures.date), "dd-LLL-yyyy")}
                        </div>
                        <div>{fixtures.time}</div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Grid>
          <div className={styles.view_more_btn_container}>
            <Link href="/Fixtures" className={styles.view_more_link}>
              <buuton>View More</buuton>
            </Link>
          </div>
        </Grid.Container>
        <div className={styles.fixtures_carousel_container}>
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            pagination={{ clickable: true, dynamicBullets: true }}
            modules={[Pagination]}
            className="mySwiper"
          >
            {fixtures.map((fixtures, id) => (
              <SwiperSlide key={fixtures.id}>
                <div className={styles.carousel_card}>
                  <div className={styles.carousel_teams}>
                    <div>
                      <h6>{fixtures.tournament}</h6>
                    </div>
                    <div>
                      <h5>{fixtures.teamA}</h5>
                    </div>
                    <div>
                      <h3>VS</h3>
                    </div>
                    <div>
                      <h5>{fixtures.teamB}</h5>
                    </div>
                  </div>
                  <hr className={styles.solid}></hr>
                  <div className={styles.game_details}>
                    <div>
                      <h4>{fixtures.location}</h4>
                    </div>
                    <div>
                      <h5>{format(new Date(fixtures.date), "qo MMM, yyyy")}</h5>
                    </div>
                    <div>
                      <h6>{fixtures.time}</h6>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={styles.view_more_btn_mobile_container}>
            <Link href="/Fixtures" className={styles.view_more_link}>
              <buuton>View More</buuton>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export async function getStaticProps() {
  const hygraph = new GraphQLClient(`${API_URL}`);
  const { fixtures } = await hygraph.request(
    `
    {
      fixtures(orderBy: createdAt_ASC) 
      {
        id
        teamA
        teamB
        tournament
        location
        date
        time
      }
    }

    `
  );
  return {
    props: {
      fixtures,
    },
    revalidate: 10,
  };
}
