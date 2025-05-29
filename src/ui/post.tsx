// ui/post.tsx
import Link from "next/link";

export function Post({ post }: { post: { slug: string; title: string; content: string } }) {
    return (
        <li>
            <h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
            <p>{post.content}</p>
        </li>
    )
}
