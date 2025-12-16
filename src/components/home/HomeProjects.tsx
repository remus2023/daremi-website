import Link from "next/link";
import Image from "next/image";

import { projects } from "@/config/projects.config";

export default function HomeProjects() {
  const homeProjects = projects
    .filter((project) => project.visibility?.home)
    .sort((a, b) => (a.order ?? 0) - (b.order ?? 0))
    .slice(0, 3);

  if (homeProjects.length === 0) {
    return null;
  }

  return (
    <section className="home-projects">
      <div className="container">
        <header className="home-projects__header">
          <h2 className="home-projects__title">Proiecte realizate</h2>
          <p className="home-projects__subtitle">Mobilă la comandă realizată pentru spații reale</p>
        </header>

        <div className="home-projects__grid">
          {homeProjects.map((project) => (
            <Link key={project.id} href={`/proiecte/${project.id}`} className="home-projects__card">
              <div className="home-projects__image">
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>

              <div className="home-projects__content">
                <h3 className="home-projects__name">{project.title}</h3>
                <span className="home-projects__category">{project.category}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
