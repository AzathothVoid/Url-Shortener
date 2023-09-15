import React from "react";
import Input from "../../components/Input";
import inputData from "./inputData";
import ButtonGroup from "../../components/ButtonGroup";

export default function SignUp() {
  const inputElements = inputData.map((input) => {
    return (
      <Input
        id={input.id}
        label={input.label}
        placeholder={input.placeholder}
        type={input.type}
      />
    );
  });

  function submitApplication() {}

  return (
    <main className="block block--crisscross block-form">
      <div className="container container--white">
        <header className="block-form__header">
          <h1 className="block-form__header__heading">SignUp</h1>
        </header>
        <form className="form-group" onSubmit={(event) => submitApplication()}>
          {inputElements}
          <a className="pass-prompt" href="#">
            Forgot your password?
          </a>
          <ButtonGroup />
        </form>
      </div>
    </main>
  );
}
