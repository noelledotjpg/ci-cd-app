## [EN] How to: Build this Project
Clone this repository, either with `git clone` or manually downloading it as a .zip<br>
Install all the required packages using `npm install` (should be listed in package.json)<br>
Then use `npm run dev` to view the website locally<br><br>
Run `npm run lint` to run ESLint<br><br>
Run `npm run test` to run the unit tests<br><br>
Run `npm run build` to generate the production build (dist/)<br>
### CI/CD
The pipeline in `.github/workflows/main.yml` runs automatically for every push/PR done to `main` (lint -> test -> build) and deploys to GitHub Pages for every push on `main`.

## [PT-BR] Como: Construir este Projeto
Clone este repositório, usando `git clone` ou baixando-o manualmente como um arquivo `.zip`.
Instale todos os pacotes necessários com o comando `npm install` (eles estão listados no arquivo `package.json`).
Por fim, execute `npm run dev` para ver o website localmente<br><br>
Execute `npm run lint` para rodar o ESLint<br><br>
Execute `npm run test` para realizar os testes unitários<br><br>
Execute `npm run build` para gerar o build de produção (dist/)<br>
### CI/CD
A pipeline em `.github/workflows/main.yml` roda automaticamente em todo push/PR para `main` (lint -> test -> build) e faz o deploy no GitHub Pages a cada push na `main`.
