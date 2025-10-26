"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import CertificationsLoader from "@/components/loaders/ExperiencesLoader/ExperiencesLoader";
import { CertificationType } from "@/models/Certification";
import styles from "./page.module.css";

const getCertificationsAPI = async () => {
  const response = await fetch(`/api/certifications`).then((resp) => resp);
  let certifications: CertificationType[] = [];
  if (response.status === 200)
    certifications = await response.json().then((d) => d.data);
  return certifications || [];
};
function Certifications() {
  const [certifications, setCertifications] = useState<CertificationType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const getCertifications = async () => {
    setIsLoading(true);
    await getCertificationsAPI().then((resp) => {
      setCertifications(resp);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    getCertifications();
  }, []);

  return (
    <div className={styles.certifications_container}>
      {isLoading ? (
        <CertificationsLoader />
      ) : (
        certifications.map((experience) => (
          <div key={experience.name} className={styles.experience_container}>
            <div className={styles.experience_details}>
              <h4>{experience.name}</h4>
              {experience.link ? (
                <Link
                  className={styles.experience_org}
                  href={experience.link}
                  target="_blank"
                >
                  {experience.name}
                </Link>
              ) : (
                <p className={styles.experience_org}>{experience.name}</p>
              )}
              <p className={styles.experience_duration}>
                <span className={styles.experience_start}>
                  {experience.start}
                </span>{" "}
                -{" "}
                <span className={styles.experience_end}>{experience.end}</span>
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Certifications;
