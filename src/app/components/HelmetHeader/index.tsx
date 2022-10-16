import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

export interface HelmetHeaderProps {
  userRole?: string;
  content: string;
  helmetTitle?: string;
}

export function HelmetHeader({
  userRole,
  content,
  helmetTitle = 'User Dashboard',
}: HelmetHeaderProps) {
  const { i18n } = useTranslation();
  const title =
    typeof userRole === 'undefined' ? `${helmetTitle}` : `${userRole}`;

  return (
    <Helmet htmlAttributes={{ lang: i18n.language }}>
      <title>{title}</title>
      <meta name="description" content={content} />
    </Helmet>
  );
}
