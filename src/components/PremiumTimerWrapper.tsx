import { useState, useEffect, ReactNode } from 'react';
import { PremiumModalOverlay } from './PremiumModalOverlay';

interface PremiumTimerWrapperProps {
  children: ReactNode;
  functionName: string;
}

export const PremiumTimerWrapper = ({ children, functionName }: PremiumTimerWrapperProps) => {
  const [showPremiumModal, setShowPremiumModal] = useState(false);

  useEffect(() => {
    // Timer de 3 segundos para mostrar o modal premium
    const timer = setTimeout(() => {
      setShowPremiumModal(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative">
      {children}
      {showPremiumModal && (
        <PremiumModalOverlay functionName={functionName} />
      )}
    </div>
  );
};