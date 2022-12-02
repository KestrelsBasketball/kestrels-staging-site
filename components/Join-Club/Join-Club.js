import styles from "./joinclub.module.css";

export default function JoinClub() {
  return (
    <div>
      <div className={styles.container}>
        <div className={styles.join_img_container}></div>
        <div>
          <h4>Join the Club</h4>
        </div>
        <div className={styles.join_btn_container}>
          <button>Become a Member</button>
        </div>
      </div>
    </div>
  );
}
