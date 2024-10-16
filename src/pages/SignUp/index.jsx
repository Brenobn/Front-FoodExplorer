import { Container, TitleContainer, Title, FormContainer } from "./styles";

import { Button } from "../../components/Button";

import Polygon from "../../assets/Polygon.png";

export function SignUp() {
  return(
    <Container>
      <TitleContainer>
        <img src={Polygon} alt="Logo do app" />
        <Title>
          Food explorer
        </Title>
      </TitleContainer>
      <FormContainer action="subimit">
        <div>
          <label>
            Seu nome
            <input type="name" placeholder="Exemplo: Maria da Silva" />
          </label>
          <label>
            Email
            <input type="text" placeholder="Exemplo: exemplo@exemplo.com.br" />
          </label>
          <label>
            Senha
            <input type="password" placeholder="No mínimo 6 caracteres" />
          </label>
          <Button title="Entrar" />
          <a href="#">Já tenho uma conta</a>
        </div>
      </FormContainer>
    </Container>
  );
}