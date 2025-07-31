type URLMappingType = Record<string, string>;

const PERSONAL_IDENTIFIER = `@me`;

export const SOCIAL_USERNAME_MAP: URLMappingType = {
  github: "kushagra-aa",
  gitlab: "kushagra-aa",
  bitbucket: "kushagra-aa",
  twitter: "kushagra_pyjs",
  linkedin: "kushagra-aa",
  instagram: "kushagra.pyjs",
  youtube: "@kushagra-pyjs",
  npm: "~kushagra-aa",
  hashnode: "",
  stackoverflow: "users/14001385/kushagra-aa",
};

export const URL_MAP: URLMappingType = {
  github: "https://github.com",
  gitlab: "https://gitlab.com",
  bitbucket: "https://bitbucket.org",
  twitter: "https://x.com",
  linkedin: "https://linkedin.com/in",
  instagram: "https://instagram.com",
  youtube: "https://youtube.com",
  npm: "https://npmjs.com",
  hashnode: "https://kushagra-aa.hashnode.dev",
  stackoverflow: "https://kushagra-aa.hashnode.dev",
};

// Utility function to decode URL parameters
export function decodeUrlParams(params: {
  platform: string;
  endpoint?: string[];
}) {
  return {
    platform: decodeURIComponent(params.platform),
    endpoint: params.endpoint?.map((segment) => decodeURIComponent(segment)),
  };
}

export const makeFullRedirectURL = (
  platform: string,
  endpoints: string[] = [],
) =>
  `${URL_MAP[platform]}/${endpoints
    .map((e) =>
      e === PERSONAL_IDENTIFIER ? `${SOCIAL_USERNAME_MAP[platform]}` : `${e}`,
    )
    .join("/")}`;
