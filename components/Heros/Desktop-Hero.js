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
            <Image
              src="/Hero_img.png"
              alt="Kestrels Graphic"
              className={styles.hero_img}
            />
          </Grid>
        </Grid.Container>
      </div>
    </div>
  );
}
