import React, {Component} from 'react';
import styled from 'styled-components';

export default class Dots extends Component{
	constructor(props){
		super(props);
	}
	render(){
		const DotsDiv = styled.div`
		position:absolute;
		top:100%;
		transform: translateY(-100%);
		width: 300px;
		height: 100px;
		display: flex;
		align-items: center;
		justify-content: center;
		`;
		const Dot = styled.div`
		background-color:#d5d5d5;
		border-radius: 50%;
		width:15px;
		height:15px;
		margin: 0 5px 0 5px;
		:hover{
			background-color: #161616;
		}
		`;
		const {count, active, changeInd} = this.props;
		const dots = count.map((item, index)=>{
			if(index === active){
				return(<Dot key={index} id={index} style={{backgroundColor: '#161616'}} onClick={changeInd}/>);
			}
			return(<Dot key={index} id={index} onClick={changeInd}/>);
		});

		return (
			<DotsDiv>
				{dots}
			</DotsDiv>
		);
	}
}
	