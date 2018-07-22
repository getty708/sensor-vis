import React from 'react'


const ControlPanel = ({switchPlayStop}) => {
    return(
        <div className="row justify-content-between">
          <div className="col-4">
            <button type="button" className="btn btn-primary" onClick={() => switchPlayStop()} >Start/Stop</button>            
          </div>
        </div>
    );
};
export default ControlPanel;
