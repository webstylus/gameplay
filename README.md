#### Projeto final de treinamento React-Native da NLW

O aplicativo serve para criar agendamentos para os seus servidores do discord
e ter um lembrete em quais servidores e horários você participará de partidas/bate-papos.

Este aplicativo Mobile usa Login OAuth2 do Discord e consome dados de servidor usuário.

Instale as dependências da aplicação 

    $ yarn install or npm install

Antes de build o ambiente do app, abra ou plugue seu emulador 

    $ expo start

Os dados sensíveis da aplicação devem ser alocador no .env, renomeie o aquivo .env.example para .env

````.dotenv
REDIRECT_URI=
SCOPE=
RESPONSE_TYPE=
CLIENT_ID=
CDN_IMAGE=
````
