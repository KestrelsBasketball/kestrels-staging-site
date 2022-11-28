import styles from "./douments.module.css";
import { Grid, Row, Col } from "@nextui-org/react";

export default function Douments() {
  return (
    <div>
      <div className={styles.container}>
        <Grid.Container>
          <Grid xs={12} sm={6} md={6} className={styles.row_doc_container}>
            <div className={styles.col_doc_container}>
              <div>
                <h3>Mission</h3>
              </div>
              <div>
                <h4>Statement</h4>
              </div>
              <div className={styles.btn_view_doc}>
                <button>View</button>
              </div>
            </div>
          </Grid>
          <Grid xs={12} sm={6} md={6}>
            <div className={styles.col_doc_container}>
              <div>
                <h3>Registration</h3>
              </div>
              <div>
                <h4>Fees</h4>
              </div>
              <div className={styles.btn_view_doc}>
                <button>View</button>
              </div>
            </div>
          </Grid>
        </Grid.Container>
        {/* <Grid.Container>
          <Row gap={2} className={styles.row_doc_container}>
            <Col className={styles.col_doc_container}>
              <div>
                <h3>Mission</h3>
              </div>
              <div>
                <h4>Statement</h4>
              </div>
              <div className={styles.btn_view_doc}>
                <button>View</button>
              </div>
            </Col>
            <Col className={styles.col_doc_container}>BBBB</Col>
          </Row>
          <Row gap={2}>
            <Col>CCCC</Col>
            <Col>DDDD</Col>
          </Row>
        </Grid.Container> */}
      </div>
    </div>
  );
}
