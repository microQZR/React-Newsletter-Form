import { useState } from "react";

import Button from "./Button";
import Modal from "./Modal";
import TextInput from "./TextInput";
import classes from "./Newsletter.module.css";

const Newsletter = props => {
  const [subscriptionSuccess, setSubscriptionSuccess] = useState(false);
  const [nameValue, setNameValue] = useState("");
  const [companyValue, setCompanyValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [agreementValue, setAgreementValue] = useState(false);

  const closeHandler = () => {
    setSubscriptionSuccess(false);
    props.closeHandler();
  };

  const submitHandler = e => {
    e.preventDefault();
    setSubscriptionSuccess(true);
    console.log({ name: nameValue, company: companyValue, email: emailValue, agreement: agreementValue });
  };

  const clearHandler = () => {
    setNameValue("");
    setCompanyValue("");
    setEmailValue("");
    setAgreementValue(false);
  };

  return (
    <Modal closeHandler={closeHandler}>
      <form className={`${classes.form}`} onSubmit={submitHandler}>
        <h1 className="flex">{subscriptionSuccess ? "Thank You for Subscribing!" : "Subscribe to Our Newsletter!"}</h1>
        {subscriptionSuccess ? (
          <div className={`flex-column ${classes.formContent} ${classes.successContent}`}>
            <p className={classes.successMessage}>
              You have successfully subscribed <em>{emailValue}</em> to XYZ's newsletter
            </p>
            <Button type="button" className={classes.successClose} onClick={closeHandler}>
              CLOSE
            </Button>
          </div>
        ) : (
          <fieldset className={`grid ${classes.formContent} ${classes.fieldset}`}>
            <label className={classes.name}>
              Name:
              <TextInput
                name="name"
                id="name"
                type="text"
                required
                value={nameValue}
                onChange={e => setNameValue(e.target.value)}
              />
            </label>
            <label className={classes.company}>
              Company Name:
              <TextInput
                name="company"
                id="company"
                type="text"
                required
                value={companyValue}
                onChange={e => setCompanyValue(e.target.value)}
              />
            </label>
            <label className={classes.email}>
              E-mail:
              <TextInput
                name="email"
                id="email"
                type="email"
                required
                value={emailValue}
                onChange={e => setEmailValue(e.target.value)}
              />
            </label>
            <label className={classes.agreement}>
              <input
                name="agreement"
                id="agreement"
                type="checkbox"
                required
                checked={agreementValue}
                onChange={e => setAgreementValue(e.target.checked)}
              />
              I agree to subscribe to cie. XYZ's newsletter.
            </label>
            <div className={`flex ${classes.btnGroup}`}>
              <Button className={classes.clear} type="reset" onClick={clearHandler}>
                CLEAR
              </Button>
              <Button className={classes.submit}>SUBMIT</Button>
            </div>
          </fieldset>
        )}
      </form>
      <button className={classes.close} onClick={closeHandler} />
    </Modal>
  );
};

export default Newsletter;
