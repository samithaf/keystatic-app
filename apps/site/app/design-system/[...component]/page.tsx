import {reader} from "../../reader";
import Link from "next/link";


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
