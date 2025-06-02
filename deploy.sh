#!/bin/bash

# 制作镜像
docker build -t photho-show .
# 停止并删除旧的容器
docker stop photho-show || true
# 删除旧容器
docker rm -f photho-show || true
# 启动容器
docker run -d -p 3000:3000 --name photho-show photho-show