#!/bin/bash

# 部署脚本，需在 root 权限下运行

echo "安装依赖..."
npm install

echo "构建项目..."
npm run build

echo "后台启动服务，端口为 80..."
nohup PORT=80 npm start > app.log 2>&1 &

echo "服务已在后台运行，日志请查看 app.log"