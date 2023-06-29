import {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { usePrepareConfig } from "../hooks/useConfig";
import React from "react";
import { useTheme } from "@emotion/react";
import { OnexcConfig, OnexcGateway } from "../types";

type ConfigContextType = ReturnType<typeof usePrepareConfig> & {
  frame: HTMLIFrameElement | undefined;
  configure: (next: HTMLIFrameElement) => any;
  params: OnexcConfig;
};

const ConfigContext = createContext<ConfigContextType>({} as any);

export function useGateway() {
  return useContext(ConfigContext);
}

export function Gateway({
  children,
  config,
}: PropsWithChildren<{ config: OnexcConfig }>) {
  const conf = usePrepareConfig(config);
  const theme = useTheme();
  const [frame, setFrame] = useState<HTMLIFrameElement | undefined>(undefined);

  useEffect(() => {
    if (frame) {
      const messageListener = (ev: MessageEvent<any>) => {
        let data = ev.data;
        if (typeof data === "object") {
          if (data.from === "portal" && data.event && data.payload) {
            if (data.event === "ready") {
              frame.contentWindow?.postMessage(
                {
                  remote: true,
                  action: "config",
                  payload: { theme: "default" },
                },
                "*"
              );
            }

            if (
              data.event === "status:failed" &&
              data.payload &&
              config.onFailed
            ) {
              config.onFailed(data.payload);
            }

            if (
              data.event === "status:cancelled" &&
              data.payload &&
              config.onCancelled
            ) {
              config.onCancelled(data.payload);
            }

            if (data.event === "status:paid" && data.payload && config.onPaid) {
              config.onPaid(data.payload);
            }
          }
        }
      };

      window.addEventListener("message", messageListener);
      return () => {
        window.removeEventListener("message", messageListener);
      };
    }
  }, [config, frame]);

  return (
    <ConfigContext.Provider
      value={{
        params: config,
        ...conf,
        frame: frame,
        configure: (nextFrame: HTMLIFrameElement | undefined) =>
          setFrame(nextFrame),
      }}
    >
      {children}
    </ConfigContext.Provider>
  );
}
