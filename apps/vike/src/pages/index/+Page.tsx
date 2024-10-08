import { CounterComponent } from "../../components/counter";
import { LinkComponent } from "../../components/link";

export const Page: React.FC = () => {
  return (
    <>
      <h1>Welcome</h1>

      <p>
        Interactive. <CounterComponent />
      </p>

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
