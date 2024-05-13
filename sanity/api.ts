import { client } from "./client";

export async function getPosts() {
  const posts = await client.fetch(
    `*[_type == "post"]{
      title,
    }`,
  );
  return posts;
}