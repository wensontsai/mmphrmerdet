var React = require('react');

var Header = React.createClass({
	getInitialState: function(){
		return {
			text: ''
		}
	},
	render: function(){
		return(
			<div className="input-group">
				<input 
					value={this.state.text}
					onChange={this.handleInputChange}
					type="text" 
					className="form-control" />
				<span className="input-group-btn">
					<button 
						onClick={this.handleClick}
						className="btn btn-default" 
						type="button">
						Add
					</button>
				</span>
				{this.state.text}
			</div>
			);
	},
	handleClick: function(){
		//send value of text input to Firebase
		this.props.itemsStore.push({
			text: this.state.text,
			done: false
		});
	},
	handleInputChange: function(event){
		this.setState( {text: event.target.value} )
	}
});



module.exports = Header;