import React, { useEffect, useState } from "react";
import { Gateway } from "./contexts/ConfigContext";
import { lightTheme } from "./theming";
import { ThemeProvider } from "@emotion/react";
import { OnexcConfig } from "./types";
import { Onexc } from "./core/utils";
import { PaymentModal } from "./views/modal"

const App = () => {
    const [config, setConfig] = useState<OnexcConfig>();
    const [modalOpen, setModalOpen] = useState(false);

    useEffect(() => {
        Onexc.gateway = {
            launch(config) {
                setConfig(config);
                setModalOpen(true);
            },
            release() {
                setModalOpen(false);
                setConfig(undefined);
            }
        };
    }, [config]);

    if (!config) {
        return <></>
    }

    return <ThemeProvider theme={lightTheme}>
        <Gateway config={config}>
            <PaymentModal isOpen={modalOpen}/>
        </Gateway>
    </ThemeProvider>
}

export default App;