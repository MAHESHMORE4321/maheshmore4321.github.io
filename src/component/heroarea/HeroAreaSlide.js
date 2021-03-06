import React, { Component } from 'react';
import parse from 'html-react-parser';

class HeroAreaSlid extends Component {
  render() {
    return (
      <>
        <li className={this.props.id && this.props.id !== undefined && "li-"+this.props.id} style={{backgroundImage:`url(${this.props.data && this.props.data.backgroundImg !== undefined && this.props.data.backgroundImg})`}}>
          <div className="overlay"></div>
          <div className="container-fluid">
            <div id="heroareadiv" className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                <div className="slider-text-inner js-fullheight">
                  <div className="desc">
                    <h1>
                      {
                        this.props.data && this.props.data.headerLine !== undefined && parse(this.props.data.headerLine)
                      }
                    </h1>
                    <div id={this.props.data && this.props.data.link !== undefined && this.props.data.link.includes("#") ? "navbar" : ''}>
                      <ul style={{paddingInlineStart:"inherit"}}>
                        <li style={{minHeight:"fit-content",listStyle:"none"}}>
                          <a className="btn btn-primary btn-learn" href={this.props.data && this.props.data.link !== undefined ? this.props.data.link:''} target="_blank" rel="noopener noreferrer" data-nav-section={this.props.data && this.props.data.link !== undefined && this.props.data.link.includes("#") ? this.props.data.link.substring(1) : ''} >
                          {
                            this.props.data && this.props.data.text !== undefined && parse(this.props.data.text)
                          }
                            <i className={this.props.data && this.props.data.icon !== undefined ? this.props.data.icon : ''}></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </li>
      </>
    );
  }
}
export default HeroAreaSlid;