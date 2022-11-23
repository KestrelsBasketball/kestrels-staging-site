import styles from "./desktop-hero.module.css";
import { Grid, Image } from "@nextui-org/react";
export default function DesktopHero() {
  return (
    <div>
      <div className={styles.container}>
        <Grid.Container>
          <Grid xs={12} sm={6} md={6} className={styles.hero_text}>
            <div>
              <h1>Kestrels</h1>
              <h2>Basketball</h2>
              <h3>Club Portarlington</h3>
              <button className={styles.btn_join}>Join the Club</button>
            </div>
          </Grid>
          <Grid xs={12} sm={6} md={6} className={styles.hero_image}>
            <img
              src="/Hero_img_1400.png"
              srcSet="
              /Hero_img_650.png 650w,
              /Hero_img_959.png 960w,
              /Hero_img_1400.png 1400w
              "
              alt="Kestrel Basketball Club, Ireland"
            />
          </Grid>
        </Grid.Container>
      </div>
    </div>
  );
}
