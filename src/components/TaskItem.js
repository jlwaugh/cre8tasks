import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class TaskItem extends Component {
	getStyle = () => {
		return {
			background: '#f5f5f5',
			padding: '10px',
			borderBottom: '1px #ccc dotted',
			textDecoration: this.props.task.completed ?
			'line-through' : 'none'
		}
	}

	render() {
		const { id, title } = this.props.task;
		return (
			<div style={this.getStyle()}>
				<p>
					<input type="checkbox" onChange={this.props.markComplete.bind(this, id)} /> {' '}
					{ title }
					<button onClick={this.props.delTask.bind(this, id)} style={btnStyle}>X</button>
				</p>
			</div>
		);
	}
}

// PropTypes
TaskItem.propTypes = {
	tasks: PropTypes.object.isRequired
}

const btnStyle = {
	background: '#ff0000',
	color: '#fff',
	border: 'none',
	padding: '5px, 5px',
	borderRadius: '48%',
	cursor: 'pointer',
	float: 'right'
}

export default TaskItem;