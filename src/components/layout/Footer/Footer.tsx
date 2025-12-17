import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__grid">
          {/* Brand */}
          <div className="site-footer__column">
            <h3 className="site-footer__brand">Daremi</h3>
            <p className="site-footer__text">
              Mobilă la comandă realizată cu atenție la detalii, de la proiectare 3D și randări
              realiste până la execuție și montaj.
            </p>

            {/* Social media */}
            <div className="site-footer__social">
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Daremi pe Facebook"
                className="site-footer__social-link"
              >
                Facebook
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Daremi pe Instagram"
                className="site-footer__social-link"
              >
                Instagram
              </a>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Daremi pe YouTube"
                className="site-footer__social-link"
              >
                YouTube
              </a>
            </div>
          </div>

          {/* Categorii */}
          <div className="site-footer__column">
            <h4 className="site-footer__title">Mobilă la comandă</h4>
            <ul className="site-footer__list">
              <li>
                <Link href="/mobila-la-comanda/bucatarie">Bucătărie</Link>
              </li>
              <li>
                <Link href="/mobila-la-comanda/living">Living</Link>
              </li>
              <li>
                <Link href="/mobila-la-comanda/dormitor">Dormitor</Link>
              </li>
              <li>
                <Link href="/mobila-la-comanda/baie">Baie</Link>
              </li>
              <li>
                <Link href="/mobila-la-comanda/hol">Hol</Link>
              </li>
            </ul>
          </div>

          {/* Informații */}
          <div className="site-footer__column">
            <h4 className="site-footer__title">Informații</h4>
            <ul className="site-footer__list">
              <li>
                <Link href="/despre-noi">Despre noi</Link>
              </li>
              <li>
                <Link href="/proiecte">Proiecte</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="site-footer__column">
            <h4 className="site-footer__title">Contact</h4>
            <p className="site-footer__text">
              Telefon: <a href="tel:+40700000000">+40 700 000 000</a>
            </p>
            <p className="site-footer__text">
              Email: <a href="mailto:contact@daremi.ro">contact@daremi.ro</a>
            </p>
          </div>
        </div>

        <div className="site-footer__bottom">
          <span>© {new Date().getFullYear()} Daremi. Toate drepturile rezervate.</span>
        </div>
      </div>
    </footer>
  );
}
