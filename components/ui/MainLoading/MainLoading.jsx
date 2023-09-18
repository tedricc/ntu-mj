import styles from "@/components/ui/MainLoading/MainLoading.module.css"

function MainLoading() {
  return (
    <div className={styles.spinner__container}>
      <div className={styles.spinner}></div>
    </div>
  );
}

export default MainLoading;
