import styles from "./footer.module.css";
import Link from "next/link";
import { Grid, Row, Col, Image } from "@nextui-org/react";

export default function Footer() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.footer_container}>
          <Grid.Container>
            <Grid xs={4} sm={4}>
              <div className={styles.footer_brand_container}>
                <div className={styles.logo_container}>
                  <Image
                    src="./Logo_footer.png"
                    className={styles.footer_logo}
                    alt="Kestrels Logo"
                  />
                </div>
                <div className={styles.contact_details_container}>
                  <h5>Portarlington Co Laois</h5>
                  <p>
                    Email:
                    <a
                      href="mailto:kestrelsbasketballclub@gmail.com"
                      className={styles.links_footer}
                    >
                      kestrelsbasketballclub@gmail.com
                    </a>
                  </p>
                  <p>
                    Follow us on
                    <a
                      href="https://www.facebook.com/kestrelsbasketballclub/"
                      target="blank"
                      className={styles.links_footer}
                    >
                      Facebook
                    </a>
                  </p>
                </div>
              </div>
            </Grid>
            <Grid xs={8} sm={8}>
              <div className={styles.footer_page_links_container}>
                <div className={styles.helpful_links_container}>
                  <ul>
                    <li>
                      <h5>Helpful Links</h5>
                    </li>
                    <li>
                      <Link
                        href="./Fixtures"
                        className={styles.footer_page_link}
                      >
                        Latest Fixtures
                      </Link>
                    </li>
                    <li>
                      <Link href="./Result" className={styles.footer_page_link}>
                        Latest Results
                      </Link>
                    </li>
                    <li>
                      <Link href="./Staff" className={styles.footer_page_link}>
                        Staff
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className={styles.document_links_container}>
                  <ul>
                    <li>
                      <h5>Documents</h5>
                    </li>
                    <li>
                      <Link href="/Mission" className={styles.doc_links}>
                        Mission Statment
                      </Link>
                    </li>
                    <li>
                      <Link href="/Constitution" className={styles.doc_links}>
                        Club Constitution
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://forms.gle/LMNGMb2oKzyT1Q666"
                        className={styles.doc_links}
                        target="_blank"
                      >
                        Players Code of Conduct
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://forms.gle/LMNGMb2oKzyT1Q666"
                        className={styles.doc_links}
                        target="_blank"
                      >
                        Parents Code of Conduct
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://forms.gle/prEtcnjaJGoX4SDq9"
                        className={styles.doc_links}
                        target="_blank"
                      >
                        Juvenile Reg Form Agreement
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://forms.gle/Bt46LcmZ6PRAxdTM7"
                        className={styles.doc_links}
                        target="_blank"
                      >
                        Senior Reg Form Agreement
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </Grid>
            <div className={styles.footer_year}>
              <div>
                <hr className={styles.hr_border}></hr>
              </div>
              <div className={styles.small_print_container}>
                <div>
                  <small>
                    Copyright© {new Date().getFullYear()} All rights reserved
                  </small>
                </div>
                <div>
                  <small>
                    <Link href="http://shanemurphy.design" target="_blank">
                      Made by SHANE
                    </Link>
                  </small>
                </div>
              </div>
            </div>
          </Grid.Container>
        </div>
      </div>
    </div>
  );
}
