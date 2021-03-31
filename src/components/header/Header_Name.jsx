import React, {Component} from 'react';
import styled from 'styled-components';

export default class HeaderName extends Component{
	constructor(props){
		super(props);
	}
	render(){
		const HeaderName = styled.span`
		font-family: Roboto;
  		font-size: 23px;
  		font-weight: bold;
  		font-stretch: normal;
  		font-style: normal;
  		line-height: 4.96;
  		letter-spacing: 0.58px;
  		text-align: left;
  		color: #161616;`;
		return(
			<HeaderName>TrainingProject</HeaderName>
		);
	}
}