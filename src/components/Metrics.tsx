import { useCountIncrement } from '@/hooks/useCountIncrement';

import Section from './Section';
import styles from './styles/metrics.module.css';

type MetricItem = {
  metric: number;
  prefix: string | null;
  suffix: string;
  description: string;
};

const data: MetricItem[] = [
  {
    metric: 10,
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
    description: 'deployed to SMES',
  },
  {
    metric: 130,
    prefix: null,
    suffix: '+',
    description: 'onboarded African SMEs',
  },
];

type MetricsProps = {
  paddingTop?: boolean;
  metrics?: MetricItem[];
};

function Metrics({ paddingTop = false, metrics = data }: MetricsProps) {
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

function Metric({ metric }: { metric: MetricItem }) {
  const [metricDigit, metricRef] = useCountIncrement(0, metric.metric);

  return (
    <div className={styles.metric}>
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
