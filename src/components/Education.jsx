const eduvosModules = [
  "Computer Literacy",
  "Personal Skills Development",
  "Processing & Logic Concepts",
  "Program Design (Python)",
  "IT Fundamentals",
  "Software Engineering",
  "Database Design Concepts",
  "Database Management (SQL Server)",
  "Basic C# Programming",
  "Advanced C# Programming",
  "Mobile Development",
  "Linux Operating System",
];

const eduCards = [
  {
    icon: "🎓",
    year: "2022",
    institution: "Eduvos",
    qualification: "IT Higher Certificate",
    modules: eduvosModules,
  },
  {
    icon: "⚡",
    year: "2023",
    institution: "RedAcademy",
    qualification: "Software Developer Sprinter Programme",
  },
  {
    icon: "🛡️",
    year: "2018",
    institution: "NOSA",
    qualification: "Introduction To SAMTRAC Certificate",
  },
  {
    icon: "🏗️",
    year: "2014 – 2016",
    institution: "Civil Engineering",
    qualification: "National Diploma N4–N6",
  },
];

export default function Education() {
  return (
    <section id="education">
      <p className="section-title">
        <span>04.</span> Education <span></span>
      </p>
      <p className="section-sub">My academic and professional learning journey</p>

      <div className="edu-grid">
        {eduCards.map(({ icon, year, institution, qualification, modules }) => (
          <div className={`edu-card${modules ? " edu-card--wide" : ""}`} key={institution}>
            <div className="edu-card-header">
              <span className="edu-icon">{icon}</span>
              <span className="edu-year">{year}</span>
            </div>
            <div className="edu-institution">{institution}</div>
            <div className="edu-qualification">{qualification}</div>
            {modules && (
              <div className="edu-modules">
                {modules.map((mod) => (
                  <span className="edu-tag" key={mod}>{mod}</span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
