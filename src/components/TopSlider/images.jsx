import React, {Component} from 'react';
import styled from 'styled-components';
import NavBtns from './NavBtns';

export default class Images extends Component{
	constructor(props){
		super(props);
	}
	render(){
		const {curImage, images, onBtn}= this.props,
			TempImgDiv = styled.div`
			width:100%;
			position:relative;
			min-height: 400px;
			background-color: #e9e9e9;`;
		const Image = styled.img`
		width:100%;
		min-width:100%;
		min-height: 400px;
		background-color: #e9e9e9;`;
		return (
			<TempImgDiv>
				<p>{images[curImage]}</p>
				<Image src={images[curImage]} alt={images[curImage]}></Image>
				<NavBtns onBtn={onBtn}/>
			</TempImgDiv>
			
		);
	}
}