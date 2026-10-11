export const SITE_URL = "https://anambraweb3community.xyz";
export const SITE_NAME = "Anambra Web3 Community";
export const SITE_TAGLINE =
  "Building the Future of Web3 in Southeast Nigeria";
export const DEFAULT_OG_IMAGE = "/seo/og-image.jpg";
export const TWITTER_HANDLE = "@anambraweb3conf";

export const DEFAULT_DESCRIPTION =
  "Anambra Web3 Community is Southeast Nigeria's leading blockchain ecosystem — training 400+ developers, hosting conferences with 5,000+ attendees, and connecting local talent to global Web3 opportunities in Awka, Anambra.";

export const DEFAULT_KEYWORDS = [
  "Anambra Web3",
  "Anambra Web3 Community",
  "Web3 Nigeria",
  "blockchain Anambra",
  "Southeast Nigeria Web3",
  "Anambra Web3 Conference",
  "crypto education Nigeria",
  "Cairo bootcamp Nigeria",
  "Starknet Nigeria",
  "blockchain Awka",
  "Web3 community Nigeria",
  "Anambra blockchain",
  "developer bootcamp Nigeria",
];

export function absoluteUrl(path = "/") {
  if (path.startsWith("http")) return path;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
