import React, {Component} from 'react';
import styled from 'styled-components';

export default class BlogPost extends Component{
	constructor(props){
		super(props);
	}
	render(){
		const BlogPost = styled.div`
			position:relative;
			box-sizing: border-box;
			border: 1px solid black;
			padding: 5px; 	
			width:100%;
			height:100%;
			background:white;
			border-radius: 5px;
			display: grid;
			gap: 15px;
			grid-template-columns: 3fr 7fr;`,
			Btn = styled.button`
				
				position: absolute;
				left:100%;
				transform: translateX(-110%);
				width: 20px;
				height: 20px;
				border-radius:50%;
				border:none;
				background: red;`,
			Author = styled.div`
			width: 200px;
			height: 200px;
			background:#e9e9e9;
			border-radius: 50%;
			`;
		const {label, onDelete, id} = this.props;
		return(
			<BlogPost id={id}>
				<Author/>
				{label}
				<Btn onClick={onDelete}>X</Btn>
			</BlogPost>
		);
	}
}