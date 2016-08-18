import { createDevTools } from 'redux-devtools';
import DockMonitor from 'redux-devtools-dock-monitor';
import LogMonitor from 'redux-devtools-log-monitor';
import React from 'react';
const DevTools = createDevTools(
  <DockMonitor toggleVisibilityKey="H"
               defaultIsVisible={false}
               changePositionKey="W">
    <LogMonitor />
  </DockMonitor>
);

export default DevTools;
