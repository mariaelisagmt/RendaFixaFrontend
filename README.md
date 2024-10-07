# RendaFixaFrontend

Projeto desenvolvido para realizar investimentos em renda fixa. No qual, o cliente possui uma conta e pode realizar aportes escolhendo um produto de renda fixa.
:fa-arrow-right: **Desafio proposto pela Toro Investimento para o cargo de Desenvolvedor de Software.**

## Visão Geral

O projeto foi segmentado em três partes: 
- BACKEND: WebApi
- FRONTEND: Angular 
- BANCO DE DADOS: Sql Server

## Funcionalidades

**User Storie:**
> Eu, como investidor, gostaria de ter acesso a uma lista de 6 ou mais produtos de Renda Fixa, com seus respectivos nomes, preços unitários, taxas e lastro(estoque), para que eu possa comprar. A cada produto escolhido durante a compra desejo informar as quantidades. Além disso, gostaria de ver meu saldo da minha conta Toro. Minhas compras devem respeitar o limite de saldo e lastro do produto, para que assim eu possa adquirir produtos de Renda Fixa com sucesso.Eu, como investidor, gostaria de ter acesso a uma lista de 6 ou mais produtos de Renda Fixa, com seus respectivos nomes, preços unitários, taxas e lastro(estoque), para que eu possa comprar. A cada produto escolhido durante a compra desejo informar as quantidades. Além disso, gostaria de ver meu saldo da minha conta Toro. Minhas compras devem respeitar o limite de saldo e lastro do produto, para que assim eu possa adquirir produtos de Renda Fixa com sucesso.

**Restrições:**

Para efeito de simplificação do desafio, os 6 produtos e a conta Toro com o Saldo podem ser definidos utilizando algum recurso predefinido no backend (uma coleção no banco de dados ou arquivo JSON).

**Critérios de Aceite:**
- A lista de produtos deve vir com a ordenação decrescente do campo taxa (Melhores taxas primeiro).
- Cada produto de Renda Fixa, deve apresentar, nome do ativo, indexador, preço unitário, taxa e botão comprar.
- A cada compra, o estoque do produto deve ser debitado. 
- O saldo da conta Toro deve ser validado. 
- O estoque do Produto deve ser validado. 
- Após a compra, o saldo da conta Toro deve ser debitado .

##  Informações Técnicas
**Tecnologias utilizadas:**

- **Angular 18**: Versão mais atual de longa duração de suporte.
- **Node.js**: Versão 20.14.0 ultima versão LTS.

## Pré-requisitos

Certifique-se de instalar as versões corretas do angular e do node.js

- Node.js (versão 20.14.0)
- Angular CLI (versão 18)

## Instalação

Passo a passo para configurar o projeto localmente:

1. Clone o repositório:
    ```bash
    git clone [https://github.com/chagasduarte/SmartHint.UI.git](https://github.com/mariaelisagmt/RendaFixaFrontend.git)
    ```
2. Navegue até o diretório do projeto:
    ```bash
    cd RendaFixa.UI
    ```
3. Instale as dependências:
    ```bash
    npm install
    ```
4. Inicie o servidor de desenvolvimento:
    ```bash
    ng serve
    ```
5. Abra seu navegador e vá para `http://localhost:4200`.

## Contato

Para dúvidas ou sugestões, entre em contato:

- **Seu Nome**: mariaelisagmt@gmail.com ou maria.elisa.gomes.de.matos@gmail.com
- **LinkedIn**: [maria elisa gomes](https://linkedin.com/in/chagasduarte](https://www.linkedin.com/in/maria-elisa-gomes-de-matos/))
