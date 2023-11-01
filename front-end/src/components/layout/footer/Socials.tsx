"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Socials as SocialsType } from "@/models/Social";

const getSocialsAPI = async () => {
  const response = await fetch(`/api/socials`).then((resp) => resp);
  let hobbies: SocialsType | undefined = undefined;
  if (response.status === 200)
    hobbies = await response.json().then((d) => d.data);
  return hobbies;
};

function Socials() {
  const [socials, setSocials] = useState<SocialsType>();
  const getSocials = async () => {
    await getSocialsAPI().then((resp) => {
      setSocials(resp);
    });
  };

  useEffect(() => {
    getSocials();
  }, []);

  return (
    <div className="mid">
      {socials ? (
        <>
          <p>
            L<span>et&apos;s connect!</span>
          </p>
          <div className="socials">
            <a href={socials.telegram.link} target="_blank" title="Telegram">
              <Image
                src={socials.telegram.icon}
                alt="telegram"
                fill
                sizes="100%"
              />
            </a>
            <a href={socials.instagram.link} target="_blank" title="Instagram">
              <Image
                src={socials.instagram.icon}
                alt="telegram"
                fill
                sizes="100%"
              />
            </a>
            <a href={socials.behance.link} target="_blank" title="Behance">
              <Image
                src={socials.behance.icon}
                alt="telegram"
                fill
                sizes="100%"
              />
            </a>
            <a href={socials.github.link} target="_blank" title="GitHub">
              <Image
                src={socials.github.icon}
                alt="telegram"
                fill
                sizes="100%"
              />
            </a>
            <a href={socials.linkedin.link} target="_blank" title="LinkedIn">
              <Image
                src={socials.linkedin.icon}
                alt="telegram"
                fill
                sizes="100%"
              />
            </a>
            <a href={socials.whatsapp.link} target="_blank" title="WhatsApp">
              <Image
                src={socials.whatsapp.icon}
                alt="telegram"
                fill
                sizes="100%"
              />
            </a>
            <a href={socials.x.link} target="_blank" title="X">
              <Image src={socials.x.icon} alt="telegram" fill sizes="100%" />
            </a>
          </div>
        </>
      ) : null}
    </div>
  );
}

export default Socials;
