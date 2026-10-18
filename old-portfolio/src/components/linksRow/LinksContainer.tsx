import "./link-row.css";

export default function LinksContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="links_container">{children}</div>;
}
