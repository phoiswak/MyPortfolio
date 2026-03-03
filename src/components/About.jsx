const info = [
  { icon: "📍", text: "Cape Town, South Africa" },
  { icon: "📞", text: "081 784 8371" },
  { icon: "✉️", text: "phosiwak@gmail.com" },
  { icon: "💼", text: "Junior Software Developer @ RedPanda" },
  { icon: "🔗", text: "LinkedIn", href: "https://www.linkedin.com/in/khorommbi-irvin-phosiwa-605691119/" },
];

export default function About() {
  return (
    <section id="about">
      <p className="section-title">
        <span>01.</span> About Me <span></span>
      </p>
      <p className="section-sub">A little background on who I am</p>
      <div className="about-grid">
        <div className="about-text">
          <p>
            I'm a professional and self-motivated software developer based in
            Cape Town. I take great pride in delivering projects on time and to
            the highest standards whether working independently or as part of a
            cross-functional team.
          </p>
          <p>
            My journey started with a Civil Engineering diploma, and I later
            pivoted into software development completing a RedAcademy sprint
            programme and an IT Higher Certificate at Eduvos. I currently work
            as a Junior Software Developer at RedPanda Software, building
            full-stack solutions for real clients.
          </p>
          <p>
            I'm always growing and learning, with a drive to keep building
            things that matter.
          </p>
        </div>
        <div className="about-info">
          {info.map(({ icon, text, href }) =>
            href ? (
              <a className="info-item" key={text} href={href} target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                <span className="icon">{icon}</span>
                <span>{text}</span>
              </a>
            ) : (
              <div className="info-item" key={text}>
                <span className="icon">{icon}</span>
                <span>{text}</span>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
}
