import React from 'react'


const ControlPanel = ({switchPlayStop}) => {
    return(
        <form>
          <div className="form-group row">
            <label  className="col-sm-2 col-form-label col-form-label-sm">Play</label>
            <div className="col-sm-10">
              <button type="button" className="btn btn-primary btn-sm" onClick={() => switchPlayStop()} >Start/Stop</button> 
            </div>
          </div>
          <div className="form-group row">
            <label  className="col-sm-2 col-form-label col-form-label-sm">Start & End</label>
            <div className="col-sm-4">
              <input type="text" className="form-control form-control-sm" id="colFormLabelSm"
                     placeholder="start" />
            </div>
            <div className="col-sm-4">
              <input type="text" className="form-control form-control-sm" id="colFormLabelSm"
                     placeholder="end" />
            </div>
            
          </div>                  
        </form>
    );
};
export default ControlPanel;
