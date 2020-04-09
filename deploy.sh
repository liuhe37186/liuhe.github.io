# !/usr/bin/env sh

# 当发生错误时中止脚本
set -e

# 构建
npm run build

# cd 到构建输出的目录下 
cd dist

# 部署到自定义域域名
# echo 'www.example.com' > CNAME

git init
git add -A
git commit -m '部署page'

# 部署到 https://<USERNAME>.github.io
git push -f https://github.com/liuhe37186/vue-demo.git master:gh-pages

# 部署到 https://<USERNAME>.github.io/<REPO>
# git push -f https://github.com/xjinky/hello-world.git master:gh-pages  # 提交到gh-master分支

# git push -f https://github.com/liuhe37186/vue-demo.git master    # 提交到master分支
echo '打开网页' 
echo 'https://liuhe37186.github.io/vue-demo'
open -a "/Applications/Google Chrome.app" https://liuhe37186.github.io/vue-demo
cd -