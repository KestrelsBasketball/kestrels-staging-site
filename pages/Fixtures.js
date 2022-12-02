import styles from "../styles/fixturespage.module.css";
import { API_URL } from "@config/index";
import { GraphQLClient } from "graphql-request";

export default function Fixtures(props) {
  const { fixtures } = props;

  return (
    <div>
      <div>A</div>
      <div className={styles.fixtures_desktop_layout}>
        <ul>
          {fixtures.map((fixtures) => (
            <li key={fixtures.id}>
              <div className={styles.fixture_container}>
                <div>AAA</div>
                <div>BBB</div>
                <div>CCC</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div>BBBB</div>
    </div>
  );
}

export async function getStaticProps() {
  const hygraph = new GraphQLClient(`${API_URL}`);
  const { fixtures } = await hygraph.request(
    `
    {
      fixtures 
      {
        teamA
        teamB
        tournament
        location
        date
        time
      }
    }

    `
  );
  return {
    props: {
      fixtures,
    },
    revalidate: 10,
  };
}
