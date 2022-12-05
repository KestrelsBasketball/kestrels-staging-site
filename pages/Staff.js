import styles from "../styles/staff.module.css";
import { Grid, Image } from "@nextui-org/react";

import { API_URL } from "@config/index";
import { GraphQLClient } from "graphql-request";

import History from "@/components/Club-History/History";

export default function Staff(props) {
  const { staffMembers } = props;
  return (
    <div>
      <div className={styles.container}>
        {staffMembers.map((staffMembers) => (
          <div className={styles.staff_card} key={staffMembers.id}>
            <div className={styles.members_profile_img}>
              <Image src={staffMembers.profileImage.url} />
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
