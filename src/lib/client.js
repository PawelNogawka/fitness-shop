//import myConfiguredSanityClient from './sanityClient'
import imageUrlBuilder from "@sanity/image-url";


import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: "zdwth9gc",
  dataset: "production",
  apiVersion: "2023-03-17", // use current UTC date - see "specifying API version"!
  token: process.env.SANITY_REACT_ACCESS_TOKEN,
  useCdn: true, // `false` if you want to ensure fresh data
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
