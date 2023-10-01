import Link from "next/link";
import Button from "@/components/UI/button/Button";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <h1>hello</h1>
      <p>hello sub</p>
      <Button type="button" size="small" theme="theme-1">
        Hello
      </Button>
      <Button disabled type="button" size="medium" theme="theme-2">
        Hello
      </Button>
      <Button
        type="button"
        size="large"
        backgroundColor="accent-2"
        foregroundColor="dark-2"
      >
        Hello
      </Button>
      <Button
        type="link"
        size="large"
        backgroundColor="accent-1"
        foregroundColor="light-1"
      >
        <Link href="/a">Hello</Link>
      </Button>
    </div>
  );
}
