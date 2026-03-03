const categories = [
  {
    label: '🎨 Frontend',
    list: 'React · JavaScript · HTML · CSS · Windows Forms · JS Reports',
  },
  {
    label: '⚙️ Backend',
    list: 'C# · ASP.NET · SQL Server · PostgreSQL · API Development',
  },
]

const skills = [
  { icon: '⚛️', name: 'React' },
  { icon: '🔷', name: 'C#' },
  { icon: '🌐', name: 'ASP.NET' },
  { icon: '🗄️', name: 'SQL Server' },
  { icon: '🐘', name: 'PostgreSQL' },
  { icon: '🎨', name: 'HTML & CSS' },
  { icon: 'JS',  name: 'JavaScript', isJs: true },
  { icon: '🧪', name: 'Cypress Testing' },
  { icon: '🖥️', name: 'Windows Forms' },
  { icon: '📊', name: 'JS Reports' },
  { icon: '📱', name: 'Mobile Dev' },
  { icon: '🐧', name: 'Linux' },
  { icon: '📋', name: 'Project Docs' },
]

export default function Skills() {
  return (
    <section id="skills">
      <p className="section-title"><span>02.</span> Skills &amp; Technologies <span></span></p>
      <p className="section-sub">Technologies I work with day-to-day</p>

      <div className="skills-categories">
        {categories.map(({ label, list }) => (
          <div className="skills-category-card" key={label}>
            <p>{label}</p>
            <p>{list}</p>
          </div>
        ))}
      </div>

      <div className="skills-grid">
        {skills.map(({ icon, name, isJs }) => (
          <div className="skill-card" key={name}>
            <div className={isJs ? 'skill-icon-js' : 'skill-icon'}>{icon}</div>
            <div className="skill-name">{name}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
