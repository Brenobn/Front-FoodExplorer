import { InputContainer } from "./styles";

export function Input({ icon: Icon, ...rest }) {
  return(
    <InputContainer>
      {Icon && <Icon size={20} />}
      <input {...rest} />
    </InputContainer>
  );
}