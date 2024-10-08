import { usePageContext } from "./pageContext";

type LinkProps = React.PropsWithChildren<{
  href: string;
  className?: string;
}>;

export const Link: React.FC<LinkProps> = (props) => {
  const pageContext = usePageContext();
  const { urlPathname } = pageContext;
  const { href } = props;
  const isActive = href === "/" ? urlPathname === href : urlPathname.startsWith(href);
  const className = [props.className, isActive && "is-active"].filter(Boolean).join(" ");
  return (
    <a
      {...props}
      className={className}
    />
  );
};
