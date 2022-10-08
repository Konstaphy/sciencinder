import { useMemo } from "react";

export const useAuthorization = () => {
  return useMemo(() => {
    return false;
  }, []);
};
