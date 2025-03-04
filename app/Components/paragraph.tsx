'use client';

import React, { useRef, useEffect } from 'react';

export default function paragraphComponent() {
  const paragraphRef = useRef<HTMLParagraphElement | null>(null);

  useEffect(() => {
    if (paragraphRef.current) {
      paragraphRef.current.focus(); 
    }
  }, []);

}
