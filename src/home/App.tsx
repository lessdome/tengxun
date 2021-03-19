import React from 'react'
import Header from '../common-comp/Header'
import '../common-css/reset.scss'
import '../common-iconfont/iconfont.css'
export interface IAppProps {}

const App: React.FC<IAppProps> = (props) => {
  return (
    <>
      <Header />
    </>
  )
}

export default App
