import React, {Component} from 'react';
import styled from 'styled-components';
import HeaderLink from './Header_link';
import HeaderName from './Header_Name';

export default class Header extends Component{
	constructor(props){
		super(props);
	}
	render(){
		const HeaderDiv = styled.div`
		box-sizing: border-box;
		display:flex;
		justify-content: space-between;
		padding: 0 20px 0 20px;
		align-items: center;
		width:100%;
		height:100px;
		@media(max-width: 1024px){
			height:50px;
		}`;

		return(
			<HeaderDiv>
				<HeaderName/>
				<HeaderLink/>
			</HeaderDiv>
		);
	}
}