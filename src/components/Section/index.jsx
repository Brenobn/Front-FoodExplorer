import { SectionContainer } from "./styles";

export function Section({ title, children }) {
  return(
    <SectionContainer>
      <h2>{title}</h2>
      {children}
    </SectionContainer>
  );
}