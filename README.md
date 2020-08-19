# Estoque
**Tecnologias utilizadas**
 1. .NET Core 3.1
 2. React JS
 3. ASP.NET Core Web Api
 4. Dapper
 
**Como executar este projeto**
 5. O  arquivo do banco de dados está na pasta `sql/create-database.sql` 
 6. Utilize o VS Code ou Visual Studio 2019+ para abrir o projeto;
 7. No projeto `Estoque.Web.Api` abra o arquivo *appsetting.json* modifique o caminho da connection string para o banco de dados desejado;
  
 **Back-end** 
 8. Abra o terminal e navegue até o projeto da WebApi
  `cd .\Estoque\src\Estoque.Web.Api\`
 9. Execute o comando `dotnet watch run`
 10. A WebApi será executada em `http://localhost:5000`
 
**Front-end**
 12. Abra um novo terminal e navegue até o projeto de UI 

    cd .\Estoque\src\Estoque.Web.UI\ClientApp

 13. Execute o comando `npm start`
 14. A aplicação React será executada no navegador em `http://localhost:8081/
