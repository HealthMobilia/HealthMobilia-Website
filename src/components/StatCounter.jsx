import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function StatCounter({ value, duration = 2 }) {
  const { ref, inView } = useInView({
    triggerOnce: true, // Only trigger the animation once
    threshold: 0.1,    // Trigger when 10% of the element is visible
  });

  return (
    <span ref={ref}>
      {inView ? <CountUp end={value} duration={duration} separator="," /> : '0'}
    </span>
  );
}