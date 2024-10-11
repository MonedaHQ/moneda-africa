import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import Trading from './Trading';
import Assets from './Assets';
import RiskSolutions from './RiskSolutions';
import CapitalManagement from './CapitalManagement';
import Consulting from './Consulting';
import PresentationalComponent from '@/components/PresentationalComponent';

function WhatWeDoHero() {
  const router = useRouter();
  const { venture } = router.query;

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Component has mounted
  }, []);

  function renderComponent() {
    if (!mounted) return null; // Avoid rendering during server-side render

    switch (venture) {
      case 'trading':
        return <Trading />;
      case 'assets':
        return <Assets />;
      case 'risk-advisory':
        return <RiskSolutions />;
      case 'capital-management':
        return <CapitalManagement />;
      default:
        return <Trading />;
    }
  }

  return <PresentationalComponent renderFunction={renderComponent} />;
}

export default WhatWeDoHero;
