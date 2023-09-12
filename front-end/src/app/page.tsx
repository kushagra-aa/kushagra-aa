import { useEffect, useState, useMemo } from 'react';
import styles from './page.module.css';

export default function Home() {
  const [first, setFirst] = useState(0);

  useEffect(() => {
    console.log('first', first);
  }, []);

  return <main className={styles.main}></main>;
}
