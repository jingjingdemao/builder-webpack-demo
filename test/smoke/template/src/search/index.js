// "use strict";

import React from 'react';
import ReactDOM from 'react-dom';
// import { createRoot } from "react-dom/client";
// import * as ReactDOMClient from 'react-dom/client';
import './search.less';
// import logo from "./images/logo.jpeg";
import largeNumber from 'large-number-jing';
import logo2 from './images/logo2.png';
import { common } from '../../common/index';

const a = common();
// const root = ReactDOMClient.createRoot(container);

// 所有在类中定义的方法都默认开启局部严格模式，所以在Class组件当中
// 所以指向window对象的this都指向undefined
// 所有内联的的事件处理处理函数当中的this都指向undefined
class Search extends React.Component {
  constructor() {
    // super(...arguments);
    super();
    this.state = {
      Text: null,
    };
  }

  loadText = () => {
    console.log(this, 'this');
    import('./text.js').then((Text) => {
      console.log(Text, 'res');
      this.setState({
        Text: Text.default,
      });
    });
  };

  render() {
    // debugger;
    // a = 1;
    //libraryExport设置为default 直接用largeNumber（） 如果不设就是largeNumber.add
    const addResult = largeNumber('999', '1');
    return (
      <div>
        {this.state.Text ? new this.state.Text() : null}
        {/* {this.state.Text ? <Text></Text> : null} */}
        <img src={logo2} onClick={this.loadText} alt="图片" />
        <div className="search-text">
          Search Page 27 202309`$
          {a}---${addResult}`
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Search />, document.getElementById('root'));
// createRoot(document.getElementById("root")).render(<Search />);
