import {Component} from 'react';
import Follow from '../containers/follow';

export default class ProfileHead extends Component {
  render() {
    const profileDetail = this.props.profileDetail;
    return (
      <div className='head'>
        <img className='head_image thumbnail' src={profileDetail.get('photoUrl')} alt='Profile image'/>
        <div className='head_text'>
          <h1>{profileDetail.get('name')}</h1>
          <p>{profileDetail.get('companyName')}</p>
        </div>
        <div className='head-follow-btn'>
          <Follow profile={this.props.profileDetail}/>
        </div>
      </div>
    )
  }
}
