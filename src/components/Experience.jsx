const jobs = [
  {
    title: 'Junior Software Developer',
    company: 'RedPanda Software',
    date: '2024 – Present',
    points: [
      'Worked on various client projects, performing both front-end (React, JavaScript) and back-end (C#, SQL) development.',
      'Developed and maintained React and C# APIs for various projects, ensuring scalability, functionality, and performance.',
      'Implemented reporting features using C#, SQL, and JavaScript creating dynamic, interactive reports.',
      'Identified and fixed bugs across front-end and back-end systems, improving the overall user experience.',
      'Collaborated with cross-functional teams to integrate front-end and back-end solutions seamlessly.',
    ],
  },
  {
    title: 'Software Developer Sprinter',
    company: 'RedAcademy',
    date: '2023',
    points: [
      'Completed an intensive software development sprint programme focused on real-world skills.',
      'Built foundational skills in full-stack development and agile working practices.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience">
      <p className="section-title"><span>03.</span> Work Experience <span></span></p>
      <p className="section-sub">Where I've applied my skills professionally</p>

      {jobs.map(({ title, company, date, points }) => (
        <div className="exp-card" key={title}>
          <div className="exp-header">
            <div>
              <div className="exp-title">{title}</div>
              <div className="exp-company">{company}</div>
            </div>
            <div className="exp-date">{date}</div>
          </div>
          <ul className="exp-list">
            {points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}
