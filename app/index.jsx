import React from 'react';
import ReactDom from 'react-dom';
import Remarkable from 'remarkable';
var MDviewer = React.createClass({
	getInitialState() {
	    return {
	        text:''
	    };
	},
	handle:function(e){
		e.preventDefault();
		this.setState({
			text:this.refs.md.value
		});
	},
	Markdown:function(){
		var md = new Remarkable({
			linkify:true,
		});
		return {__html:md.render(this.state.text)};
	},
	render:function(){
		return (
			<div className="container">
				<h1 className="text-center">Markdown Viewer</h1>
			    <div className='col-xs-12 col-md-6'>
			    <h2 className='text-center'>Markdown</h2>
				<textarea className='form-control' ref='md' cols="30" rows="20" palcaholder="Type your Markdown here !" value={this.state.text} onChange={this.handle}></textarea>
				</div>
				<div className='col-xs-12 col-md-6'>
					<h2 className='text-center'>Output</h2>
					<div dangerouslySetInnerHTML={this.Markdown()}></div>
				</div>
			</div>
		);
	}
});
ReactDom.render(<MDviewer/>,document.getElementById('app'));