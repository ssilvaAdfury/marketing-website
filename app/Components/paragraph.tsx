'use client';

import React, { useRef, useEffect } from 'react';

export default function paragraphComponent() {
  // Explicitly tell TypeScript this is a reference to a paragraph element
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (paragraphRef.current) {
      paragraphRef.current.focus(); // ✅ No TypeScript error now!
    }
  }, []);

}
