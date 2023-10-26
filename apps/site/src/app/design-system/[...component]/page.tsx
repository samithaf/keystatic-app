
import Link from "next/link";
import {reader} from "../../keystatic/reader";


type Props = {
    params: { component: string[] }
}
export default async function Page({params}: Props) {
    const {component} = params;
    console.log('component', component);
    const designs = await reader.collections.designSystem.all();
    return (
        <>
            <p>Looking up article {component.join('/')}</p>
            <div>all entries {JSON.stringify(designs)}</div>
            <ul>
                {designs.map(post => (
                    <li key={post.slug}>
                        {post.entry.name}
                    </li>
                ))}
            </ul>
        </>
    )
}
