# Case Globo
Interface simples para salvar e assistir vídeos do youtube. Você pode acessar uma versão de produção em https://case-globo-batata.onrender.com/ 

## Dependências
```
python >= 3.6, < 3.9
Node
Docker
```
## Executar localmente
Execute os seguintes comandos.

```bash
git clone https://github.com/RafaDdS/CaseGlobo
cd CaseGlobo/
npm install --prefix frontend
npm run build --prefix frontend
docker build .
docker compose up
```

Acesse http://localhost/ por meio de um navegador para usar a plataforma localmente.

## Deploy
Após concluir a etapa anterior, execute os seguintes comandos para realizar o deploy do contêiner.

```bash
docker login # Caso já não esteja logado
docker build . -t {user/image:tag}
docker push {user/image:tag}
````

Então a imagem no repositório pode ser manualmente enviada para qualquer serviço de cloud com a funcionalidade de execução de contêineres. Essa ultima etapa é necessária apenas na primeira vez.
