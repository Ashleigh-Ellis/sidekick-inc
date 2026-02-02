import styles from './WhySideKick.module.css';

const QUALITIES = [
  {
    icon: '🔧',
    title: 'Adaptable',
    description: 'Not rigid service lists. Real solutions for real problems.',
  },
  {
    icon: '🤝',
    title: 'Trustworthy',
    description: 'Reliable, honest, and respectful of your space and time.',
  },
  {
    icon: '💡',
    title: 'Intuitive',
    description: 'Understanding what you need, often before you ask.',
  },
  {
    icon: '✨',
    title: 'Thorough',
    description: 'Stepping in where needed, stepping back when complete.',
  },
];

export function WhySideKick() {
  return (
    <section className={`section section-dark ${styles.whySidekick}`} id="why">
      <div className="container">
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h2 className={styles.title}>Why SideKick?</h2>
            
            <div className={styles.philosophy}>
              <p className={styles.leadText}>
                SideKick Incorporated isn't about rigid service lists or 
                one-size-fits-all solutions.
              </p>
              <p>
                It's about being adaptable, trustworthy, and intuitive — 
                stepping in where you need support and stepping back when 
                the mission is complete.
              </p>
            </div>
            
            <div className={styles.poetic}>
              <p>The sidekick is the hero's hero.</p>
              <p>The secret weapon.</p>
              <p>The emergency call.</p>
              <p>The intuitive hand.</p>
            </div>
            
            <div className={styles.buildNote}>
              <span className={styles.noteIcon}>🛠️</span>
              <p>
                <em>
                  This website was designed, built, and deployed in-house — 
                  just another example of the Jack-of-all-Trades approach 
                  behind SideKick Incorporated.
                </em>
              </p>
            </div>
          </div>
          
          <div className={styles.qualities}>
            {QUALITIES.map((quality, index) => (
              <div key={index} className={styles.qualityCard}>
                <span className={styles.qualityIcon} role="img" aria-hidden="true">
                  {quality.icon}
                </span>
                <h3 className={styles.qualityTitle}>{quality.title}</h3>
                <p className={styles.qualityDescription}>{quality.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className={styles.decorativeLines} aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </section>
  );
}

export default WhySideKick;
