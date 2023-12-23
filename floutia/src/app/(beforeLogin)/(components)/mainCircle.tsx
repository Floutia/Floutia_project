import variables from "../../app/styles/variables.module.scss";
import styles from "../../styles/page.module.css";
import Image from "next/image";

export default function mainCircle() {
  return (
    <div>
      <body>
        <div className={styles.mainCircle}>
          <Image
            src="/MainCircle.png"
            alt="mainCircle"
            width={200}
            height={200}></Image>
        </div>
      </body>
    </div>
  );
}