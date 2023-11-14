import { createClient } from "next-sanity";

const projectId = "log0op0r";
const dataset = "production";
const apiVersion = "2023-11-11";

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
});
