# Comando para rodar docker

Para criar a rede

```bash
sudo docker network loja-network
```

Para criar o MYSQL

```bash
sudo docker run -d --name mysql-loja --network loja-network -p 3307:3306 -e MYSQL_ROOT_PASSWORD=senhasegura -e MYSQL_DATABASE=loja -v mysql-loja:/var/lib/mysql mysql:latest
```

Para criar uma instancia do PHPMyAdmin

```bash
sudo docker run -d --name phpmyadmin --network loja-network -e PMA_HOST=mysql-loja -e PMA_PORT=3306 -e PMA_USER=root -e PMA_PASSWORD=senhasegura -p 8080:80 phpmyadmin/phpmyadmin
```

Para reiniciar instância

```bash
sudo docker restart containderID
```
