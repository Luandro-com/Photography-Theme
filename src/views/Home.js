import React from 'react'
import {compose, withProps, setDisplayName} from 'recompose'
require('../styles/home.css')

/**
 * Add Blazy to componentWillMount using Recomposes lifecycle method
 */
// lifecycle(
//   setup: (component: ReactComponent) => void
//   teardown: (component: ReactComponent) => void,
//   BaseComponent: ReactElementType
// ): ReactElementType
export default ({}) => (
	<div className="fotogrande"></div>
)
// export default Container;
// const Container = compose(
	
// 	withProps({
// 		image: 'imagelink'
// 	}),
// 	setDisplayName({
// 		displayName: 'BaseComponent'
// 	})
	
// )(BaseComponent)

// const BaseComponent = ({image}) => (
// 	<div className="fotogrande">
// 		<h1>{image || 'not found'}</h1>
// 	</div>
// )

// const Abc = compose(
//   withProps({
//     object: { a: 'a', b: 'b' },
//     c: 'c'
//   }),
//   flattenProp('object')
// )(BaseComponent);
// 
// flattenProp(
//   propName: string,
//   BaseComponent: ReactElementType
// ): ReactElementType
// 
// withProps(
//   props: Object,
//   BaseComponent: ReactElementType
// ): ReactElementType
//
// setDisplayName(
//   displayName: string,
//   BaseComponent: ReactElementType
// ): ReactElementType