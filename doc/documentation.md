
## Cenários de Teste

## Cenário 1: Deve exibir erro ao tentar login com credenciais não cadastradas

- Dado que o usuário esteja na página de login do site “automation practice”

- Quando o usuário inserir um e-mail e senha não cadastrados e clicar no botão de login.

- Então o sistema exibira uma mensagem de falha de autenticação.

---

## Cenário 2: Verifica o cadastramento realizado com sucesso

- Dado que o usuário esteja na página de login do site “automation practice” 

- Quando o usuário inserir um e-mail  para realizar o cadastro e clicar no botão de criar uma comta.

- Então o sistema direciona o usuário para a página contendo o formulário de cadastro e apos o preenchimento correto, o sistema direciona o usuário à página "Minha conta" e exibe uma mensagem de sucesso dizendo que a conta foi criada.

---

## Cenário 3: Verifica se o sistema bloqueio o numero de tentativas de login apos 3 falhas na senha

- Dado que o usuário esteja na página de login.

- Quando inserir a senha e após 3 tentativas não conseguir êxito no login.

- Então o sistema deverá exibir uma mensagem, recomendando que o usuário troque a senha para conseguir logar.

### Cenário extra: Verifica se exibe mensagem de erro ao preencher o campo do email com formatação inválida e verifica se ocorre o impedimento do cadastro com senha inferior a 5 caracteres

- Dado que o usuário esteja na página de login do site “automation practice” 

- Quando o usuário tentar fazer cadastro com e-mail de formatação inválida.

- Então a página deverá retornar uma mensagem dizendo que o endereço de e-mail não é válido

#### Verifica se ocorre o impedimento do cadastro com senha inferior a 5 caracteres

- Dado que o usuário esteja na página de login do site “automation practice” 

- Quando o usuário tentar fazer cadastro com a senha contendo menos de 5 caracteres. 

- Então a página deverá retornar uma mensagem dizendo que a senha é inválida.
---


