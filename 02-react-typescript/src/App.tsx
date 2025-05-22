import React, { useState } from 'react';
import StateEffectSample from './pages/StateEffectSample';
import RefSample from './pages/RefSample';
import CallbackSample from './pages/CallbackSample';
import MemoSample from './pages/MemoSample';
import CustomHookSample from './pages/CustomHookSample';
import './App.css';

const samples = [
  { key: 'state', label: 'useState/useEffect', component: <StateEffectSample /> },
  { key: 'ref', label: 'useRef', component: <RefSample /> },
  { key: 'callback', label: 'useCallback', component: <CallbackSample /> },
  { key: 'memo', label: 'useMemo', component: <MemoSample /> },
  { key: 'custom', label: 'カスタムフック', component: <CustomHookSample /> },
];

const App: React.FC = () => {
  const [tab, setTab] = useState(samples[0].key);

  return (
    <div>
      <h1>React Hooks型付けサンプル集</h1>
      <div>
        {samples.map((s) => (
          <button
            key={s.key}
            onClick={() => setTab(s.key)}
            style={{ marginRight: 8 }}
          >
            {s.label}
          </button>
        ))}
      </div>
      <div style={{ marginTop: 24 }}>
        {samples.find((s) => s.key === tab)?.component}
      </div>
    </div>
  );
};

export default App;
