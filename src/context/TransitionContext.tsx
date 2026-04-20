import React, { useState, createContext, useContext } from 'react';

type Timeline = {
  paused: (v: boolean) => Timeline;
  [key: string]: unknown;
};

const TransitionContext = createContext<{ timeline: Timeline | null; setTimeline: React.Dispatch<React.SetStateAction<Timeline | null>> } | undefined>(undefined);

function TransitionProvider({ children }: { children: React.ReactNode }) {
  const [timeline, setTimeline] = useState<Timeline | null>(null);

  return (
    <TransitionContext.Provider value={{ timeline, setTimeline }}>
      {children}
    </TransitionContext.Provider>
  );
}

function useTransitionContext() {
  const context = useContext(TransitionContext);
  if (context === undefined) {
    throw new Error('useTransition must be used within a TransitionProvider');
  }

  return context;
}

export { useTransitionContext, TransitionProvider };
