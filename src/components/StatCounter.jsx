import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function StatCounter({ value, duration = 2 }) {
  const { ref, inView } = useInView({
    triggerOnce: true, 
    threshold: 0.1,    
  });

  return (
    <span ref={ref}>
      {inView ? <CountUp end={value} duration={duration} separator="," /> : '0'}
    </span>
  );
}