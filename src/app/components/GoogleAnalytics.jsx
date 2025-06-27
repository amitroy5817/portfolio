'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { initGA, logPageView } from '../lib/ga';
import ReactGA from 'react-ga4';

const GoogleAnalytics = ({ measurementId }) => {
  const pathname = usePathname();

  useEffect(() => {
    if (!window.GA_INITIALIZED && measurementId) {
      initGA(measurementId);
      window.GA_INITIALIZED = true;
    }
    logPageView();
  }, [measurementId]);

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: pathname });
  }, [pathname]);

  return null;
};

export default GoogleAnalytics;