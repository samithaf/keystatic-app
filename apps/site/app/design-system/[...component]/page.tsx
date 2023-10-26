import {reader} from "../../reader";


type Props = {
    params: { component: string[] }
}
export default async function Page({params}: Props) {
    const {component} = params;
    console.log('component', component);
    const designs = await reader.collections.designSystem.read(component.join('/'));

    console.log('designs', designs)

    return (
        <>
            <p>{designs?.name}<br/>{designs?.description}</p>
            <p>params {JSON.stringify(params)}</p>
        </>
    )
}
