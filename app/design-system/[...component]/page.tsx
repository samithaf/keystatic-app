import {reader} from "../../reader";


type Props = {
    params: { component: string[] }
}
export default async function Page({ params }: Props) {
    const { component } = params;
    const designs = await reader.collections.designSystem.read(component.join('/'));

    return <p>{designs?.name}<br/>{designs?.description}</p>
}
