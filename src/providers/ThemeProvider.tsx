
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import { useEffect, useState } from "react"

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <NextThemesProvider 
      {...props} 
      themes={['light', 'dark', 'system']}
      enableSystem={true}
      enableColorScheme={true}
      disableTransitionOnChange={false}
      attribute="class"
    >
      {children}
    </NextThemesProvider>
  )
}
