#!/bin/bash

# 制作镜像
docker build -t photho-show .
# 删除旧容器
docker rm -f photho-show
# 启动容器
docker run -d -p 3000:3000 photho-show
