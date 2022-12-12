import styles from "./mobileNav.module.css";
import { Navbar, Image, Link } from "@nextui-org/react";
export default function MobileNav() {
  return (
    <div>
      <div className={styles.nav_mobile_container}>
        <div className={styles.nav_mobile_inner_container}>
          <Navbar
            variant="sticky"
            css={{
              $$navbarBackgroundColor: "$mobile_background_color",
              $$navbarBlurBackgroundColor: "#212222",
            }}
          >
            <Navbar.Brand>
              <Navbar.Toggle
                aria-label="toggle navigation"
                css={{ $$navbarTextColor: "#ffff" }}
              />
              <div className={styles.mobile_logo}>
                <div className={styles.mobile_logo_inner_container}>
                  <Link href="./">
                    <Image src="/Logo_mobile.png" alt="Kestrels Logo" />
                  </Link>
                </div>
              </div>
            </Navbar.Brand>
            <Navbar.Collapse
              css={{
                $$navbarListBlurBackgroundColor: "#1c1c1c",
                line: "#ffff",
              }}
            >
              <Navbar.CollapseItem>
                <div className={styles.mobile_nav_links_container}>
                  <Link
                    href="/"
                    css={{
                      color: "$myWhite",
                      "&:hover": {
                        color: "$myRed",
                      },
                      "&:visited": {
                        color: "$myWhite",
                      },
                      "&:focus": {
                        color: "$myWhite",
                      },
                    }}
                    className={styles.mobile_nav_link}
                  >
                    Home
                  </Link>
                  <Link
                    href="/Fixtures"
                    css={{
                      color: "$myWhite",
                      "&:hover": {
                        color: "$myRed",
                      },
                      "&:visited": {
                        color: "$myWhite",
                      },
                      "&:focus": {
                        color: "$myWhite",
                      },
                    }}
                    className={styles.mobile_nav_link}
                  >
                    Fixtures
                  </Link>
                  <Link
                    href="/Result"
                    css={{
                      color: "$myWhite",
                      "&:hover": {
                        color: "$myRed",
                      },
                      "&:visited": {
                        color: "$myWhite",
                      },
                      "&:focus": {
                        color: "$myWhite",
                      },
                    }}
                    className={styles.mobile_nav_link}
                  >
                    Results
                  </Link>
                  <Link
                    href="/Staff"
                    css={{
                      color: "$myWhite",
                      "&:hover": {
                        color: "$myRed",
                      },
                      "&:visited": {
                        color: "$myWhite",
                      },
                      "&:focus": {
                        color: "$myWhite",
                      },
                    }}
                    className={styles.mobile_nav_link}
                  >
                    Staff
                  </Link>
                  <div>Documents</div>
                  <div className={styles.docs_links_mobile_container}>
                    <ul>
                      <li>
                        <Link href="/Mission">Mission Statement</Link>
                      </li>
                      <li>
                        <Link href="/Constitution">Club Constitution</Link>
                      </li>
                      <li>
                        <Link
                          href="https://forms.gle/LMNGMb2oKzyT1Q666"
                          target="_blank"
                        >
                          Players Code of Conduct
                        </Link>
                      </li>
                      <li>
                        <Link
                          href="https://forms.gle/oNRMAo49Ce8PSvXY7"
                          target="_blank"
                          className={styles.dropdown_links}
                        >
                          Parents Code of Conduct
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </Navbar.CollapseItem>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </div>
  );
}
