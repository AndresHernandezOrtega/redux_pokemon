import React from 'react'
import { Loader as SemanticLoader, Dimmer} from 'semantic-ui-react'

export default function Loader({loading}) {
  return (
    <Dimmer active={loading}>
        <SemanticLoader />
    </Dimmer>
  )
}
