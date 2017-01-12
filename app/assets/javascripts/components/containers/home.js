import React, {Component, PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {register} from '../actions/registration';
import Registration from '../components/registration';
import Feed from '../components/feed';
import People from '../components/people';

export class Home extends Component {
  render() {
    const register = this.props.register;
    return (
      <div>
        <div className='intro-header'>
          <div className='head_container'>
            <div className='row'>
              <div className='col-lg-6'>
                <div className='site-heading'>
                  <h1>Sample Blog</h1>
                  <span className='subheading'>{`使えば使うほど賢くなるブログ`}</span>
                </div>
              </div>
              <Registration register={register}/>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <People />
            <Feed />
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps() {
  return {}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {register},
    dispatch
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
