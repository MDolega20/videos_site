import React, { Component } from 'react';
import axios from "axios";

import links from "./../../Links";

class ContactFrom extends Component {
  constructor() {
    super();
    this.state = {
      validateMail: false,
      validateTheme: false,
      validateMessege: false,
      validateRules: false,

      errorMail: false,
      errorTheme: false,
      errorMessege: false,
      errorRules: false,

      email: null,
      theme: null,
      messege: null,
      rules: null
    };
    this.handleForm = this.handleForm.bind(this);
    this.sendMessege = this.sendMessege.bind(this);
  }
  handleForm(event) {
    const target = event.target;
    const name = target.name;
    const type = target.type;
    const value = type === "checkbox" ? target.checked : target.value;

    this.setState({
      [name]: value
    });

    this.validate(value, type);
  }
  validate(value, type) {
    if (type === "checkbox") {
      this.validateRules(value);
    }
    if (type === "text") {
      this.validateTheme(value);
    }
    if (type === "email") {
      this.validateMail(value);
    }
    if (type === "textarea") {
      this.validateMessege(value);
    }
  }
  validateRules(value) {
    let error = false;
    if (value !== true) {
      error = "Zaakceptuj regulamin"
    }

    if(error !== false){
      this.setState({ 
          errorRules: true,
          validateRules: false
         });
    } else {
      this.setState({ 
        errorRules: false,
        validateRules: true
      });
    }
    //todo
  }
  validateTheme(value) {
    let error = false;
    if (value.length <= 10) {
      error = "Minimalna liczba znaków to 10";
    }
    if (error !== false) {
      this.setState({
        errorTheme: error,
        validateTheme: false
      });
    } else {
      this.setState({
        errorTheme: false,
        validateTheme: true
      });
    }
  }
  validateMail(value) {
    let error = false;
    if (value === "") {
      error = "Wpisz adres email";
    }
    function isValidEmailAddress(value) {
      // eslint-disable-next-line
      let pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
      return pattern.test(value);
    }
    function emailIsTemp(value) {
      // eslint-disable-next-line
      let patterns = [/temp/, / temp/, /Temp/, /ondeck/, /xyz /, /xyz/];
      for (let x in patterns) {
        if (value.search(patterns[x]) > 0) {
          return false;
        }
      }
    }
    if (isValidEmailAddress(value) === false) {
      error = "Wpisz poprawny email";
    }
    if (emailIsTemp(value) === false) {
      error = "Tymczasowe emaile są zabronione";
    }
    if (error !== false) {
      this.setState({
        errorMail: error,
        validateMail: false
      });
    } else {
      this.setState({
        errorMail: false,
        validateMail: true
      });
    }
  }
  validateMessege(value) {
    let error = false;
    if (value.length < 30) {
      error = "Minimalna liczba znaków to 30";
    }
    if (error !== false) {
      this.setState({
        errorMessege: error,
        validateMessege: false
      });
    } else {
      this.setState({
        errorMessege: false,
        validateMessege: true
      });
    }
  }
  sendMessege(){
      let { validateMail, validateMessege, validateRules, validateTheme, email, theme, messege } = this.state;
      if (validateMail && validateMessege && validateRules && validateTheme) {
            let Url = links.dev.messege + "?email=" + email + "&theme=" + theme + "&messege=" + messege;
            axios
            .get(Url)
            .then(response => {
                this.setState({
                responseDataJson: response.data,
                responseLoading: false,
                responseLoaded: true
                });
            })
            .catch(error => {
                this.setState({
                error,
                responseError: true,
                responseLoading: false
                });
            });
      } else {
            console.log("data not validated");
      }
  }

  render() {
    let { errorMail, errorTheme, errorMessege } = this.state;
    return (
      <div className="home-form">
        <div className="home-form-input">
          <label>
            <p>Adres mailowy</p>
            <input type="email" name="email" onBlur={this.handleForm} id="email-input"/>
            { errorMail ? <div className="home-form-error"><span>{errorMail}</span></div>: "" }
          </label>
        </div>
        <div className="home-form-input">
          <label>
            <p>Temat</p>
            <input type="text" name="theme" onBlur={this.handleForm} id="theme-input" />
            { errorTheme ? <div className="home-form-error"><span>{errorTheme}</span></div>: "" }
          </label>
        </div>
        <div className="home-form-textarea">
          <label>
            <p>Wiadomość</p>
            <textarea name="messege" onBlur={this.handleForm} id="messege-input" />
            { errorMessege ? <div className="home-form-error"><span>{errorMessege}</span></div>: "" }
          </label>
        </div>
        <div className="home-form-bottom">
          <label className="flex-row">
            <input
              type="checkbox"
              name="rules"
              onChange={this.handleForm}
              id="rules-input"
            />
            <p>Akceptuje <a target="_blank" rel="noopener noreferrer"  href="/documents/Polityka_prywatności.html">regulamin</a></p>
          </label>
          <button onClick={this.sendMessege} id="submit-button">Wyślij</button>
        </div>
      </div>
    );
  }
}

export default ContactFrom;