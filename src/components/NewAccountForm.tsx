import * as React from "react";
import { TextField } from "@material-ui/core";

interface INewAccountFormProps {}

export const NewAccountForm: React.FC<INewAccountFormProps> = (props) => {
  const [userName, setUserName] = React.useState<string | undefined>();
  const [password, setPassword] = React.useState<string | undefined>();
  const [confirmPassword, setConfirmPassword] = React.useState<
    string | undefined
  >();
  // email should have @ and . in it
  // prevent copying of password
  // more than 8 characters
  // number OR special character
  return (
    <div className={"column"}>
      <TextField
        label="User Name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <TextField
        label="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <TextField
        label="Confirm Password"
        error={true}
        helperText={"Passwords do not match"}
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        type={"password"}
      />
    </div>
  );
};
