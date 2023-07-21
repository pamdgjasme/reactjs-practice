import React, { useState } from 'react'
import { ProgressBar } from  'react-loader-spinner'
import './IsLoadingShared.css'

export const IsLoadingShared = (WrappedComponent, loadingMessage, loaderInitState = true) => {
  function Loader(props) {
    const [isLoading, setLoading] = useState(loaderInitState)
    const setLoadingState = isComponentLoading => {
      setLoading(isComponentLoading)
    }

    return(
      <>
        {
          isLoading && 
          <div className="overlay-loader">
            <ProgressBar
              height="80"
              width="80"
              ariaLabel="progress-bar-loading"
              wrapperStyle={{}}
              wrapperClass="progress-bar-wrapper"
              borderColor='#F4442E'
              barColor='#51E5FF'
            />
            <h4>{loadingMessage}</h4>
          </div>
        }
        <WrappedComponent {...props} setLoading={setLoadingState} />
      </>
    )
  }

  return Loader
}

export default IsLoadingShared
