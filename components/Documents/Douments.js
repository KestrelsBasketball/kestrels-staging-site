import Head from "next/head";
import styles from "./douments.module.css";
import { Grid } from "@nextui-org/react";
import Link from "next/link";

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
                <Link href="/Mission">
                  <button>View</button>
                </Link>
              </div>
            </div>
          </Grid>
          <Grid xs={12} sm={6} md={6} className={styles.row_doc_container}>
            <div className={styles.col_doc_container}>
              <div>
                <h3>Club</h3>
              </div>
              <div>
                <h4>Constitution</h4>
              </div>
              <div className={styles.btn_view_doc}>
                <Link href="/Constitution">
                  <button>View</button>
                </Link>
              </div>
            </div>
          </Grid>
        </Grid.Container>
        <Grid.Container>
          <Grid xs={12} sm={6} md={6} className={styles.row_doc_container}>
            <div className={styles.col_doc_container}>
              <div>
                <h3>Parents</h3>
              </div>
              <div>
                <h4>Code of Conduct</h4>
              </div>
              <div className={styles.btn_view_doc}>
                <Link
                  href="https://forms.gle/oNRMAo49Ce8PSvXY7"
                  target="_blank"
                >
                  <button>View</button>
                </Link>
              </div>
            </div>
          </Grid>
          <Grid xs={12} sm={6} md={6}>
            <div className={styles.col_doc_container}>
              <div>
                <h3>Players</h3>
              </div>
              <div>
                <h4>Code of Conduct</h4>
              </div>
              <div className={styles.btn_view_doc}>
                <Link
                  href="https://forms.gle/LMNGMb2oKzyT1Q666"
                  target="_blank"
                >
                  <button>View</button>
                </Link>
              </div>
            </div>
          </Grid>
        </Grid.Container>
      </div>
    </div>
  );
}
