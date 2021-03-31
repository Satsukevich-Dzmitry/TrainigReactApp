import React, {Component} from 'react';
import styled from 'styled-components';

export default class HeaderLink extends Component{
	constructor(props){
		super(props);
	}
	render(){
		const HeaderA = styled.button`
		font-family: Roboto;
  		font-size: 18px;
  		font-weight: bold;
  		font-stretch: normal;
  		font-style: normal;
  		letter-spacing: 0.45px;
  		text-align: left;
  		color: #161616;
		background: transparent;
		border: none;
		border-radius: 15px;
		transition-duration: 0.4s;
		:hover{
			background-color:#d5d5d5;
		}
		`;
		return(
			<HeaderA>Menu</HeaderA>
		);
	}
}