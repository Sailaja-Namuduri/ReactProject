import React from 'react'

export const TextBox = (props) => {
    const {obj,fnChange} =props
    const {lbl,type,errorMsg,isShowError,value,name}=obj
  return (
    <div className="row mb-3">
            <div className="col-sm-5 text-end">
              <b>{lbl}:</b>
            </div>
            <div className="col-sm-3">
              <input onChange={fnChange}  type={type} name={name} className="form-control" />
            </div>
            <div className="col-sm-4">
                {isShowError && <b className="text-danger">{errorMsg}</b>}
            </div>
      </div>
  )
}
