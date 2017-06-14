import React, { Component, PropTypes } from "react"
import { OAS3ComponentWrapFactory } from "../helpers"
import { Model } from "core/components/model"


class ModelComponent extends Component {
  static propTypes = {
    schema: PropTypes.object.isRequired,
    name: PropTypes.string,
    getComponent: PropTypes.func.isRequired,
    specSelectors: PropTypes.object.isRequired,
    expandDepth: PropTypes.number
  }

  render(){
    let { schema } = this.props
    let classes = ["model-box"]
    let isDeprecated = schema.get("deprecated") === true
    let message = null

    if(isDeprecated) {
      classes.push("deprecated")
      message = <span className="model-deprecated-warning">Deprecated:</span>
    }
    return <div className={classes.join(" ")}>
      {message}
      <Model { ...this.props }
        depth={ 1 }
        expandDepth={ this.props.expandDepth || 0 }
        />
    </div>
  }
}

export default OAS3ComponentWrapFactory(ModelComponent)
