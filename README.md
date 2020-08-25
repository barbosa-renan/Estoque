# Estoque
Projeto testando uma implementação em React JS e ASPNET Core, separando totalemente o front-end do back-end.

**Tecnologias utilizadas**
 - .NET Core 3.1 
 - Web Api
 - React JS 
 - ASP.NET Core Web Api 
 - Dapper

**Como executar este projeto**

 - O  arquivo do banco de dados está na pasta `sql/create-database.sql` 
 - Utilize o VS Code ou Visual Studio 2019+ para abrir o projeto;
 - No projeto `Estoque.Web.Api` abra o arquivo *appsetting.json* modifique o caminho da connection string para o banco de dados desejado;
  
 **Back-end** 
 

 - Abra o terminal e navegue até o projeto da WebApi
  `cd .\Estoque\src\Estoque.Web.Api\`
  - Execute o comando `dotnet watch run`
 - A WebApi será executada em `http://localhost:5000`
 
**Front-end**
 - Abra um novo terminal e navegue até o projeto de UI 

    cd .\Estoque\src\Estoque.Web.UI\ClientApp

 - Execute o comando `npm start`
 - A aplicação React será executada no navegador em `http://localhost:8081/`
