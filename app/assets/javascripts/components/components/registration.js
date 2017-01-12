import React, {Component, PropTypes} from 'react';

export default class Registration extends Component {

  constructor() {
    super();
    this.state = {errorMessage: ''};
  }

  onFocus() {
    this.setState({errorMessage: ''});
  }

  //
  // validateAddress() {
  //   const address = this.refs.accountForm.value;
  //   if (!address) {
  //     this.setState({errorMessage: 'メールアドレスを入力してください。'});
  //     return false;
  //   }
  //   return true;
  // }
  //
  // validatePassword() {
  //   const password = this.refs.passwordForm.value;
  //   const passwordCountLimit = 6;
  //   const passwordCountMax = 30;
  //   if (password.length < passwordCountLimit || password.length > passwordCountMax) {
  //     let messagePart;
  //     if (password.length < passwordCountLimit) {
  //       messagePart = '6文字以上';
  //     } else if (password.length > passwordCountMax) {
  //       messagePart = '30文字以内';
  //     }
  //     this.setState({errorMessage: `${messagePart}のアルファベット、数字、記号の組み合わせを入力してください。`});
  //     return false;
  //   }
  //   return true;
  // }
  //
  // validate() {
  //   return this.validateAddress() && this.validatePassword();
  // }

  register() {
    // if (!this.validate()) {
    //   return;
    // }

    const userName = this.refs.userNameForm.value;
    const email = this.refs.emailForm.value;
    const password = this.refs.passwordForm.value;
    const passwordConfirmation = this.refs.passwordConfirmationForm.value;
    const param = {
      user: {
        user_name: userName,
        email: email,
        password: password,
        password_confirmation: passwordConfirmation
      }
    };
    this.props.register(param);
  }


  render() {
    const error = this.state.errorMessage.length > 0 ? this.state.errorMessage : null;
    return (
      <div className='col-lg-4 registration'>
        <h3>新規登録</h3>
        <span className='alert_message'>{error ? error : ''}</span>
        <form>
          <div className='form-group'>
            <input type='text' className='form-control' id='exampleInputName2' placeholder='ユーザー名' ref='userNameForm'
                   onFocus={this.onFocus.bind(this)}/>
          </div>
          <div className='form-group'>
            <input type='email' className='form-control' id='exampleInputEmail1' aria-describedby='emailHelp'
                   placeholder='メールアドレス' ref='emailForm' onFocus={this.onFocus.bind(this)}/>
          </div>
          <div className="form-group">
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="パスワード"
                   ref='passwordForm' onFocus={this.onFocus.bind(this)}/>
          </div>
          <div className="form-group">
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="パスワード(確認)"
                   ref='passwordConfirmationForm' onFocus={this.onFocus.bind(this)}/>
          </div>
          <button type="submit" className="btn btn-primary btn-block" onClick={this.register.bind(this)}>{`登録`}</button>
        </form>
      </div>
    )
  }
}
