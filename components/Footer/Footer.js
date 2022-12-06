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
                  />
                </div>
                <div className={styles.contact_details_container}>
                  <h5>Portarlington Co Laois</h5>
                  <p>
                    Email:
                    <a
                      href="mailto:kestrelsbaskballclub@gmail.com"
                      className={styles.links_footer}
                    >
                      kestrelsbaskballclub@gmail.com
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
                      <Link
                        href="https://en.wikipedia.org/wiki/Next.js"
                        className={styles.doc_links}
                        target="_blank"
                      >
                        Mission Statment
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://en.wikipedia.org/wiki/Next.js"
                        className={styles.doc_links}
                        target="_blank"
                      >
                        Registration Free
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://en.wikipedia.org/wiki/Next.js"
                        className={styles.doc_links}
                        target="_blank"
                      >
                        Players Code of Conduct
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://en.wikipedia.org/wiki/Next.js"
                        className={styles.doc_links}
                        target="_blank"
                      >
                        Parents Code Constitution
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://en.wikipedia.org/wiki/Next.js"
                        className={styles.doc_links}
                        target="_blank"
                      >
                        Juvenile Reg Form Agreement
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="https://en.wikipedia.org/wiki/Next.js"
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
                  <small>Made by SHANE</small>
                </div>
              </div>
            </div>
          </Grid.Container>
        </div>
      </div>
    </div>
  );
}
