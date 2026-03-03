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
    year: "2023",
    institution: "RedAcademy",
    course: "Software Developer Sprinter Programme",
  },
  {
    year: "2018",
    institution: "NOSA",
    course:
      "Introduction To SAMTRAC (Safety Management Training Course) Certificate",
  },
  {
    year: "2014 – 2016",
    institution: "Civil Engineering",
    course: "National Diploma N4–N6",
  },
];

export default function Education() {
  return (
    <section id="education">
      <p className="section-title">
        <span>04.</span> Education <span></span>
      </p>
      <p className="section-sub">
        My academic and professional learning journey
      </p>

      <div className="edu-grid">
        <div className="edu-card">
          <div className="edu-year">2022</div>
          <div className="edu-institution">Eduvos</div>
          <ul className="exp-list">
            {eduvosModules.map((mod) => (
              <li key={mod}>{mod}</li>
            ))}
          </ul>
        </div>

        {eduCards.map(({ year, institution, course }) => (
          <div className="edu-card" key={institution}>
            <div className="edu-year">{year}</div>
            <div className="edu-institution">{institution}</div>
            <div className="edu-course">{course}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
