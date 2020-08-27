import * as React from "react";
import { TextField, Paper } from "@material-ui/core";
import { Button } from "./Button";
import { emailText, passwordText } from "../Constants";

interface INewAccountFormProps {}

export const NewAccountForm: React.FC<INewAccountFormProps> = (props) => {
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const [confirmPassword, setConfirmPassword] = React.useState<string>("");

  const invalidEmail =
    email && email.length > 3
      ? !Boolean(email.length && isValidEmail(email))
      : false;
  const invalidPassword =
    password && password.length > 3 ? !isValidPassword(password) : false;
  const passwordsConfirmed = arePasswordsConfirmed(password, confirmPassword);

  const validForm = !invalidEmail && !invalidPassword && passwordsConfirmed;

  return (
    <Paper className="muiPaper">
      <div className={"column"} style={{ width: "30%" }}>
        <TextField
          label="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={invalidEmail}
          helperText={invalidEmail ? emailText : undefined}
        />
        <TextField
          label="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type={"password"}
          error={invalidPassword}
          helperText={invalidPassword ? passwordText : undefined}
        />
        <TextField
          label="Confirm Password"
          error={confirmPassword.length < 3 ? false : !passwordsConfirmed}
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          onPaste={(e) => e.preventDefault()}
          type={"password"}
        />
        <Button
          onClick={() => alert("Account Created!")}
          isDisabled={!validForm}
          text={"Create Account"}
          className={"topMargin"}
        />
      </div>
    </Paper>
  );
};

function isValidEmail(email?: string): boolean {
  if (email) {
    return email.includes("@") && email.includes(".");
  }
  return false;
}

/**
 *
 * @param word 8 or more characters with a number OR special character
 */
function isValidPassword(word?: string): boolean {
  if (word && word.length > 8) {
    const specialChar = new RegExp("^(?=.*[a-z])(?=.*[!@#$%^&*])(?=.{8,})");
    const numMatch = new RegExp("^(?=.*[a-z])(?=.*[0-9])(?=.{8,})");
    return Boolean(word.match(numMatch) || word.match(specialChar));
  }
  return false;
}

function arePasswordsConfirmed(ps1?: string, ps2?: string): boolean {
  if (ps1 && ps2) {
    return ps1 === ps2;
  }
  return false;
}
