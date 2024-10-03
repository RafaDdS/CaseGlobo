# CaseGlobo
Interface simples para salvar e assistir videos do youtube. Você pode acessar https://case-globo-batata.onrender.com/ 

## Dependencias
python3 >= 3.6, < 3.9
Node
Docker

## Executar localmente
git pull https://github.com/RafaDdS/CaseGlobo
npm run build --prefix frontend
docker build .
docker compose up

## Deploy
? docker login

docker build . -t {user/image:tag}
docker push {user/image:tag}