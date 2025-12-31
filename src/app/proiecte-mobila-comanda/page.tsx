"use client";

import Link from "next/link";
import Image from "next/image";
import {
  PROJECT_CATEGORIES,
  PROJECTS,
  CATEGORY_TESTIMONIALS,
} from "@/config/projects.config";

/* ➕ IMPORTURI GALERIE */
import { useImageGallery } from "@/components/ui/gallery/useImageGallery";
import { ImageGallery } from "@/components/ui/gallery/ImageGallery";
import { ImageLightbox } from "@/components/ui/gallery/ImageLightbox";

export default function ProjectsPage() {
  return (
    <main className="projects-page">
      <section className="projects-page__intro container">
        <h1>Proiecte mobilă la comandă</h1>
        <p>
          Exemple reale de proiecte realizate, adaptate fiecărui spațiu și fiecărei nevoi.
        </p>
      </section>

      {PROJECT_CATEGORIES.map((category) => {
        const categoryProjects = PROJECTS.filter(
          (p) => p.category === category.key
        );

        const testimonial = CATEGORY_TESTIMONIALS.find(
          (t) => t.category === category.key
        );

        return (
          <section
            key={category.key}
            id={category.slug}
            className="projects-page__category container"
          >
            <header className="projects-page__category-header">
              <h2>{category.title}</h2>
              <p>{category.intro}</p>
            </header>

            <div className="projects-page__grid">
              {categoryProjects.slice(0, 4).map((project, index) => {
                const isFeatured = index === 0;

                if (isFeatured) {
                  /* ✅ MODIFICARE UNICĂ: folosim images dacă există */
                  const gallery = useImageGallery({
                    images: project.images ?? [project.image],
                  });

                  return (
                    <article
                      key={project.id}
                      className="projects-page__featured"
                    >
                      <div className="projects-page__featured-main">
                        <div className="projects-page__image">
                          <ImageGallery
                            images={gallery.images}
                            activeIndex={gallery.activeIndex}
                            changeIndex={gallery.changeIndex}
                            openLightbox={gallery.openLightbox}
                          />

                          <ImageLightbox
                            images={gallery.images}
                            activeIndex={gallery.activeIndex}
                            isLightboxOpen={gallery.isLightboxOpen}
                            changeIndex={gallery.changeIndex}
                            closeLightbox={gallery.closeLightbox}
                          />
                        </div>

                        <div className="projects-page__content">
                          <h3>{project.title}</h3>
                          <span className="projects-page__location">
                            {project.location}
                          </span>

                          <ul className="projects-page__tags">
                            {project.tags.slice(0, 3).map((tag) => (
                              <li key={tag}>{tag}</li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* ASIDE – NEMODIFICAT */}
                      <aside className="projects-page__featured-aside">
                        {testimonial && (
                          <blockquote className="projects-page__testimonial">
                            <p>“{testimonial.text}”</p>
                            <cite>{testimonial.author}</cite>
                          </blockquote>
                        )}
                        <p>
                          Proiect realizat integral, de la măsurători la montaj,
                          adaptat spațiului clientului.
                        </p>

                        <Link
                          href={category.serviceHref}
                          className="projects-page__featured-cta"
                        >
                          Cere ofertă
                        </Link>
                      </aside>
                    </article>
                  );
                }

                /* CARDURILE NORMALE – NEMODIFICATE */
                return (
                  <article key={project.id} className="projects-page__card">
                    <div className="projects-page__image">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                      />
                    </div>

                    <div className="projects-page__content">
                      <h3>{project.title}</h3>
                      <span className="projects-page__location">
                        {project.location}
                      </span>

                      <ul className="projects-page__tags">
                        {project.tags.slice(0, 3).map((tag) => (
                          <li key={tag}>{tag}</li>
                        ))}
                      </ul>
                    </div>
                  </article>
                );
              })}
            </div>

            <div className="projects-page__category-cta">
              <Link href={category.serviceHref}>
                Vezi serviciul: {category.title}
              </Link>
            </div>
          </section>
        );
      })}

      <section className="projects-page__final-cta container">
        <h2>Vrei un proiect adaptat spațiului tău?</h2>
        <Link href="/contact">Cere o ofertă personalizată</Link>
      </section>
    </main>
  );
}
