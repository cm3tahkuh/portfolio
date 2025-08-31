import fm from "front-matter";

export async function loadMdEntries(url: string): Promise<[any]> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Failed to fetch ${url}`);
  const text = await res.text();
  const parsed = fm<{ entries: [any] }>(text);
  return parsed.attributes.entries || [];
}
