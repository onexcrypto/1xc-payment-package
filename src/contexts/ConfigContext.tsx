import { createContext, PropsWithChildren, useContext, useState } from "react";
import { usePrepareConfig } from "../hooks/useConfig";
import React from "react";
import { useTheme } from "@emotion/react";
import { OnexcConfig, OnexcGateway } from "../core/types";

type ConfigContextType = ReturnType<typeof usePrepareConfig> & {
    frame: HTMLIFrameElement | undefined;
    configure: (next: HTMLIFrameElement) => any
    params: OnexcConfig;
}

const ConfigContext = createContext<ConfigContextType>({} as any);

export function useGateway() {
    return useContext(ConfigContext);
}

export function Gateway({ children, config }: PropsWithChildren<{ config: OnexcConfig }>) {
    const conf = usePrepareConfig(config);
    const theme = useTheme();
    const [frame, setFrame] = useState<HTMLIFrameElement | undefined>(undefined);

    return <ConfigContext.Provider
        value={{
            params: config,
            ...conf,
            frame: frame,
            configure: (nextFrame: HTMLIFrameElement | undefined) => setFrame(nextFrame)
        }}>
       {children}
    </ConfigContext.Provider>
}