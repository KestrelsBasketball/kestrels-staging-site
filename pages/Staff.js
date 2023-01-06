import Head from "next/head";
import styles from "../styles/staff.module.css";
import { Grid, Image } from "@nextui-org/react";

import { API_URL } from "@config/index";
import { GraphQLClient } from "graphql-request";

import History from "@/components/Club-History/History";
import Footer from "@/components/Footer/Footer";

export default function Staff(props) {
  const { staffMembers } = props;
  return (
    <div>
      <Head>
        <title>
          Staff Members Kestrels Basketball Club Constitution, Portarlington,
          Laois, Ireland
        </title>
        <meta
          name="description"
          content="Kestrel Staff Members. Kestrels Basketball Club, Portarlington, Laois, Ireland"
        />
        <meta
          name="keywords"
          content="Kestrel Staff, Kestrels Basketball Club, Basketball, Portarlington, Sports, Laois, Ireland"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.container}>
        {staffMembers.map((staffMembers) => (
          <div className={styles.staff_card} key={staffMembers.id}>
            <div className={styles.members_profile_img}>
              <Image
                src={staffMembers.profileImage.url}
                alt="Staff Profile Pic"
              />
            </div>
            <div>
              <h3>{staffMembers.position}</h3>
            </div>
            <div>
              <h4>{staffMembers.name}</h4>
            </div>
            <div>
              <h5>{staffMembers.number}</h5>
            </div>
          </div>
        ))}
      </div>
      <div>
        <History />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const hygraph = new GraphQLClient(`${API_URL}`);
  const { staffMembers } = await hygraph.request(
    `
      {
        staffMembers (orderBy: createdAt_DESC) {
            id
            position
            name
            number
            profileImage {
              height
              size
              url
              width
            }
          }
      }
  
      `
  );
  return {
    props: {
      staffMembers,
    },
    revalidate: 10,
  };
}
