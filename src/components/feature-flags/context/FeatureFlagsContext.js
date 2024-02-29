import { createContext, useEffect, useState } from "react";
import fetchFeatureFlagsDataServiceCall from "../data";

export const FeatureFlagsContext = createContext(null);

export default function FeatureFlagsGlobalState({children}) {
  const [loading, setLoading] = useState(false);
  const [enabledFlags, setEnabledFlags] = useState({});
  const [error, setError] = useState(null);

  async function fetchFeatureFlags() {
    try {
      //original service call
      setLoading(true);
      const response = await fetchFeatureFlagsDataServiceCall();
      setEnabledFlags(response);
      console.log(response);
      setLoading(false);
    } catch (error) {
      setLoading(false)
      console.log(error);
      setError(error);
      throw new Error(error);
    }
  }

  useEffect(() => {
    fetchFeatureFlags();
  }, []);

  return (
    <FeatureFlagsContext.Provider value={{ loading, enabledFlags }}>
      {children}
    </FeatureFlagsContext.Provider>
  );
}
