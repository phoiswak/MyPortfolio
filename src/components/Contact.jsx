const contacts = [
  { icon: '📞', label: 'Phone',    value: '081 784 8371',        href: 'tel:0817848371' },
  { icon: '✉️', label: 'Email',    value: 'phosiwak@gmail.com',   href: 'mailto:phosiwak@gmail.com' },
  { icon: '📍', label: 'Location', value: 'Somerset West, Cape Town' },
  { icon: '💼', label: 'LinkedIn', value: 'Khorommbi Irvin Phosiwa', href: 'https://www.linkedin.com/in/khorommbi-irvin-phosiwa-605691119/' },
  { icon: '📱', label: 'Reference', value: 'Mahomed H.G. Nabee · 084 978 6073' },
]

export default function Contact() {
  return (
    <section id="contact">
      <p className="section-title"><span>06.</span> Get In Touch <span></span></p>
      <p className="section-sub">Feel free to reach out I'm always open to new opportunities</p>

      <div className="contact-grid">
        {contacts.map(({ icon, label, value, href }) =>
          href ? (
            <a className="contact-card" href={href} key={label}>
              <div className="contact-icon">{icon}</div>
              <div className="contact-label">{label}</div>
              <div className="contact-value">{value}</div>
            </a>
          ) : (
            <div className="contact-card" key={label}>
              <div className="contact-icon">{icon}</div>
              <div className="contact-label">{label}</div>
              <div className="contact-value">{value}</div>
            </div>
          )
        )}
      </div>
    </section>
  )
}
