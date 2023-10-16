import Link from "next/link";
import Button from "@/components/UI/button/Button";
import { QuestionIcon } from "@/components/Icons";
import styles from "./notfound.module.css";

function NotFound({ slug }: { slug?: string }) {
  return (
    <div className={styles.main}>
      <div className={styles.not_found}>
        <div className={styles.not_found_bg}>
          <QuestionIcon />
        </div>
        <div className={styles.not_found_text}>
          <h1>404 - Not Found</h1>
          <p className={styles.not_found_sub}>
            The Project you are looking for is not found
          </p>
          <p className={styles.not_found_info}>
            Kindly check the url,
            <code>`{slug}`</code>is not a valid project
          </p>
        </div>
        <div className={styles.not_found_actions}>
          <Button
            className={styles.action}
            size="medium"
            type="link"
            theme="theme-1"
          >
            <Link href="/">Go Home &apos;/&apos;</Link>
          </Button>
          <Button
            className={styles.action}
            size="medium"
            type="link"
            theme="theme-2"
          >
            <Link href="/portfolio">Go To Projects Page</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}

export default NotFound;
