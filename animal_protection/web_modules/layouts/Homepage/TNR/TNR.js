/* eslint-disable react/jsx-no-bind, react/jsx-no-literals, max-len, react/prop-types, react/no-multi-comp, react/jsx-closing-bracket-location  */

import React, { Component } from "react"
import Markdown from "react-markdown"

import classnames from "classnames"
import styles from "./Tnr.scss"
import Subsection from "../Components/Subsection"
import VisibleSensor from "../Components/VisibleSensor"
import commonStyles from "../../../styles/common.scss"

import tnrT from "../../../../content/assets/TNR-T.svg"

import { topBox, titles } from "./text"

// let velocity
// if (typeof window !== "undefined") {
//   velocity = require("velocity-animate")
// }

export default class Tnr extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showSubComponent: true,
    }

  }

  componentDidMount() {
    console.log("*******TNR")
  }

  render() {
    console.log("hello")
    return (
      <div className={ classnames(styles.container,
        commonStyles["text-center"]) }
      >
        <div className={ commonStyles["content-outer"] }>
          <div className={ classnames(styles["content-box"]) }>
            <Markdown source={ topBox } />
          </div>
          <Subsection curSec={ 2 } titles={ titles } subIndex={ 0 }>
            <VisibleSensor>
              <div className={ classnames(commonStyles["img-responsive"], styles["yoyo"]) } dangerouslySetInnerHTML={ { __html: tnrT } } />
              捕捉 TRAP
            </VisibleSensor>
          </Subsection>
          <Subsection curSec={ 2 } titles={ titles } subIndex={ 1 }>
            this is a subsection
            <div></div>
          </Subsection>
        </div>

      </div>
    )
  }
}

Tnr.propTypes = {}
