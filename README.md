# Meu Time

[Meu Time](https://meutime.matheuslima.net) é um projeto desenvolvido em Angular, que tem como objetivo de trazer dados sobre as ligas de futebol pelo mundo, seus times e jogadores. É possível escolher qual temporada você quer buscar os dados da liga. Todos os dados estão sendo consumidos da Api [Api-Football](https://www.api-football.com/documentation-v3).

Esse projeto foi estruturado baseando-se no modelo de estruturação de projetos Angular do [Touhid Rahman](https://blog.touhidrahman.me), apresentado no artigo [How to Structure Angular Apps in 2021](https://javascript.plainenglish.io/how-to-structure-angular-apps-in-2021-a0bdd481ad0d).

Nesse projeto foi utilizado ferramentas como:
- [PrimeNG](https://www.primefaces.org/primeng-v14-lts/)
- [NGX Cookie Service](https://github.com/stevermeister/ngx-cookie-service)
- [Chart.js](https://www.chartjs.org)


<b>Link para acessar o projeto: </b>[meutime.matheuslima.net](https://meutime.matheuslima.net)

## Pré-requisitos

Antes de iniciar, verifique se você tem os seguintes requisitos:

<b>1- Para rodar na máquina local</b>
- Node.js (versão 16.13.0)
- Angular CLI (versão 14.0.7)

<b>2- Chave de acesso</b>

Para consumir a Api [Api-Football](https://www.api-football.com/documentation-v3) é necessário criar uma chave no portal deles. Porém cada chave tem um limite de 100 consultas por dia. Por esse motivo será necessário criar uma conta nesse link: [https://dashboard.api-football.com/register](https://dashboard.api-football.com/register).

Ao criar a conta, acesse ao dashboard para pegar a chave no API-KEY. Este é o link para pegar a chave: [https://dashboard.api-football.com/profile?access](https://dashboard.api-football.com/profile?access). 

Esta chave será pública para utilização de forma mais simples ao projeto, porém ela já pode ter atingido o limite diário de requisições: <b>0986458185bbdd111936e9778c43bb55</b>

## Instalação

Siga as etapas abaixo para configurar o projeto localmente:

1. Clone o repositório:

   ```shell
   git clone https://github.com/maatheux/football-project
   ```

2. Acesse o diretório do projeto:

    ```shell
    cd football-project
    ```

3. Instale as dependências:

    ```shell
    npm install
    ```

## Uso
Para executar o projeto localmente, siga as etapas abaixo:

1. Inicie o servidor de desenvolvimento:

    ```shell
    ng serve
    ```

2. Abra o navegador e acesse http://localhost:4200.

<!-- ## Contribuição
Se você deseja contribuir com este projeto, siga as etapas abaixo:

1. Faça um fork do repositório.

2. Crie uma nova branch:

```shell
git checkout -b minha-feature
```

3. Faça suas modificações e commit:

```shell
git commit -am 'Adicionei uma nova feature'
```

4. Faça push das alterações para o seu fork:

```shell
git push origin minha-feature
```

5. Abra um pull request neste repositório.
 -->
<!-- ## Licença
Este projeto está licenciado sob a Licença XYZ.
 -->

 ## Extras:

 Para acessar os teste unitários, mude para branch 'test/unit-tests'. O processo de criação dos testes ainda não está completo.


<!-- # FootballProject

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 14.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page. -->
