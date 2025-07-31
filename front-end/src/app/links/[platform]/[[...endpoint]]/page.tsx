"use client";
import { LogoFull, LogoIcon } from "@/components/Logo";
import { decodeUrlParams, makeFullRedirectURL } from "@/helpers/urlConfig";
import { useEffect } from "react";

type RedirectPageParamsType = {
  params: {
    platform: string;
    endpoint?: string[];
  };
};

function LinksRedirectPage({ params }: RedirectPageParamsType) {
  const decodedParams = decodeUrlParams(params);
  const redirectURL = makeFullRedirectURL(
    decodedParams.platform,
    decodedParams.endpoint,
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = redirectURL;
    }, 1500); // 1.5 second delay

    return () => clearTimeout(timer);
  }, [redirectURL]);

  return (
    <div className="loader">
      <div className="loader-combined-icon">
        <LogoFull />
        <LogoIcon />
      </div>
      <div>
        <p className="loader-description" style={{ marginBottom: "1rem" }}>
          Gathering Data and Rerouting to
        </p>
        <a target="_blank" href={redirectURL} style={{ color: "white" }}>
          {redirectURL}
        </a>
      </div>
    </div>
  );
}

export async function generateMetadata({ params }: RedirectPageParamsType) {
  return {
    title: `Rerouting to ${params.platform}/${params.endpoint?.map((e) => e + "/")}`,
    robots: "noindex, nofollow",
  };
}

export default LinksRedirectPage;
