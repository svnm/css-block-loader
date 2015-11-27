import React from 'react';
import CSSModules from 'react-css-modules';

let styles = {}
//import { loader } from 'css-block-loader'
import loader from '../../../../lib/loader.css'
Object.assign(styles, loader)

function Loader( props) {

    const { route } = props;

    return (
		<div styleName='loader'>
	        <span styleName='block'></span>
	        <span styleName='block'></span>
	        <span styleName='block'></span>
	        <span styleName='block'></span>
	        <span styleName='block'></span>
	        <span styleName='block'></span>
	        <span styleName='block'></span>
	        <span styleName='block'></span>
	        <span styleName='block'></span>
	    </div>
    );
}

export default CSSModules(Loader, styles, {allowMultiple: true} )
