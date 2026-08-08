import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import type { APIContext } from "astro";

export async function GET(context: APIContext) {
  const posts = await getCollection("posts", ({ data }) => !data.draft);

  return rss({
    title: "AI + Bio",
    description: "Exploring AI and bioinformatics",
    site: context.site ?? "https://sfwang-auto.github.io",
    items: posts
      .sort((a, b) => b.data.date.getTime() - a.data.date.getTime())
      .map((post) => ({
        title: post.data.title,
        description: post.data.summary ?? "",
        pubDate: post.data.date,
        link: `/blogs/posts/${post.id.replace(/\.md$/, "")}`,
      })),
    customData: `<language>zh-CN</language>`,
  });
}
