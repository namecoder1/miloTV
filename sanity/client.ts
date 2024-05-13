import { createClient, type ClientConfig } from "@sanity/client";

const config: ClientConfig = {
  apiVersion: "2023-05-03", 
  projectId: "qeo9b69m", 
  dataset: "production", 

};

export const client = createClient(config);