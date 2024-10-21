import React from 'react';
import './App.css';
import { useEffect, useState } from 'react';
// import SyncLoader from "react-spinners/SyncLoader";
import video1 from "./COMPONENTS/video1.gif"
const Newhome = React.lazy(() => import('./COMPONENTS/Newhome'));
function App() {
  const [showVideo, setShowVideo] = useState(true);
  return (
    <>
        <Newhome />
    </>
  )
}
export default App;
