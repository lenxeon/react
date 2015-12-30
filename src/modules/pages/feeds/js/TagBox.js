import React from 'react';
import { Link } from 'react-router';
import store from './feedStore';
let {createActiveRouteComponent} = require('../../NavLink');
var NavLink = createActiveRouteComponent('li');
require('../css/tags.less')



const ENTER_KEY = 13;
const UP_KEY = 38;
const DOWN_KEY = 40;

class TagBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      erro: '网络加载失败',
      list: [],
      searchResult: [],
      loaded: false,
    }
  }

  state: {

  }


  componentWillReceiveProps() {
    // this.setState({
    //   loaded: false,
    // })
  }

  upDownHandler(e) {
    let key = e.keyCode;
    let parent = $(e.target).parents('.tag-box')
      .find('.tag-autocomplete-results');
    let select = $('.result-item.active', parent);
    let length = $('.result-item', parent).length;
    if (select == null || select.length == 0) {
      $('.result-item:eq(0)', parent).addClass('active')
    } else {
      var index = $(select).index();
      if (event.keyCode == UP_KEY) {
        index = index - 1;
        index = Math.max(index, 0);
      } else {
        index = index + 1;
        index = Math.min(index, length - 1);
      }
      $('.result-item', parent).removeClass('active');
      $('.result-item', parent).eq(index).addClass('active');
    }

  }

  handleNewTodoKeyDown(event) {
    // console.log('handleNewTodoKeyDown');
    if (event.keyCode == UP_KEY || event.keyCode == DOWN_KEY) {
      this.upDownHandler(event);
      return;
    }
    let val = '';
    if (event.keyCode !== ENTER_KEY) {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = setTimeout(() => {
        val = React.findDOMNode(this.refs.tagInput).value.trim();
        if (val) {
          console.log('val===' + val)
          store.searchTag(val, (obj) => {
            this.setState({
              searchResult: obj.list
            })
          })
        } else {
          this.setState({
            searchResult: [],
          })
        }
      }, 200);
      return;
    }
    let parent = $(event.target).parents('.tag-box')
      .find('.tag-autocomplete-results');
    let active = $('.active', parent);
    if (active != null && active.length == 1) {
      val = $(active).text();
    } else {
      val = React.findDOMNode(this.refs.tagInput).value.trim();
    }
    event.preventDefault();
    let string = global.utilRequire('Strings');

    if (val) {

      let tag = {
        uuid: null,
        name: val,
        cli_uuid: string.uuid()
      }
      this.state.list.push(tag);
      this.setState({
        list: this.state.list
      })
      store.saveTag('feedId', tag.cli_uuid, tag.name, (obj) => {
        for (let i = 0; i < this.state.list.length; i++) {
          let item = this.state.list[i];
          if (item.cli_uuid == obj.cli_uuid) {
            this.state.list[i] = obj;
          }
        }
        this.setState({
          list: this.state.list,
          searchResult: [],
        })
      });
    }
    React.findDOMNode(this.refs.tagInput).value = '';
  }

  fcousClick() {
    this.setState({
      focus: true,
      searchResult: [],
    })
    setTimeout(() => {
      React.findDOMNode(this.refs.tagInput).focus();
    }, 100)
  }

  blurHandler() {
    this.setState({
      focus: false,
    })
  }
  
  render () {

    // console.log("============render===============")
    // console.log(this.props);
    // console.log(this.state);
    // console.log("===========================")
    // console.log(this.state);
    
    if (!this.state.loaded) {
      let {
        cat, page, size
      } = this.props;
      store.listTag(this.props.uuid, (o) => {
        this.setState({
          loaded: true,
          list: o.list,
        });
        this.props.loaded = true;
      })
    }

    // function createMarkup(html) {
    //   return {
    //     __html: html
    //   };
    // };

    // function createMarkup(o) { return {__html: o}; };

    let tags = (<div/>);
    if(this.state.list){
      let i = 0;
      tags = this.state.list.map((tag)=>{
        i++;
        return (
          <li className="item">
            <Link to={`/feeds?tag=${tag.uuid}`} query={{'page':1,'size':30}} activeClassName="active">
              {tag.uuid?tag.name:'loading...'}
            </Link>
            <i className="fa fa-times fa-1 ml-5"></i>
          </li>
        )
      })
    }

    let autoResult = (<div/>);
    if(this.state.searchResult){
      let i = 0;
      autoResult = this.state.searchResult.map((tag)=>{
        i++;
        return (
          <li className="result-item">{tag.name}</li>
        )
      })
    }

    let tagBoxCls = !this.state.focus ? "tag-box-wrap" : "tag-box-wrap tag-box-wrap-fcous";
    let infoDis = this.state.focus && this.state.searchResult.length <= 0 ? 'block' : 'none';
    let restDis = this.state.focus && this.state.searchResult.length > 0 ? 'block' : 'none';

    return (
        <div className="tag-box fadeIn ani600">
          <input type="hidden" className="TextBox" value="磨砺,在要" autocomplete="off"/>
          <div className={tagBoxCls}>

            <ul className="tags">
              {tags}
              <li className="item editable">
                <input 
                onBlur={this.blurHandler.bind(this)} 
                onKeyDown={this.handleNewTodoKeyDown.bind(this)}
                ref="tagInput" type="text" className="tag-input" autocomplete="off"/>
                <span>
                </span>
                <span onClick={this.fcousClick.bind(this)} className="tag-editable-addtag ml-5">
                  添加分类标签
                </span>
              </li>
            </ul>

            <div className="tag-autocomplete">
              <div className="tag-autocomplete-placeholder" style={{'display': infoDis}}>
                输入分类标签名称(回车提交)
              </div>
              <ul className="tag-autocomplete-results" style={{'display': restDis}}>
                {this.state.list.length==0 ? 
                  (<li className="autocomplete-result-tip">自定义分类</li>):autoResult}
              </ul>
            </div>
          </div>
        </div>
    );
  }
}

export default TagBox;
