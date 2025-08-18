import { useContext } from "react";
import { CanvasContext } from "./CanvasContext";

export const useCanvas = () => {
  const context = useContext(CanvasContext);
  if (!context) throw new Error("useCanvas must be inside <CanvasProvider>");
  return context;
};
