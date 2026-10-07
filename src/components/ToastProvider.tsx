"use client";

import React, { createContext, useContext, useState } from 'react';

type ToastContextType = {
  showToast: (msg: string) => void;
};

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toastMsg, setToastMsg] = useState('');
  const [toastVisible, setToastVisible] = useState(false);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 4000);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className={`toast ${toastVisible ? 'show' : ''}`}>
        <i className="ri-checkbox-circle-fill" style={{ color: '#34d399', fontSize: 18 }}></i>
        <span>{toastMsg}</span>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const context = useContext(ToastContext);
  if (!context) throw new Error('useToast must be used within ToastProvider');
  return context;
}
