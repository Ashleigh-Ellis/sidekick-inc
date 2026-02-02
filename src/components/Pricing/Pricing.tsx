import styles from './Pricing.module.css';

const PRICING_ITEMS = [
  {
    icon: '⏱️',
    label: 'Standard rate',
    value: 'R200',
    unit: 'per hour',
    description: 'For most missions and tasks',
  },
  {
    icon: '🚗',
    label: 'Travel',
    value: 'AA rates',
    unit: 'fuel costs',
    description: 'When travel is required',
  },
  {
    icon: '🌙',
    label: 'Extended missions',
    value: 'Quoted',
    unit: 'individually',
    description: 'Overnight jobs, long-term lookout, special projects',
  },
];

export function Pricing() {
  return (
    <section className={`section ${styles.pricing}`} id="pricing">
      <div className="container">
        <div className="section-title">
          <div className="comic-header-wrapper">
            <h2 className="comic-header comic-header--green">Pricing</h2>
          </div>
          <p>
            SideKick Incorporated keeps pricing simple, fair, and flexible.
          </p>
        </div>
        
        <div className={styles.pricingGrid}>
          {PRICING_ITEMS.map((item, index) => (
            <div key={index} className={styles.pricingCard}>
              <span className={styles.icon} role="img" aria-hidden="true">
                {item.icon}
              </span>
              <div className={styles.priceValue}>
                <span className={styles.value}>{item.value}</span>
                <span className={styles.unit}>{item.unit}</span>
              </div>
              <h3 className={styles.label}>{item.label}</h3>
              <p className={styles.description}>{item.description}</p>
            </div>
          ))}
        </div>
        
        <div className={styles.note}>
          <div className={styles.noteContent}>
            <span className={styles.noteIcon}>🍽️</span>
            <p>
              For house sitting and extended lookout missions, reduced rates may 
              apply when basic provisions (such as meals) are included — because 
              a well-fuelled SideKick is a happy SideKick.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pricing;
