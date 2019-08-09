import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  AddEdit,
  Button,
  SearchWrapper
} from './style';

const Header = (props) => {
  const {
    focus,
    handleInputFocus,
    handleInputBlur
  } = props;
  return(
    <HeaderWrapper>
      <Logo/>
      <Nav>
        <NavItem className="left active">首页</NavItem>
        <NavItem className="left">下载App</NavItem>
        <NavItem className="right">登录</NavItem>
        <NavItem className="right">
          <i className="iconfont iconAa"></i>
        </NavItem>
        <SearchWrapper
          className={focus ? 'focused' : ''}
        >
          <CSSTransition
            in={focus}
            timeout={200}
            classNames='slide'
          >
            <NavSearch 
              className={focus ? 'focused' : ''}
              onFocus={handleInputFocus}
              onBlur={handleInputBlur}
            >
            </NavSearch>
          </CSSTransition>
          <i className="iconfont iconmagnifier"></i>
        </SearchWrapper>
      </Nav>
      <AddEdit>
        <Button className="writting">写文章</Button>
        <Button className="registe">注册</Button>
      </AddEdit>
    </HeaderWrapper>
  )
}
const mapSateToProps = (state) => {
  return  {
    focus: state.header.focus
  }
}

const mapDispatchProps = (dispatch) => {
  return {
    handleInputFocus() {
      const action = {
        type: 'search_focus'
      };
      dispatch(action);
    },
    handleInputBlur() {
      const action = {
        type: 'search_blur'
      };
      dispatch(action); 
    }
  }
}
export default connect(mapSateToProps, mapDispatchProps)(Header);