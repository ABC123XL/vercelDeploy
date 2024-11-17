import Image from "next/image";
import styles from "./page.module.css";
import Sample from "./sample";

export default function Home() {
  return (
    <div className={styles.page}>
      <span>parent component</span>
      <span>page.tsx</span>
      <hr />
      <Sample></Sample>
    </div>
  );
}
