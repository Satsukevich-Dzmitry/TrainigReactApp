import React, {Component} from 'react';
import Header from '../header/Header';
import Slider from '../TopSlider/Slider';
import BlogContainer from '../blog/blogContainer';
import styled from 'styled-components';

export default class App extends Component{
	constructor(props){
		super(props);
		this.state = {
			postData : [{label: 'InitialPost: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
				id: 'post1'},
			{label: 'post2',
				id: 'post2'},
			{label: 'post3',
				id: 'post3'},
			{label: 'post4',
				id: 'post4'}],
		};
		this.onPostDelete=this.onPostDelete.bind(this);
		this.onPostAdd=this.onPostAdd.bind(this);
	}
	onPostDelete(id){
		this.setState(({postData})=>{
			const delPost = postData.findIndex(elem => elem.id === id);
			const before = postData.slice(0, delPost),
				after = postData.slice(delPost + 1);

			const newArr = [...before, ...after];
			return {
				postData: newArr
			};
		}
		);
	}
	onPostAdd(text){
		const newPost = {
			label: text,
			id: `${Math.random()*1000}`
		};
		this.setState(({postData})=>{
			const updatedArr = [...postData, newPost];
			return {
				postData: updatedArr
			};
		});
	}
	render(){
		const App = styled.div`
		box-sizing:border-box;
		width:100%;
		padding: 0 90px 0 90px`;
		
		const slides=['Slide1', 'Slide2', 'Slide3'];

		return(
			<App>
				<Header/>
				<Slider slides={slides}/>
				<BlogContainer posts = {this.state.postData} onDelete={this.onPostDelete} onAdd={this.onPostAdd}/>
			</App>
		);	
	}
}