import { LinkComponent } from "../../renderer";

export const Page: React.FC = () => {
  return (
    <>
      <h1>Welcome</h1>

      <p>Home page.</p>

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
