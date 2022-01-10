# VehicleMetricsFrontend

Este projeto foi gerado por [Angular CLI](https://github.com/angular/angular-cli) versão 13.1.2. Ao baixar este repositório, navegue até o diretório raíz
e acione o comando `npm install` para baixar todas as dependêndias do projeto. Como depend~encia externa, foi usada a biblioteca de componentes visuais NG-ZORRO, fornecido por Antd.

## Servidor de Desenvolviemento.

Acione o comando `npm start` para compilar e subir o servidor. Navegue para `http://localhost:4200/`. A aplicação irá atualizar assim que forem salvas alterações no código.

## Sobre o funcionamento da aplicação

A aplicação funciona de forma bem simples e direta. Existem dois campos no formulário que podem ou não serem preenchidos. O não preenchimento dos campos irá acarretar na busca por todos os resultados possíveis. O preenchimento dos campos atuam como filtros. O botão "Clear" limpa todos os campos e o botão "Search" submete o formulário para recuperar os dados da busca.

**IMPORTANTE**: a base de dados contem informações partinentes do dia 12/12/2018 ao dia 19/12/2018.

## Outras instruções relevantes para o desenvolvimento em Angular com Angular CLI

### Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

### Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

### Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

### Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
