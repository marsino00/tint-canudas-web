import { createClient } from "contentful";

const client = createClient({
  space: process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID as string,
  accessToken: process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN as string,
});

interface GetEntriesOptions {
  content_type: string;
  locale?: string;
}

export async function getEntries(options: GetEntriesOptions) {
  const entries = await client.getEntries({
    content_type: options.content_type,
    locale: options.locale || "*",
  });
  return entries.items;
}

export default client;
