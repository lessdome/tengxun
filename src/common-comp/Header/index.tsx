import React from 'react'
import './index.scss'

/**
 * Logo 组件 属性
 */
export interface ILogoProps {}

/**
 * Logo 组件
 */
const Logo: React.FC<ILogoProps> = () => (
  <div className="logo-wrapper">
    <div className="img"></div>
    <div className="text">
      <div className="top">腾讯视频</div>
      <div className="bottom">
        <div>不</div>
        <div>负</div>
        <div>好</div>
        <div>时</div>
        <div>光</div>
      </div>
    </div>
  </div>
)

/**
 * Search 查询组件 属性
 */
export interface ISearchProps {}

/**
 * Search 查询组件
 */
const Search: React.FC<ISearchProps> = (props) => {
  return (
    <div className="search-wrapper">
      <div className="search">
        <div className="input-hot">
          <input className="input"></input>
          <div className="hot">
            <span className="iconfont icon-huomiao icon"></span>
            <span>热搜榜</span>
          </div>
        </div>
        <div className="button">
          <span className="iconfont icon-sousuo icon"></span>
          <span className="text">全网搜</span>
        </div>
      </div>
    </div>
  )
}

export interface IControlProps {}

const Control: React.FC<IControlProps> = (props) => {
  return (
    <div className="control-wrapper">
      <div className="item vip">
        <span className="iconfont icon-VIP"></span>
      </div>
      <div className="item">
        <span className="iconfont icon-shizhong"></span>
      </div>
      <div className="item">
        <span className="iconfont icon-sheying"></span>
      </div>
      <div className="item">
        <span className="iconfont icon-diannao"></span>
      </div>
      <div className="user"></div>
    </div>
  )
}

/**
 * Header 根组件的属性
 */
export interface IHeaderProps {}

/**
 * Header 根组件
 */
const Header: React.FC<IHeaderProps> = () => (
  <div className="header-wrapper">
    <Logo />
    <Search />
    <Control />
  </div>
)

export default Header
