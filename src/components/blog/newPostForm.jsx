import React, {Component} from 'react';
import styled from 'styled-components';

const AddForm = styled.form`
				display: flex;
				margin-top: 20px;
				@media(min-width: 1024px){
					grid-column: 1/3;
				}
			`,
	AddFormInput = styled.input`
			display: block;
			width: 100%;
			height: calc(1.5em + .75rem + 2px);
			padding: .375rem .75rem;
			font-size: 1rem;
			font-weight: 400;
			line-height: 1.5;
			color: #495057;
			background-color: #fff;
			background-clip: padding-box;
			border: 1px solid #ced4da;
			border-radius: .25rem;
			transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
		`,
	FormBtn = styled.button`
			height:100%;
			font-size: 15px;
			background:transparent;
			border:1px solid black;
			border-radius: 10px;`;

export default class NewPostForm extends Component{
	constructor(props){
		super(props);
		this.state={
			curText: ''
		};
		this.onType=this.onType.bind(this);
		this.onSubmit = this.onSubmit.bind(this);
	}
	onType(e){
		this.setState({
			curText: e.target.value
		});
	}
	onSubmit(e){
		e.preventDefault();
		this.props.onAdd(this.state.curText);
		this.setState({
			curText: ''
		});
	}
	render(){
		return (
			<AddForm onSubmit={this.onSubmit}>
				<AddFormInput 
					type="text" placeholder="Want to add something?"
					onChange={this.onType} value={this.state.curText}/>
				<FormBtn>New Post!</FormBtn>
			</AddForm>
		);
	}
}