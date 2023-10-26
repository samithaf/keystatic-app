import Link from 'next/link';
import { reader } from './reader';
import './styles.css';

export default async function Homepage() {
  const designs = await reader.collections.designSystem.all();
  console.log('designs', designs);

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
