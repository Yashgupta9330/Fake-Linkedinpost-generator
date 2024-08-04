import React, { ReactNode, useContext } from "react";

const ImageProviderContext = React.createContext<any>({});

const ImageProvider: React.FC<{ children?: ReactNode }> = ({ children }) => {
  const data = {};
  return (
    <ImageProviderContext.Provider value={{ ...data }}>
      {children}
    </ImageProviderContext.Provider>
  );
};

export default ImageProvider;

export const useToImage = () => {
  const context = useContext(ImageProviderContext);
  if (context === null) {
    throw new Error("useToImageContext must be used within a ToImageProvider");
  }
  return context;
};
