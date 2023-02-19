import React, { useEffect, useState } from 'react';

interface Section {
  id: string;
  duration: number;
}

interface Props {
  sections: Section[];
  scrollDuration: number;
}

const ScrollToSections: React.FC<Props> = ({ sections, scrollDuration }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex >= sections.length) {
      return;
    }

    const timeoutId = setTimeout(() => {
      const section = document.getElementById(sections[currentIndex].id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
      }

      setCurrentIndex(currentIndex + 1);
    }, sections[currentIndex].duration + scrollDuration);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [currentIndex, sections, scrollDuration]);

  return null;
};

export default ScrollToSections;
