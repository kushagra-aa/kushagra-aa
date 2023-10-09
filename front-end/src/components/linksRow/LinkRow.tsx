import Link from "next/link";
import Button from "../UI/button/Button";
import "./link-row.css";

export default function LinkRow({
  button,
  icon,
  subTitle,
  title,
  link,
}: {
  subTitle: string;
  title: string;
  link: string;
  button: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="link_row">
      <p className="link_sub">{subTitle}</p>
      <p className="link_title">{title}</p>
      <div className="link_arrow">
        <span>
          <i id="line" />
          <i id="arrow" />
        </span>
      </div>
      <Button className="link_button" size="small" type="link" theme="theme-2">
        <Link href={link}>
          {button}
          {icon}
        </Link>
      </Button>
    </div>
  );
}
