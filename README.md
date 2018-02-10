## MulitStage Build


個々ではBuildイメージをいかに小さくするかについての課題への回答を出すための場所。

現時点で`nodejs-alpine`コンテナの問題点はcanvasが動かないこと。
次はgolangのリリースにgopackageが不要であるということ


1. buildとprod imageを分割できるかどうか -> 可能
2. alpineでcanvas installができるかどうか

### 検証環境

```
Client:
 Version:	18.01.0-ce
 API version:	1.35
 Go version:	go1.9.2
 Git commit:	03596f51b1
 Built:	Sun Jan 14 23:10:39 2018
 OS/Arch:	linux/amd64
 Experimental:	false
 Orchestrator:	swarm

Server:
 Engine:
  Version:	18.01.0-ce
  API version:	1.35 (minimum version 1.12)
  Go version:	go1.9.2
  Git commit:	03596f51b1
  Built:	Sun Jan 14 23:11:14 2018
  OS/Arch:	linux/amd64
  Experimental:	false

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
