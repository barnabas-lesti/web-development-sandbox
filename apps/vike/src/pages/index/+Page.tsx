import { Link } from "../../renderer";

export const Page: React.FC = () => {
  return (
    <>
      <h1>Welcome</h1>

      <p>Home page.</p>

      <h2>Links</h2>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </>
  );
};
