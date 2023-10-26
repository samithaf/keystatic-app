import Link from "next/link";
import {reader} from "../../keystatic/reader";

type Props = {
    params: { component: string[] }
}

export async function generateStaticParams() {
    const rows = ["components","checkbox-group"]

    return rows.map((row) => ({
        component: ["components","checkbox-group"],
    }));
}

export default async function Page({params}: Props) {
    const designs = await reader.collections.designSystem.all();

    return (
        <div>
            <h1>GEL components</h1>
            <div>all entries {JSON.stringify(designs)}</div>
            <ul>
                {designs.map(post => (
                    <li key={post.slug}>
                        <Link href={`/design-system/${post.slug}`}>{post.entry.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
