import React from 'react';
import type { Metadata } from 'next';
import { questrial } from '@/app/ui/fonts';
import '@/app/ui/globals.css';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full bg-white" lang="en">
      <body className={questrial.className}>{children}</body>
    </html>
  );
}
