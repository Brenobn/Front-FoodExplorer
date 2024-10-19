import { Container, TitleContainer, Title, FormContainer } from "./styles";

import { Button } from "../../components/Button";

import Polygon from "../../assets/Polygon.png";

export function SignUp() {
  return(
    <Container>
      <div className="largerScreen">

        <TitleContainer>
          <img src={Polygon} alt="Logo do app" />
          <Title>
            Food explorer
          </Title>
        </TitleContainer>
        <FormContainer action="subimit">
          <div>
            <h2>Crie sua conta</h2>
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
            <Button title="Criar conta" />
            <a href="#">Já tenho uma conta</a>
          </div>
        </FormContainer>
      </div>
    </Container>
  );
}