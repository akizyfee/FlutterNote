# .....

:::success
![An image](/test.jpg)

點選 windows 以後下載 Flutter SDK
之後將 ZIP 檔案解壓縮到推薦的路徑上

![1-1](https://hackmd.io/_uploads/r1qHJz1E6.jpg)
:::

:::success
然後需要編輯電腦的環境
在左下角的開始搜尋 env 然後進入 user 的使用者變數

![1-2](./public/test.jpg)

然後找到 path 接著新增 剛剛 zip 出來的 flutter 的 bin 的路徑

![1-3](https://hackmd.io/_uploads/rJqcGzJ4p.jpg)

然後開啟 cmd 打上 flutter doctor 檢查，會得到一個下圖的結果表示有安裝好

![1-4](https://hackmd.io/_uploads/Bk6U7fkV6.jpg)

接著繼續處理 Android 的部分
:::

:::success
[Android Studio 官方 下載](https://developer.android.com/studio?hl=zh-tw)
下載完畢後直接點選 exe 檔案，一路保持默認設定安裝好就好

![1-5](https://hackmd.io/_uploads/By2x4GkNa.jpg)

:::

:::success
安裝完成後，一樣照預設打開一直到看到 install Type，此時選擇自訂安裝
接著一樣預設到底安裝完成，這裡會等很久請耐心~

![1-6](https://hackmd.io/_uploads/B1BirzyVT.jpg)
:::

:::success
完成後開啟 Android Studio 會進到這個畫面 照上面的方式開啟

![1-7](https://hackmd.io/_uploads/SJmI2MJV6.gif)

然後下載穩定版的 SDK 和 平台開發工具，選擇好以後按下右下角的 apply 開始安裝，結束後按下 finish 然後 OK 回到一開始的介面即可

![1-8](https://hackmd.io/_uploads/BkHkpfkVT.jpg)
![1-9](https://hackmd.io/_uploads/ByrkpzJNT.jpg)

::::

:::success
最後，開啟一個隨便新的資料夾進入後，然後到 VS_code 的終端機，輸入

```jason=
flutter create first_app
```

然後安裝輔助套件

![1-10](https://hackmd.io/_uploads/BkhoJQJNp.jpg)

接著回到專案裡，使用 ctrl + shift + p，叫出快捷搜尋輸入 flutter Emulator

選擇 flutter Launch Emulator

接著就能選擇一個要用來開啟的模擬器

接著

```json=
cd first_app
flutter run
```

見證魔法~
:::

:::info
最後說明一下打包安裝的方式

```jason=
flutter build apk
```

以上輸入完後到以下路徑 (主要還是看你放哪裡

```jason=
C:\Users\User\Desktop\first_app\first_app\build\app\outputs\flutter-apk
```

找到 app-release 檔案，這個檔案輸出的名稱可以自訂

這個檔案也是上架商店的打包檔案
也可以直接傳輸進去手機做安裝來看實機運作的樣子

另外 git clone 下來如果專案找不到路徑請執行以下

```jason=
flutter clean

flutter packages get

flutter packages upgrade
```

然後找不到 file 之類的錯誤可以看一下整包檔案的路徑是否是全英文，不是的話沒辦法執行
::::::info 得有標題
試試這第一行字
:::
