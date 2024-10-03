# CaseGlobo
Interface simples para salvar e assistir videos do youtube. Você pode acessar uma versão de produção em https://case-globo-batata.onrender.com/ 

## Dependencias
```bash
python >= 3.6, < 3.9
Node
Docker
```
## Executar localmente
Execute os seguintes comandos
```bash
git pull https://github.com/RafaDdS/CaseGlobo
cd CaseGlobo/
npm install --prefix frontend
npm run build --prefix frontend
docker build .
docker compose up
```

Acesse http://localhost/ por meio de um navegador.

## Deploy
```bash
docker login # Caso já não esteja logado
docker build . -t {user/image:tag}
docker push {user/image:tag}
````

Então a imagem no repositório pode ser manualmente enviada para qualquer serviço de cloud com a funcionalidade de execução de dockers.