import React from 'react';
import { AppShell } from '../AppShell';

export default {
  title: '@co-design/primitive/AppShell',
  component: AppShell,
};

export const Default = () => {
  const header = <AppShell.Header height={70}>Header</AppShell.Header>;

  const sidebar = <AppShell.Sidebar width={300}>Sidebar</AppShell.Sidebar>;

  return (
    <AppShell fixed header={header} sidebar={sidebar}>
      <div style={{ height: 10000 }}>Content</div>
    </AppShell>
  );
};

export const WithHeader = () => {
  const header = <AppShell.Header height={70}>Header</AppShell.Header>;

  return (
    <AppShell fixed header={header}>
      <div style={{ height: 10000 }}>Content</div>
    </AppShell>
  );
};

export const WithNoFixedHeader = () => {
  const header = <AppShell.Header height={70}>Header</AppShell.Header>;

  return (
    <AppShell header={header}>
      <div style={{ height: 10000 }}>Content</div>
    </AppShell>
  );
};

export const WithSidebar = () => {
  const sidebar = <AppShell.Sidebar width={300}>Sidebar</AppShell.Sidebar>;

  return (
    <AppShell fixed sidebar={sidebar}>
      <div style={{ height: 10000 }}>Content</div>
    </AppShell>
  );
};

export const WithResponsiveSidebar = () => {
  const header = <AppShell.Header height={70}>Header</AppShell.Header>;

  const sidebar = (
    <AppShell.Sidebar hidden width={{ base: 300, xsmall: 100, small: 200, medium: 300, large: 400 }}>
      Sidebar
    </AppShell.Sidebar>
  );

  return (
    <AppShell fixed header={header} sidebar={sidebar}>
      Content
    </AppShell>
  );
};

export const WithSidebarSection = () => {
  const header = (
    <AppShell.Header height={70} padding="small">
      Header
    </AppShell.Header>
  );

  const sidebar = (
    <AppShell.Sidebar width={300} padding="small">
      <AppShell.Sidebar.Section>Section1</AppShell.Sidebar.Section>
      <AppShell.Sidebar.Section grow>Secition2</AppShell.Sidebar.Section>
      <AppShell.Sidebar.Section>Section3</AppShell.Sidebar.Section>
    </AppShell.Sidebar>
  );

  return (
    <AppShell fixed header={header} sidebar={sidebar} padding="small">
      Content
    </AppShell>
  );
};
