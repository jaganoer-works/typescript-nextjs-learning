import React from 'react';

type MainTemplateProps = {
  children: React.ReactNode;
};

const MainTemplate: React.FC<MainTemplateProps> = ({ children }) => (
  <div>
    <header style={{ padding: '1rem', background: '#eee' }}>
      <h1>Atomic Design サンプル</h1>
    </header>
    <main style={{ padding: '2rem' }}>{children}</main>
    <footer style={{ padding: '1rem', background: '#eee', marginTop: '2rem' }}>
      <small>© 2025 Sample</small>
    </footer>
  </div>
);

export default MainTemplate; 