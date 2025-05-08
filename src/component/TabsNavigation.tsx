import { Tabs, Tab } from "@mui/material";
import { useState } from "react";

const TabsNavigation = () => {
    const [value, setValue] = useState(1);
    return (
        <Tabs
            value={value}
            onChange={(e, val) => setValue(val)}
            indicatorColor="primary"
            textColor="primary"
        >
            <Tab label="Summary" />
            <Tab label="Chart" />
            <Tab label="Statistics" />
            <Tab label="Analysis" />
            <Tab label="Settings" />
        </Tabs>
    );
};

export default TabsNavigation;  
