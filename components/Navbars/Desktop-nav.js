import styles from "./desktop.module.css";
import { Dropdown, Image } from "@nextui-org/react";
import Link from "next/link";

export default function Desktopnav() {
  return (
    <div>
      <div className={styles.outer_container}>
        <div className={styles.container}>
          <div className={styles.brand}>
            <Link href="/">
              <Image
                src="./Logo_desktop.png"
                height={54}
                width={87}
                alt="Logo"
              />
            </Link>
          </div>
          <div className={styles.nav_links_container}>
            <ul>
              <li>
                <Link href="/" className={styles.links_styles}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/Fixtures" className={styles.links_styles}>
                  Fixtures
                </Link>
              </li>
              <li>
                <Link href="/Result" className={styles.links_styles}>
                  Results
                </Link>
              </li>
              <li>
                <Link href="/Staff" className={styles.links_styles}>
                  Staff
                </Link>
              </li>
              <li className={styles.dropdown_list}>
                <Dropdown>
                  <Dropdown.Button
                    ripple="false"
                    flat
                    light
                    auto
                    css={{
                      background: "$myGrey",
                      borderRadius: "0",
                      boxShadow: "0",
                      maxWidth: "120px",
                      fontSize: "18px",
                      fontWeights: "medium",
                      color: "$myWhite",
                      "&:hover": {
                        background: "$myGrey",
                        color: "$myRed",
                      },
                      "&:active": {
                        background: "$myGrey",
                        color: "$myWhite",
                      },
                      "&:focus": {
                        background: "$myGrey",
                        color: "$myWhite",
                      },
                    }}
                  >
                    Documents
                  </Dropdown.Button>
                  <Dropdown.Menu css={{ borderRadius: "3px" }}>
                    <Dropdown.Item>Doc one</Dropdown.Item>
                    <Dropdown.Item>Doc Two</Dropdown.Item>
                    <Dropdown.Item>Doc Three</Dropdown.Item>
                    <Dropdown.Item>Doc Four</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
