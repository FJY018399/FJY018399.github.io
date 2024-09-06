# 确保脚本抛出遇到的错误
$ErrorActionPreference = 'Stop'

# 更改 node 版本 根据自己版本管理器而定
& fnm use --install-if-missing 20

# 生成静态文件
& npm run build

# 进入生成的文件夹
Set-Location .vuepress\dist

# 如果是发布到自定义域名
# echo 'www.yourwebsite.com' > CNAME

# 初始化 Git
& git init
& git add -A
& git commit -m 'deploy'
& git config user.name "FJY018399"
& git config user.email "3206778990@qq.com"
& git push -f https://github.com/FJY018399/FJY018399.github.io.git master

# 如果发布到 https://USERNAME.github.io/<REPO>  REPO=github上的项目
# git push -f git@github.com:USERNAME/<REPO>.git master:gh-pages

Set-Location ..