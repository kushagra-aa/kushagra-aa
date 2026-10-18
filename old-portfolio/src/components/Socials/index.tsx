"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Socials as SocialsType } from "@/models/Social";
import styles from "./index.module.css";

const getSocialsAPI = async () => {
  const response = await fetch(`/api/socials`).then((resp) => resp);
  let socials: SocialsType | undefined = undefined;
  if (response.status === 200)
    socials = await response.json().then((d) => d.data);
  return socials;
};

function Socials({ className = "" }: { className?: string }) {
  const [socials, setSocials] = useState<SocialsType>();
  const getSocials = async () => {
    await getSocialsAPI().then((resp) => {
      setSocials(resp);
    });
  };

  useEffect(() => {
    getSocials();
  }, []);
  return socials ? (
    <div className={`${styles.socials} ${className}`}>
      <a href={socials.mail.link} target="_blank" title="EMail">
        <Image src={socials.mail.icon} alt="mail" fill sizes="100%" />
      </a>
      <a href={socials.call.link} target="_blank" title="Mobile No.">
        <Image src={socials.call.icon} alt="call" fill sizes="100%" />
      </a>
      <a href={socials.linkedin.link} target="_blank" title="LinkedIn">
        <Image src={socials.linkedin.icon} alt="linkedin" fill sizes="100%" />
      </a>
      <a
        href={socials.stackoverflow.link}
        target="_blank"
        title="StackOverflow"
      >
        <Image
          src={socials.stackoverflow.icon}
          alt="stackoverflow"
          fill
          sizes="100%"
        />
      </a>
      <a href={socials.hashnode.link} target="_blank" title="HashNode">
        <Image src={socials.hashnode.icon} alt="hashnode" fill sizes="100%" />
      </a>
      <a href={socials.youtube.link} target="_blank" title="YouTube">
        <Image src={socials.youtube.icon} alt="youtube" fill sizes="100%" />
      </a>
      <a href={socials.instagram.link} target="_blank" title="Instagram">
        <Image src={socials.instagram.icon} alt="instagram" fill sizes="100%" />
      </a>
      <a href={socials.behance.link} target="_blank" title="Behance">
        <Image src={socials.behance.icon} alt="behance" fill sizes="100%" />
      </a>
      <a href={socials.x.link} target="_blank" title="X">
        <Image src={socials.x.icon} alt="x" fill sizes="100%" />
      </a>
      <a href={socials.telegram.link} target="_blank" title="Telegram">
        <Image src={socials.telegram.icon} alt="telegram" fill sizes="100%" />
      </a>
      <a href={socials.whatsapp.link} target="_blank" title="WhatsApp">
        <Image src={socials.whatsapp.icon} alt="whatsapp" fill sizes="100%" />
      </a>
    </div>
  ) : null;
}

export default Socials;
