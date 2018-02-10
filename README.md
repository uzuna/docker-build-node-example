## MulitStage Build

個々ではBuildイメージをいかに小さくするかについての課題への回答を出すための場所。

現時点で`nodejs-alpine`コンテナの問題点はcanvasが動かないこと。
次はgolangのリリースにgopackageが不要であるということ


1. buildとprod imageを分割できるかどうか

2. alpineでcanvas installができるかどうか


### MultiStageの場合

 nodejs -> nodejs-alpineはだめ。
> Error: Error loading shared library libpixman-1.so.0: No such file or directory (needed by /usr/src/app/node_modules/canvas/build/Release/canvas.node)



```
demo                                                0.0.2                  2fe41b0622b9        14 seconds ago      114MB
demo                                                0.0.1                  7487e355047e        2 hours ago         99.9MB
demo                                                latest                 13f072b6b707        2 hours ago         729MB
```