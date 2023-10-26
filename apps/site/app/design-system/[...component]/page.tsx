import {reader} from "../../reader";


type Props = {
    params: { component: string[] }
}
export default async function Page({params}: Props) {
    const {component} = params;
    console.log('component', component);
    const collection = await reader.collections.designSystem.all();
    const matchingComponent = collection.find(post => post.slug === component.join('/'));

    if(!matchingComponent) {
        return <p>Sorry!</p>
    }

    return (
        <>
            <p>Looking up article {component.join('/')}</p>
            <p>params {JSON.stringify(matchingComponent)}</p>
        </>
    )
}
