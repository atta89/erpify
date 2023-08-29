import { cloneElement, FC, ReactElement } from "react";
import { useScrollTrigger } from "@mui/material";

const ElevationScroll: FC<{
  children: ReactElement;
}> = ({ children }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });

  return cloneElement(children, {
    elevation: trigger ? 4 : 0,
  });
};

export default ElevationScroll;
