import styles from './Missions.module.css';

interface Mission {
  id: string;
  icon: string;
  title: string;
  tagline: string;
  description: string;
  examples: string[];
  accentColor: 'green' | 'purple' | 'teal';
}

const MISSIONS: Mission[] = [
  {
    id: 'create',
    icon: '🛠️',
    title: 'CREATE',
    tagline: 'Fix it. Make it. Save the day.',
    description: 'Hands-on help for things that need repairing, adjusting, assembling, or creating. From sewing and alterations to practical fixes and custom problem-solving — if it can be made or mended, this is the mission.',
    examples: [
      'Clothing repairs & alterations',
      'Small fixes',
      'Creative builds',
      'Adjustments',
      'Custom requests',
    ],
    accentColor: 'green',
  },
  {
    id: 'move',
    icon: '🚗',
    title: 'MOVE MOVE MOVE!',
    tagline: 'Outings, errands, and getting things where they need to go.',
    description: 'Support on the move. Whether it\'s pet outings, running errands, accompanying tasks, or helping you navigate a busy day — this mission is all about momentum.',
    examples: [
      'Pet walks & outings',
      'Errands',
      'Transport assistance',
      'Accompanied tasks',
    ],
    accentColor: 'purple',
  },
  {
    id: 'lookout',
    icon: '👁️',
    title: 'STAND LOOKOUT',
    tagline: 'Quiet supervision. Total peace of mind.',
    description: 'When you can\'t be there, SideKick stands watch. Reliable presence for homes, deliveries, and oversight — calm, attentive, and dependable.',
    examples: [
      'House sitting',
      'Technician or contractor oversight',
      'Package and delivery reception',
    ],
    accentColor: 'teal',
  },
];

export function Missions() {
  return (
    <section className={`section ${styles.missions}`} id="missions">
      <div className="container">
        <div className="section-title">
          <div className="comic-header-wrapper">
            <h2 className="comic-header comic-header--orange">Our Missions</h2>
          </div>
          <p>
            Everyone is the hero of their own story. Every hero needs a sidekick: 
            the quiet problem-solver, the extra set of hands, the emergency call 
            when something needs to be handled <em>now</em>.
          </p>
        </div>
        
        <div className={styles.missionGrid}>
          {MISSIONS.map((mission) => (
            <MissionCard key={mission.id} mission={mission} />
          ))}
        </div>
      </div>
    </section>
  );
}

interface MissionCardProps {
  mission: Mission;
}

function MissionCard({ mission }: MissionCardProps) {
  const colorClass = styles[`accent${mission.accentColor.charAt(0).toUpperCase() + mission.accentColor.slice(1)}`];
  
  return (
    <article className={`${styles.missionCard} ${colorClass}`}>
      <div className={styles.cardHeader}>
        <div className={styles.iconWrapper}>
          <span className={styles.icon} role="img" aria-hidden="true">
            {mission.icon}
          </span>
        </div>
        <h3 className={styles.missionTitle}>{mission.title}</h3>
        <p className={styles.tagline}>{mission.tagline}</p>
      </div>
      
      <div className={styles.cardBody}>
        <p className={styles.description}>{mission.description}</p>
        
        <div className={styles.examples}>
          <span className={styles.examplesLabel}>Examples include:</span>
          <ul className={styles.examplesList}>
            {mission.examples.map((example, index) => (
              <li key={index} className={styles.exampleItem}>
                <span className={styles.bullet}>→</span>
                {example}
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      {/* Decorative comic elements */}
      <div className={styles.comicCorner} aria-hidden="true" />
    </article>
  );
}

export default Missions;
