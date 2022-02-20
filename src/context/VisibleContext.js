import { createContext, useState, useEffect, useContext } from "react";

const VisibleContext = createContext(false);

export const VisibleProvider = ({ children }) => {
  const [visible, setVisible] = useState(true);
  const [deleteForm, setDeleteForm] = useState(true);

  useEffect(() => {
    setVisible(true);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setDeleteForm(true);
    }, 5000);
  }, [deleteForm]);

  const values = {
    visible,
    setVisible,
    deleteForm,
    setDeleteForm,
  };

  return (
    <VisibleContext.Provider value={values}>{children}</VisibleContext.Provider>
  );
};

export const useVisible = () => useContext(VisibleContext);
