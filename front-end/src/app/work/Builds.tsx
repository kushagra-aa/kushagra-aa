import styles from "./page.module.css";

function Builds() {
  return (
    <>
      <ul className={styles.builds_list}>
        <li>
          <span className={styles.para_highlight_md}>
            Responsive full-stack applications
          </span>{" "}
          with clean UI & scalable backend.
        </li>
        <li>
          REST APIs and backend services with{" "}
          <span className={styles.para_highlight_md}>
            authentication, performance, and security.
          </span>
        </li>
        <li>
          <span className={styles.para_highlight_md}>Developer tooling</span>{" "}
          like VS Code extensions with thousands of real installs.
        </li>
        <li>
          Deployments & cloud infrastructure using{" "}
          <span className={styles.para_highlight_md}>
            serverless and containerized solutions
          </span>
          .
        </li>
      </ul>
      <p className={styles.builds_more}>
        Explore projects that show real problem-solving, systems thinking, and
        production readiness{" "}
        <a className={styles.para_highlight_md} href="/portfolio">
          here
        </a>
        .
      </p>
    </>
  );
}

export default Builds;
