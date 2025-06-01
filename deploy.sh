#!/bin/bash

# 部署脚本，需在 root 权限下运行

echo "检查 80 端口是否被占用..."
pid=$(lsof -t -i:80)
if [ -n "$pid" ]; then
  echo "80 端口被进程 $pid 占用，正在关闭..."
  kill -9 $pid
  echo "已关闭占用 80 端口的进程。"
else
  echo "80 端口未被占用。"
fi

echo "安装依赖..."
npm install

echo "构建项目..."
npm run build

echo "后台启动服务，端口为 80..."
nohup npm start > app.log 2>&1 &

echo "服务已在后台运行，日志请查看 app.log"