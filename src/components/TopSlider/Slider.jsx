import React, {Component} from 'react';
import styled from 'styled-components';
import Dots from './Dots';
import Images from './images';

export default class Slider extends Component{
	constructor(props){
		super(props);
		this.state ={
			activeSlide: 1,
			slides:this.props.slides
		};
		this.changeActive=this.changeActive.bind(this);
		this.moveSlide=this.moveSlide.bind(this);
	}
	changeActive(el){
		this.setState({
			activeSlide: +el.target.id
		});
	}
	moveSlide(btn){
		this.setState(({activeSlide})=>{
			let newIndex;
			const id = btn.target.id;
			if(id == 'next'){
				if(activeSlide < this.state.slides.length - 1){				
					newIndex = activeSlide + 1;
				}else{
					newIndex = 0;
				}
			}else{
				if(activeSlide > 0){
					newIndex = activeSlide - 1;
				}else{
					newIndex = this.state.slides.length-1;
				}	
			}
			return{
				activeSlide: newIndex
			};
		});
	}
	render(){
		const SliderDiv = styled.div`
		position:relative;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: space-evenly;
		margin-bottom: 25px;
		`;
		return(
			<SliderDiv>
				<Images curImage={this.state.activeSlide} images={this.state.slides} onBtn={this.moveSlide}/>
				<Dots count={this.state.slides} active={this.state.activeSlide} changeInd ={this.changeActive}/>
			</SliderDiv>
		);
	}
}