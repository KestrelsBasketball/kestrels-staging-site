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
                  <div className={styles.docs_mobile_container}>
                    <ul>
                      <li>KK</li>
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
