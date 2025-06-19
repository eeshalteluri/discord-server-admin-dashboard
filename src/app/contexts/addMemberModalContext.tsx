'use client'
import React, { createContext, useContext, useState, ReactNode } from 'react';

// Type for context value
interface AddMemberModalContextType {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

// Create context with default value `undefined`
const AddMemberModalContext = createContext<AddMemberModalContextType | undefined>(undefined);

// Provider component
export const AddMemberModalProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <AddMemberModalContext.Provider value={{ isOpen, onOpen, onClose }}>
      {children}
    </AddMemberModalContext.Provider>
  );
};

// Custom hook to use the modal context
export const useAddMemberModal = (): AddMemberModalContextType => {
  const context = useContext(AddMemberModalContext);
  if (!context) {
    throw new Error('useAddMemberModal must be used within an AddMemberModalProvider');
  }
  return context;
};
