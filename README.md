# Como usar o projeto
Este projeto é empacotado como um contêiner Docker, o que significa que você pode executá-lo em qualquer sistema operacional com suporte para Docker, sem precisar configurar manualmente o ambiente de desenvolvimento.

Para usar o projeto com Docker, você precisará seguir as seguintes etapas:

## 1. Instale o Docker
Se você ainda não tiver o Docker instalado em sua máquina, a primeira etapa é instalar o Docker. O Docker pode ser baixado e instalado a partir do site oficial:

- [Docker for Windows](https://docs.docker.com/desktop/install/windows-install/)
- [Docker for Mac](https://docs.docker.com/desktop/install/mac-install/)
- [Docker for Linux](https://docs.docker.com/desktop/install/linux-install/)

## 2. Clone o repositório
Clone o repositório do projeto em seu ambiente de desenvolvimento usando o seguinte comando no terminal:

```
git clone https://github.com/seu-usuario/seu-projeto.git
```

## 3. Configure as variáveis de ambiente
Na raiz do projeto, crie um arquivo .env e defina as variáveis de ambiente necessárias para executar o projeto. Por exemplo:

```
# Porta do servidor Node.js
PORT=3000
```

## 4. Execute o projeto com Docker Compose
No terminal, navegue até a pasta do projeto e execute o seguinte comando:

```
docker-compose up
```
Isso irá iniciar os contêineres necessários para executar o projeto. Você deve ver a saída do console do Docker Compose, que exibirá o log de saída dos contêineres.

Quando o comando docker-compose up é executado, o Docker Compose usa o arquivo docker-compose.yml para configurar e iniciar os contêineres necessários para executar o projeto. Esse arquivo contém as informações necessárias para construir e executar os contêineres.

## 5. Acesse o projeto
Com os contêineres em execução, você pode acessar o projeto em seu navegador da web usando o seguinte endereço:

```
http://localhost:3000
```
Isso irá carregar a página inicial do projeto. A partir daí, você pode usar o projeto normalmente.

## 6. Parando o projeto
Quando você terminar de usar o projeto, poderá parar os contêineres usando o seguinte comando:

```
docker-compose down
```
Isso irá parar os contêineres e liberar os recursos do sistema que foram usados para executar o projeto.

# Manutenção
Quando qualquer alteração for feita você deve usar o seguinte comando, antes do docker-compose up:
```
docker-compose build
```
