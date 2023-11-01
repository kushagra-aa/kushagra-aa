import Image from "next/image";
import Link from "next/link";
import { CaretRightIcon, InfoIcon, RightIcon } from "@/components/Icons";
import Button from "@/components/UI/button/Button";
import ProjectType from "@/models/Project";

export default function FeaturedProjectCard({
  project,
}: {
  project: ProjectType;
}) {
  return (
    <div className="project_card_content">
      <Image src={project.picture} alt={project.name} fill sizes="100%" />
      <Button
        size="small"
        type="link"
        backgroundColor="dark-1"
        foregroundColor="accent-2"
      >
        <Link className="project_card_link" href={project.link}>
          {project.tags.includes("game") ? (
            <>
              Play <CaretRightIcon />
            </>
          ) : (
            <>
              Visit <RightIcon />
            </>
          )}
        </Link>
      </Button>
      <Button
        size="small"
        type="link"
        backgroundColor="dark-2"
        foregroundColor="accent-1"
      >
        <Link className="project_card_link" href={`portfolio/${project.slug}`}>
          Details <InfoIcon />
        </Link>
      </Button>
    </div>
  );
}
