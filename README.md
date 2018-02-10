## MulitStage Build

個々ではBuildイメージをいかに小さくするかについての課題への回答を出すための場所。

現時点で`nodejs-alpine`コンテナの問題点はcanvasが動かないこと。
次はgolangのリリースにgopackageが不要であるということ


1. buildとprod imageを分割できるかどうか

2. alpineでcanvas installができるかどうか


### MultiStageの場合

> Error: Error loading shared library libpixman-1.so.0: No such file or directory (needed by /usr/src/app/node_modules/canvas/build/Release/canvas.node)

shared library libpixman-1.so.0へのlinkが切れて動かなかった