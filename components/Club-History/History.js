import styles from "./history.module.css";
import { Grid, Image } from "@nextui-org/react";

export default function History() {
  return (
    <div>
      <div className={styles.container}>
        <Grid.Container>
          <Grid xs={12} sm={5} md={5} justify="center">
            <div>
              <Image
                src="https://res.cloudinary.com/dk5prkqtv/image/upload/v1669721353/site/jersey_history_01_rkvukx.png"
                alt="Kestrels team jersey"
              />
            </div>
          </Grid>
          <Grid xs={12} sm={7} md={7}>
            <div className={styles.history_content_container}>
              <div>
                <Image
                  src="/Kestrel_History.png"
                  height={200}
                  alt="Kestrel text graphic"
                  className={styles.text_heading_img}
                />
              </div>
              <div className={styles.text_content_styles}>
                <h2>About Official Kestrels Basketball Club</h2>
                <h5>
                  Kestrels was founded in 2007 and has been growing steadily
                  ever since, with 180 members at present.
                </h5>
                <p>
                  Kestrels currently has teams from U8s up to U20s for both boys
                  and girls, as well as a senior ladies team. Kestrels compete
                  in the Midlands League competition, and we currently have our
                  U17 and our U20 boys competing in the Dublin League.
                </p>
                <p>
                  Anyone interested in becoming a member of any of the teams,
                  from U8 to senior level are invited to get in contact with our
                  Head Coach.
                </p>
              </div>
            </div>
          </Grid>
        </Grid.Container>
      </div>
    </div>
  );
}
