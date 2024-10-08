import { LinkComponent } from "../../components/link";

export const Page: React.FC = () => {
  return (
    <>
      <h1>About</h1>
      <p>Example of using Vike.</p>

      <h2>Links</h2>
      <ul>
        <li>
          <LinkComponent href="/">Home</LinkComponent>
        </li>
        <li>
          <LinkComponent href="/about">About</LinkComponent>
        </li>
      </ul>
    </>
  );
};
