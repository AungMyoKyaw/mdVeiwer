import React from 'react';
import ReactDom from 'react-dom';
import Remarkable from 'remarkable';
import './style.scss';
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
			<div>
				<h1 className='header'><a href="./">Markdown Viewer</a></h1>
			    <div className='Markdown'>
			    	<h2>Markdown</h2>
				<textarea ref='md' cols="30" rows="20" palcaholder="Type your Markdown here !" value={this.state.text} onChange={this.handle}></textarea>
				</div>
				<div className='Output'>
					<h2>Output</h2>
					<div dangerouslySetInnerHTML={this.Markdown()}></div>
				</div>
				<a href='https://github.com/AungMyoKyaw/mdVeiwer' className='ribbon' target='_blank'><img src="http://s3.amazonaws.com/github/ribbons/forkme_left_orange_ff7600.png" alt="Fork Me"/></a>
			</div>
		);
	}
});
ReactDom.render(<MDviewer/>,document.getElementById('app'));