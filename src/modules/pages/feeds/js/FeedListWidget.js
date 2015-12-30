import React from 'react';
import { Link } from 'react-router';
import store from './feedStore';
import TagBox from './TagBox';

class FeedListWidget extends React.Component {

  constructor(props) {
    super(props);
    this.state={
      'erro':'网络加载失败',
      'list':[],
      'loaded':false,
    }
    // console.log(this.state);
  }

  state:{

  }


  componentWillReceiveProps() {
    console.log("============componentWillReceiveProps===============")
    this.setState({
      loaded: false,
    })
  }
  
  render () {

    // console.log("============FeedListWidgetrender===============")
    // console.log(this.state.loaded);
    // console.log(this.state);
    // console.log("=============FeedListWidget==============")
    
    if (!this.state.loaded) {
      let {
        cat, page, size
      } = this.props;
      store.list(cat, page, size, (o) => {
        this.setState({
          loaded: true,
          list: o.list,
        });
        this.props.loaded = true;
      })
    }

    function createMarkup(html) {
      return {
        __html: html
      };
    };
    function createMarkup(o) { return {__html: o}; };

    let feeds = (<div/>);
    if(this.state.list){
      let i = 0;
      feeds = this.state.list.map((feed)=>{
        i++;
        return (
          <div className='card shadow feed-item mb-15'>
            <div className="feed-item-body">
              <div className='' dangerouslySetInnerHTML={{__html: feed.mblog.text}} />
            </div>
            <div className="hander-box clear">
              <span className="lft ml-15">9月18日 17:41</span>
              <span className="rgt">
                <i className="fa fa-commenting mr-15"></i>
                <i className="fa fa-tag mr-15"></i>
                <i className="fa fa-star-o mr-15"></i>
              </span>
            </div>
            <div className="buttom-box">
              <TagBox/>
            </div>
          </div>
        )
      })
    }
    return (
        <div ref="wrap" className="inner-wrap">
          {
            this.state.loaded ? (
                {feeds}
              ):(
                <div className="card shadow loading">
                  <div className="spinner">
                    <div className="bounce1"></div>
                    <div className="bounce2"></div>
                    <div className="bounce3"></div>
                  </div>
                </div>
              )
          }
        </div>
    );
  }
}

export default FeedListWidget;
