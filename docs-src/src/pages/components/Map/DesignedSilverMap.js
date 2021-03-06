import React, {Component} from 'react'
import ExampleSection from '../../../ExampleSection'
import scope from '../../../ExampleScope'
import Headers from '../../../Headers'
import Layout from '../../../layouts/index.js'

const examples = {
  Basic: require('raw-loader!../../../examples/Map/DesignedSilverMap.js.example'),
}

export default class DesignedSilverMapExamplePage extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <Headers
          title="Small Designed Silver Map Component"
          metaDescription={
            'This is a Small Designed Silver Map Component, we have passed' +
            '"small" as a prop to the Map component. There is a small, medium and' +
            'large props.'
          }
          extraKeywords="Map"
        >
          <p>
            This is a Small Designed Silver Map Component, we have passed
            "small" as a prop to the Map component. There is a small, medium and
            large props. As well the silver style comes from SilverStyle props.
            Icons can be clicked and Info windows easily dismissed.
          </p>
        </Headers>
        <ExampleSection examples={examples} depth={1} scope={scope} />
      </Layout>
    )
  }
}
