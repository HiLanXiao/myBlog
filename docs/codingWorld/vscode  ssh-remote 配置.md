---
layout: Post  # 必须
title: vscode  ssh-remote 配置  # 博客标题（必须）
subtitle: 时隔一年多，又配置了一次 vscode ssh-remote，原以为第一次配过之后就有经验了， 但是这第二次配仍踩了一些坑，所以在此记录一下，免得之后新需要配置时又踩坑...  # 博客副标题（可选）
date: 2022-02-04  # 博客发表日期（可选）
author: 烂笑  # 博客作者（可选，不填的话会使用 `themeConfig.personalInfo.name`）
useHeaderImage: true  # 是否在博客中显示封面图（可选，默认：false）
headerImage: https://images.weserv.nl/?url=https://article.biliimg.com/bfs/article/77c86927414b9769f67b86e300cfcfca0b0521ea.png  # 博客封面图（必须，即使上一项选了 false，因为图片也需要在首页显示）
headerMask: rgba(40, 57, 101, .4)  # 封面图遮罩（可选）
headerImageCredit: 网图  # 图片来源，比如图片作者的名字（可选，只在 "useHeaderImage: true" 时有效）
# headerImageCreditLink: https://www.artstation.com/artwork/nLY0K  # 图片来源的链接（可选，只在 "useHeaderImage: true" 时有效）
tags:  # 博客标签（可选）
  - 技术相关
  - ssh-remote
---
## vscode  ssh-remote 配置

> 时隔一年多，又配置了一次 vscode ssh-remote，原以为第一次配过之后就有经验了， 但是这第二次配仍踩了一些坑，所以在此记录一下，免得之后新需要配置时又踩坑...

- 服务器端配置

  ```bash
  # 先添加个用户
  sudo useradd langezhang -d /home/langezhang 
  # 设置下密码
  sudo passwd langezhang
  # 设置下 root 密码
  sudo passwd root
  # 切到 root，把自己的用户加到 root 列表里
  su root
  visudo
  # langezhang    ALL=(ALL)    ALL
  # 切到 langezhang
  su langezhang
  cd ~
  
  # 密钥生成
  ssh-keygen -t rsa -C "your_email@example.com"
  
  # 配下密钥
  mkdir .ssh
  cd .ssh
  vi authorized_keys # 把本机公钥搞到这里来
  
  # 踩坑的地方来了，在 StrictModes 下要给文件正确的权限和归属
  sudo chmod 700 /home/langezhang/.ssh
  sudo chmod 600 /home/langezhang/.ssh/authorized_keys
  
  # 编辑下 ssh 配置
  sudo vi /etc/ssh/sshd_config
  # PermitRootLogin no        禁止 root 登陆
  # PasswordAuthentication no         禁止密码登陆
  
  # 记得重启下服务让配置生效
  sudo service sshd restart
  ```

- vscode 配置

  ```
  Host langezhang_tencentOs
    HostName 101.43.137.164
    User langezhang
    Port 22
    IdentityFile C:\Users\Lange\.ssh\langezhang
  ```

- 总结
  - 其实也没啥好总结的...这次折腾了一会主要是因为文件归属和权限没整对.....



