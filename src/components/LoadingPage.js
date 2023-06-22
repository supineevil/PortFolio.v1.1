import React from 'react';
import '../CSS/Loading.css';
import { HashLoader } from 'react-spinners';
function LoadingPage(props) {
  return (
    <div className="loading">
      <HashLoader   color="#8fd636" loading={props.loading}  size={200} speedMultiplier={2}/>
    </div>
  )
}

export default LoadingPage
