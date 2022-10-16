import * as React from 'react';

export interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <React.Fragment>
      <h1>Dashboard Layout</h1>
      {children}
    </React.Fragment>
  );
}
