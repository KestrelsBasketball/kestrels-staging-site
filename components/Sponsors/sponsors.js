import styles from "./sponsors.module.css";
import { Grid, Image, Row, Col } from "@nextui-org/react";

const sponsors = [
  {
    id: "01",
    Image:
      "https://res.cloudinary.com/dk5prkqtv/image/upload/v1669220655/site/Sponsor_blank_img_bbewqs.jpg",
    Name: "Sponsor A",
    WebsiteUrl: "www.ggogle.com",
  },
  {
    id: "02",
    Image:
      "https://res.cloudinary.com/dk5prkqtv/image/upload/v1669220655/site/Sponsor_blank_img_bbewqs.jpg",
    Name: "Sponsor B",
    WebsiteUrl: "www.ggogle.com",
  },
  {
    id: "03",
    Image:
      "https://res.cloudinary.com/dk5prkqtv/image/upload/v1669220655/site/Sponsor_blank_img_bbewqs.jpg",
    Name: "Sponsor C",
    WebsiteUrl: "www.ggogle.com",
  },
];

export default function Sponsors() {
  return (
    <div>
      <div className={styles.container}>
        <Grid.Container>
          <Grid xs={12} sm={3} md={3} className={styles.sponsor_img}>
            <Image
              showSkeleton
              src="https://res.cloudinary.com/dk5prkqtv/image/upload/v1669298046/site/Sponsors_graphic_rdpani.png"
              alt="sponsors graphic"
            />
          </Grid>
          <Grid xs={12} sm={9} md={9} className={styles.sponsors_list}>
            <Row gap={1}>
              {sponsors.map((sponsor) => {
                return (
                  <Col justify="center" align="center" key={sponsor.id}>
                    <div>
                      <Image
                        showSkeleton
                        src={sponsor.Image}
                        height={50}
                        alt={sponsor.Name}
                      />
                    </div>
                    <div>
                      <span>{sponsor.Name}</span>
                    </div>
                  </Col>
                );
              })}
            </Row>
          </Grid>
        </Grid.Container>
      </div>
    </div>
  );
}
