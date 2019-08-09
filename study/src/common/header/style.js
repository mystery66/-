import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
  position: relative;
  height: 58px;
  border-bottom: 1px solid #f0f0f0; 
`;

export const Logo = styled.a.attrs({
  href: '/'
})`
  position: absolute;
  top: 0;
  left: 0;
  dispaly: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: 100%;
`;

export const Nav = styled.div`
  width: 960px;
  margin 0 auto;
  height: 100%;
`;

export const NavItem = styled.div`
 line-height: 56px;
 padding: 0 15px;
 font-size: 17px;
 color: #333;
 &.left {
   float: left;
 }
 &.right {
   float: right;
   color: #969696;
 }
 &.active {
   color: #ea6f5a;
 }
`;

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  margin-top: 9px;
  padding: 0 5px 0 20px;
  border-radius: 40px;
  background: #eee;
  i {
    display: inline-block;
    vertical-align: middle;
    width: 30px;
    height: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
  }
  &.focused {
    i {
      color: #fff;
      background-color: #777;
    }
  }
  .slide-entry {
    transition: all .2s ease-out;
  }
  .slide-entry-active {
    width: 235px;
  }
  .slide-exit {
    transition: all .2s ease-out;
  }
  .slide-exit-active {
    width: 160px;
  }
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 120px;
  height: 38px;
  box-sizing: border-box; 
  font-size: 14px;
  background: #eee;
  outline: none;
  border: none;
  &.focused {
    width: 235px;
  }
`;

export const AddEdit = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  height: 56px; 
`;

export const Button = styled.div`
  float: right;
  width: 80px;
  height: 38px;
  line-height: 38px;
  margin: 9px 20px 0 0;
  border: 1px solid rgba(236,97,73,.7);
  border-radius: 20px;
  font-size: 14px;
  color: #ea6f5a;
  background-color: transparent;
  text-align: center;
  &.registe {
    color: #ec6149;
  }
  &.writting {
    color: #fff;
    background-color: #ea6f5a;
  }
`