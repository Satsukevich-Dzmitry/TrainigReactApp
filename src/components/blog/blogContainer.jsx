import React, {Component} from 'react';
import styled from 'styled-components';
import BlogPost from './blogPost';
import NewPostForm from './newPostForm';

export default class BlogContainer extends Component{
	constructor(props){
		super(props);
	}
	render(){
		const BlogContainer = styled.div`
		width:100%;
		padding: 10px 3px 10px 3px;
		min-height: 150px;
		background:  #e9e9e9;
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		@media(max-width:1024px){
			grid-template-columns: 1fr;
		}
		gap:15px;`;
		const {posts, onDelete, onAdd} = this.props,
			elements = posts.map((item)=>{
				return (<BlogPost key={item.id} label={item.label} onDelete={()=>onDelete(item.id)}/>);
			});

		return(
			<BlogContainer>
				{elements}
				<NewPostForm onAdd={onAdd}/>
			</BlogContainer>
		);
	}
}