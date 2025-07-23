import { useCountIncrement } from '@/hooks/useCountIncrement';

import styles from './styles/metrics.module.css';
import Section from './Section';

const data = [
  {
    metric: 9,
    prefix: null,
    suffix: '+',
    description: 'years investing in Africa',
  },
  {
    metric: 350,
    prefix: '$',
    suffix: 'm+',
    description: 'value of funding requests',
  },
  {
    metric: 200,
    prefix: '$',
    suffix: 'm+',
    description: 'value of funded requests',
  },
  {
    metric: 130,
    prefix: null,
    suffix: '+',
    description: 'onboarded African SMEs',
  },
];

function Metrics({ paddingTop = false, metrics = data }) {
  return (
    <Section color="darkBrown" paddingTop={paddingTop}>
      <div className={styles.metrics}>
        {metrics.map((metric) => (
          <Metric key={metric.metric} metric={metric} />
        ))}
      </div>
    </Section>
  );
}

function Metric({ metric }) {
  const [metricDigit, metricRef] = useCountIncrement(0, metric.metric);
  return (
    <div className={styles.metric} key={metric.metric}>
      <div className={styles.metricHeading} ref={metricRef}>
        <h2>
          {metric.prefix}
          {metricDigit}
          {metric.suffix}
        </h2>
      </div>
      <p>{metric.description}</p>
    </div>
  );
}

export default Metrics;
