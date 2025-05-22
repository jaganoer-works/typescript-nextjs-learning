import React, { useRef } from 'react';

const RefSample: React.FC = () => {
  // useRefでinput要素への参照を型安全に保持
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={focusInput}>フォーカス</button>
    </div>
  );
};

export default RefSample; 