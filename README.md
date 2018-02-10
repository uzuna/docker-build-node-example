## MulitStage Build


個々ではBuildイメージをいかに小さくするかについての課題への回答を出すための場所。

現時点で`nodejs-alpine`コンテナの問題点はcanvasが動かないこと。
次はgolangのリリースにgopackageが不要であるということ


1. buildとprod imageを分割できるかどうか -> 可能
2. alpineでcanvas installができるかどうか

### 検証環境

```
Client:
 Version:         1.12.6
 API version:     1.24
 Package version: docker-1.12.6-71.git3e8e77d.el7.centos.1.x86_64
 Go version:      go1.8.3
 Git commit:      3e8e77d/1.12.6
 Built:           Tue Jan 30 09:17:00 2018
 OS/Arch:         linux/amd64

Server:
 Version:         1.12.6
 API version:     1.24
 Package version: docker-1.12.6-71.git3e8e77d.el7.centos.1.x86_64
 Go version:      go1.8.3
 Git commit:      3e8e77d/1.12.6
 Built:           Tue Jan 30 09:17:00 2018
 OS/Arch:         linux/amd64


```

### MultiStageの場合

node -> node-alpineではSharedLibraryの構成が異なるせいか動かせない。
いくつかインストールで解消できるが`libpng12.so.0`が解決できなかった

> Error: Error loading shared library libpixman-1.so.0: No such file or directory (needed by /usr/src/app/node_modules/canvas/build/Release/canvas.node)

### Size比較

image|version|description|size
:--|:--|:--|:--
demo|0.0.2-build|build alpine|414MB
demo|0.0.2|build alpine -> deploy alpine|114MB
demo|0.0.1|build node -> alpine(動かない)|99.9MB
demo|latest|build node|729MB


### vagrant

```sh
# term1
vagrant rsync-auto

# term2
vagrant up
vagrant ssh

# in VM
sudo yum install ansible -y
cd /vagrant/ansible
ansible-playbook setup.yml
```