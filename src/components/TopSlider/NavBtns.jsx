import React, {Component} from 'react';
import styled from 'styled-components';

export default class NavBtns extends Component{
	constructor(props){
		super(props);
	}
	render(){
		const NavLine = styled.div`
		position:absolute;
		width:100%;
		top:50%;
		transform: translateY(-50%);
		height:100px;
		z-index:10;
		display:flex;
		justify-content:space-between;
		align-items:center`;
		const LeftBtn = styled.button`
		font-size: 24px;
		background:transparent;
		border:none;`;
		const RightBtn = styled.button`
		font-size: 24px;
		background:transparent;
		border:none;`;
		const {onBtn}=this.props;


		return(
			<NavLine>
				<LeftBtn id='prev' onClick={onBtn}>&#8249;</LeftBtn>
				<RightBtn id='next' onClick={onBtn}>&#8250;</RightBtn>
			</NavLine>
		);
	}
}