"use client";

import Button from "@/components/UI/buttons/Buttons";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.main}>
      <h1>hello</h1>
      <p>hello sub</p>
      <Button onClick={() => {}} size="small" theme="theme-1">
        Hello
      </Button>
      <Button onClick={() => {}} size="medium" theme="theme-2">
        Hello
      </Button>
      <Button
        onClick={() => {}}
        size="large"
        backgroundColor="accent-2"
        foregroundColor="dark-2"
      >
        Hello
      </Button>
      <Button
        onClick={() => {}}
        size="large"
        backgroundColor="accent-1"
        foregroundColor="light-1"
      >
        Hello
      </Button>
    </div>
  );
}
