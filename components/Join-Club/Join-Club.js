import styles from "./joinclub.module.css";
import { Modal, useModal } from "@nextui-org/react";

export default function JoinClub() {
  const { setVisible, bindings } = useModal();
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.join_img_container}></div>
        <div>
          <h3>
            Join <span>the </span>Club
          </h3>
          <p>
            Anyone interested in becoming a member of any of the teams contact
            the Head Coach
          </p>
        </div>
        <div className={styles.join_btn_container}></div>
      </div>
    </div>
  );
}
