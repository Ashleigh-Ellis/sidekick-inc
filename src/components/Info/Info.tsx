import styles from './Info.module.css';

const INFO_SECTIONS = [
  {
    id: 'availability',
    icon: '📍',
    title: 'Availability & Service Area',
    content: [
      'SideKick Incorporated operates in **Cape Town and surrounding areas**.',
      'Availability is **flexible and arranged per mission**, depending on scope, timing, and location.',
      'Extended or overnight missions are scheduled in advance to ensure proper coverage and care.',
    ],
  },
  {
    id: 'cancellations',
    icon: '📅',
    title: 'Cancellations & Rescheduling',
    content: [
      'Life happens — SideKick understands.',
      'Please provide **24 hours\' notice** where possible. Same-day changes or cancellations due to genuine emergencies are handled with understanding.',
      'There are **no cancellation fees** at this stage. Clear communication is all that\'s asked.',
      'For outdoor, travel, or pet-related missions, services may be rescheduled due to unsafe weather or conditions to prioritise safety and wellbeing.',
    ],
  },
  {
    id: 'pet-care',
    icon: '🐾',
    title: 'Pet Care Notes',
    content: [
      'For pet-related missions, clients are asked to provide clear instructions regarding routines, feeding, medications (if applicable), emergency contacts, and any behavioural considerations.',
      'SideKick Incorporated offers attentive, compassionate care but does not provide veterinary or medical services.',
      'Any medical concerns or emergencies will be communicated immediately using the contact details supplied by the client.',
    ],
  },
  {
    id: 'quick-note',
    icon: '📋',
    title: 'A Quick Note',
    content: [
      'SideKick Incorporated offers hands-on help, support, and supervision — not licensed trade, legal, medical, or security services.',
      'For lookout and oversight missions, SideKick provides reliable presence and communication, not professional security or emergency response.',
      'We take care, show up, and communicate clearly — and we ask clients to do the same.',
    ],
    isHighlighted: true,
  },
];

export function Info() {
  return (
    <section className={`section ${styles.info}`}>
      <div className="container">
        <div className={styles.infoGrid}>
          {INFO_SECTIONS.map((section) => (
            <InfoCard 
              key={section.id} 
              section={section} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface InfoCardProps {
  section: {
    id: string;
    icon: string;
    title: string;
    content: string[];
    isHighlighted?: boolean;
  };
}

function InfoCard({ section }: InfoCardProps) {
  const cardClass = section.isHighlighted 
    ? `${styles.infoCard} ${styles.highlighted}` 
    : styles.infoCard;

  return (
    <article className={cardClass} id={section.id}>
      <div className={styles.cardHeader}>
        <span className={styles.icon} role="img" aria-hidden="true">
          {section.icon}
        </span>
        <h3 className={styles.title}>{section.title}</h3>
      </div>
      <div className={styles.cardContent}>
        {section.content.map((paragraph, index) => (
          <p 
            key={index}
            dangerouslySetInnerHTML={{ 
              __html: formatBoldText(paragraph) 
            }}
          />
        ))}
      </div>
    </article>
  );
}

function formatBoldText(text: string): string {
  return text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
}

export default Info;
