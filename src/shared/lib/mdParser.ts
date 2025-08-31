import fm from "front-matter";


export function parseMdFile(md: string) {
  const parsed = fm<{ entries: [] }>(md);
  return parsed.attributes.entries || [];
}
