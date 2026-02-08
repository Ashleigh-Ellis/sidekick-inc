import styles from './About.module.css';

const WHATSAPP_LINK = 'https://wa.me/27823214044';

interface WorkExample {
  title: string;
  description: string;
  imagePlaceholder: string;
}

const CREATE_EXAMPLES: WorkExample[] = [
  {
    title: 'Clothing Alterations',
    description: 'Hemming, taking in, letting out, and custom adjustments to ensure the perfect fit.',
    imagePlaceholder: '🧵',
  },
  {
    title: 'Small Repairs',
    description: 'Fixing broken items, loose hinges, stuck zippers, and everyday household problems.',
    imagePlaceholder: '🔧',
  },
  {
    title: 'Creative Builds',
    description: 'Custom solutions for unique problems — if it can be imagined, it can be made.',
    imagePlaceholder: '🎨',
  },
];

const MOVE_EXAMPLES: WorkExample[] = [
  {
    title: 'Pet Outings',
    description: 'Walks, park visits, and adventures for your furry companions while you\'re busy.',
    imagePlaceholder: '🐕',
  },
  {
    title: 'Errands & Tasks',
    description: 'Grocery runs, post office trips, prescription pickups, and more.',
    imagePlaceholder: '📦',
  },
  {
    title: 'Accompanied Support',
    description: 'An extra pair of hands for moving day, appointments, or any task that needs backup.',
    imagePlaceholder: '🤝',
  },
];

const LOOKOUT_EXAMPLES: WorkExample[] = [
  {
    title: 'House Sitting',
    description: 'Trusted presence while you\'re away — plants watered, mail collected, home secure.',
    imagePlaceholder: '🏠',
  },
  {
    title: 'Contractor Oversight',
    description: 'On-site supervision when technicians or service providers visit your home.',
    imagePlaceholder: '👷',
  },
  {
    title: 'Delivery Reception',
    description: 'Receiving packages, furniture deliveries, and ensuring items arrive safely.',
    imagePlaceholder: '📬',
  },
];

export function About() {
  return (
    <div className={styles.aboutPage}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className="container">
          <div className="comic-header-wrapper">
            <h1 className="comic-header comic-header--orange">Why SideKick?</h1>
          </div>
          <p className={styles.subtitle}>
            The philosophy, the person, and the proof behind SideKick Incorporated.
          </p>
          <p className={styles.subtitle}>
            SideKick Incorporated is for people who don't need a big operation — they need the right person. Someone observant, capable, and flexible enough to step in, handle what needs doing, and step back once it's sorted.
          </p>
          <p className={styles.subtitle}>
            Every hero needs a sidekick — not for the spotlight, but for the moments that make everything else possible.
          </p>
        </div>
      </section>

      {/* About Me Section */}
      <section className={`section ${styles.aboutMe}`}>
        <div className="container">
          <div className={styles.aboutContent}>
            <div className={styles.aboutImage}>
              <img 
                src={`${import.meta.env.BASE_URL}sidekick-hero.png`}
                alt="Your SideKick"
                className={styles.profileImage}
              />
            </div>
            <div className={styles.aboutText}>
              <div className="comic-header-wrapper" style={{ justifyContent: 'flex-start' }}>
                <h2 className="comic-header comic-header--green">Meet Your SideKick</h2>
              </div>
              
              <div className={styles.aboutTextContent}>
                <p>
                  SideKick Incorporated is built around a real person — Ash — and a way of working that's grown naturally over time.
                </p>
                <p>
                  I've always been someone people turn to when things don't quite fit into a neat category. The odd job. The last-minute problem. The task that needs thought, care, and a steady hand rather than a rigid service list. Over time, that pattern became clear: what I offer isn't just a skill, it's situational problem-solving.
                </p>
                <p>
                  SideKick was created to give that kind of help a name and a structure. Not as a catch-all business, but as a reliable point of contact when you need someone capable, adaptable, and present. I don't just complete tasks — I assess what's needed, communicate clearly, and adjust as the situation unfolds.
                </p>
                <p>
                  When you work with SideKick, you're working directly with me. That means consistency, accountability, and a human approach. I take pride in showing up prepared, respecting your space, and handling each mission with care — whether it's practical, creative, or simply being there when you can't be.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className={`section section-alt ${styles.philosophy}`}>
        <div className="container">
          <div className={styles.philosophyContent}>
            <div className="comic-header-wrapper">
              <h2 className="comic-header comic-header--purple">The SideKick Philosophy</h2>
            </div>
            
            <p className={styles.leadText}>
              SideKick Incorporated exists because life rarely fits into predefined services.
            </p>
            <p>
              Instead of asking you to translate your needs into the "right" category, SideKick starts with understanding the situation — then choosing the best way to support it. Sometimes that means fixing something. Sometimes it means moving, watching over, or simply making sure nothing falls through the cracks.
            </p>
            <p>
              The mission shapes the method — not the other way around.
            </p>
            <p>
              It's about being adaptable, trustworthy, and intuitive —
              stepping in where you need support and stepping back when
              the mission is complete.
            </p>

            <div className={styles.poetic}>
              <p>The sidekick is the hero's hero.</p>
              <p>The secret weapon.</p>
              <p>The emergency call.</p>
              <p>The intuitive hand.</p>
            </div>
            
            <div className={styles.qualities}>
              <div className={styles.qualityItem}>
                <span className={styles.qualityIcon}>🔧</span>
                <h3>Adaptable</h3>
                <p>Real solutions for real problems, not rigid service lists.</p>
              </div>
              <div className={styles.qualityItem}>
                <span className={styles.qualityIcon}>🤝</span>
                <h3>Trustworthy</h3>
                <p>Reliable, honest, and respectful of your space and time.</p>
              </div>
              <div className={styles.qualityItem}>
                <span className={styles.qualityIcon}>💡</span>
                <h3>Intuitive</h3>
                <p>Understanding what you need, often before you ask.</p>
              </div>
              <div className={styles.qualityItem}>
                <span className={styles.qualityIcon}>✨</span>
                <h3>Thorough</h3>
                <p>Stepping in where needed, stepping back when complete.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work Examples - CREATE */}
      <section className={`section ${styles.workSection}`}>
        <div className="container">
          <div className={styles.workHeader}>
            <div className="comic-header-wrapper">
              <h2 className="comic-header comic-header--orange">CREATE</h2>
            </div>
            <p className={styles.workTagline}>Fix it. Make it. Save the day.</p>
          </div>
          
          <div className={styles.examplesGrid}>
            {CREATE_EXAMPLES.map((example, index) => (
              <WorkExampleCard key={index} example={example} />
            ))}
          </div>
          
          {/* Placeholder for user's actual work photos */}
          <div className={styles.userPhotosPlaceholder}>
            <p>📸 <strong>Add your own photos here</strong> — examples of clothing repairs, 
            fixes you've completed, or creative builds you're proud of.</p>
          </div>
        </div>
      </section>

      {/* Work Examples - MOVE */}
      <section className={`section section-alt ${styles.workSection}`}>
        <div className="container">
          <div className={styles.workHeader}>
            <div className="comic-header-wrapper">
              <h2 className="comic-header comic-header--green">Move Move Move!</h2>
            </div>
            <p className={styles.workTagline}>Outings, errands, and getting things where they need to go.</p>
          </div>
          
          <div className={styles.examplesGrid}>
            {MOVE_EXAMPLES.map((example, index) => (
              <WorkExampleCard key={index} example={example} />
            ))}
          </div>
          
          <div className={styles.userPhotosPlaceholder}>
            <p>📸 <strong>Add your own photos here</strong> — happy pets on walks, 
            errands in action, or accompanied tasks.</p>
          </div>
        </div>
      </section>

      {/* Work Examples - LOOKOUT */}
      <section className={`section ${styles.workSection}`}>
        <div className="container">
          <div className={styles.workHeader}>
            <div className="comic-header-wrapper">
              <h2 className="comic-header comic-header--purple">Stand Lookout</h2>
            </div>
            <p className={styles.workTagline}>Quiet supervision. Total peace of mind.</p>
          </div>
          
          <div className={styles.examplesGrid}>
            {LOOKOUT_EXAMPLES.map((example, index) => (
              <WorkExampleCard key={index} example={example} />
            ))}
          </div>
          
          <div className={styles.userPhotosPlaceholder}>
            <p>📸 <strong>Add your own photos here</strong> — house sitting setups, 
            successfully received deliveries, or supervision scenarios.</p>
          </div>
        </div>
      </section>

      {/* Built In-House Note */}
      <section className={`section section-alt ${styles.buildNote}`}>
        <div className="container">
          <div className={styles.buildNoteContent}>
            <span className={styles.buildNoteIcon}>🛠️</span>
            <p>
              <em>
                This website was designed, built, and deployed in-house — 
                just another example of the Jack-of-all-Trades approach 
                behind SideKick Incorporated.
              </em>
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className={`section ${styles.cta}`}>
        <div className="container">
          <div className="comic-header-wrapper">
            <h2 className="comic-header comic-header--yellow">Ready to Meet Your SideKick?</h2>
          </div>
          <p className={styles.ctaText}>
            Now that you know the why, let's talk about your mission.
          </p>
          <a 
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-primary btn-large ${styles.ctaButton}`}
          >
            <WhatsAppIcon />
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
}

interface WorkExampleCardProps {
  example: WorkExample;
}

function WorkExampleCard({ example }: WorkExampleCardProps) {
  return (
    <div className={styles.exampleCard}>
      <div className={styles.exampleImage}>
        <span className={styles.examplePlaceholder}>{example.imagePlaceholder}</span>
      </div>
      <h3 className={styles.exampleTitle}>{example.title}</h3>
      <p className={styles.exampleDescription}>{example.description}</p>
    </div>
  );
}

function WhatsAppIcon() {
  return (
    <svg 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
    </svg>
  );
}

export default About;
