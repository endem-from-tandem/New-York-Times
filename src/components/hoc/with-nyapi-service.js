import React from 'react'
import {NyapiServiceConsumer} from '../nyapi-service-context'

const withNyapiService = () => (Wrapped) => {
    return (props) => {
        return (
            <NyapiServiceConsumer>
                {
                    (NyapiService) => {
                        return(
                            <Wrapped 
                              {...props} 
                              nys = {NyapiService} 
                            />
                        )
                    }
                }
            </NyapiServiceConsumer>
        )
    }
}

export default withNyapiService