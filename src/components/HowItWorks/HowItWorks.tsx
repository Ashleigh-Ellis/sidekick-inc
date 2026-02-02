import styles from './HowItWorks.module.css';

const STEPS = [
  {
    number: '01',
    title: 'Send the Signal',
    description: 'Reach out via WhatsApp with a short description of what you need.',
    icon: '📲',
  },
  {
    number: '02',
    title: 'Clarify the Mission',
    description: 'We confirm scope, timing, location, and any special considerations.',
    icon: '🎯',
  },
  {
    number: '03',
    title: 'Agreement & Go-Time',
    description: 'Once details are agreed, your SideKick gets to work.',
    icon: '⚡',
  },
  {
    number: '04',
    title: 'Wrap-Up',
    description: 'Clear communication on completion, next steps if needed, and billing.',
    icon: '✅',
  },
];

export function HowItWorks() {
  return (
    <section className={`section section-alt ${styles.howItWorks}`} id="how-it-works">
      <div className="container">
        <div className="section-title">
          <div className="comic-header-wrapper">
            <h2 className="comic-header comic-header--purple">How It Works</h2>
          </div>
          <p>
            Not sure which mission fits? Describe what you need — 
            <strong> SideKick will take it from there.</strong>
          </p>
        </div>
        
        <div className={styles.stepsContainer}>
          {STEPS.map((step, index) => (
            <div key={step.number} className={styles.step}>
              <div className={styles.stepNumber}>
                <span className={styles.number}>{step.number}</span>
              </div>
              
              <div className={styles.stepContent}>
                <div className={styles.stepIcon}>
                  <span role="img" aria-hidden="true">{step.icon}</span>
                </div>
                <h3 className={styles.stepTitle}>{step.title}</h3>
                <p className={styles.stepDescription}>{step.description}</p>
              </div>
              
              {index < STEPS.length - 1 && (
                <div className={styles.connector} aria-hidden="true">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 5v14M5 12l7 7 7-7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className={styles.values}>
          <p>
            SideKick Incorporated values clarity, boundaries, and mutual respect — 
            no surprise charges, no vague expectations.
          </p>
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
