# Keep on keeping on

## It's the 3rd week of remote training

### - Parts Awaited Revises

#### Basic

1. add RWD to different devices of week 3 sum.html (now is only avaiable to big screen PC) > DONE
2. revises week 2 assignment-2: create two functions that create JS object {} > DONE
3. refactor assignment-advanced: avoid from reassigning 0 to input array and heavy loop > DONE

#### Advanced

1. cookie usage & works behind scene
2. good to practice connection to MongoDB or Firestore

### - TODO List

#### 理解 session 的原理

1. option 的設定是什麼
2. session 會存放在哪裡

2-1 會暫存在 server 記憶體，隨著 server close 而消逝
2-2 可以存至資料庫

3. 怎麼把 session 資料放到 cookie
4. session 放到 cookie 的資料有沒有安全性問題

#### 理解 cookie 的原理與常見實用例子

1. 在 server 端怎麼存放 cookie
2. 怎麼移除 cookie
3. cookie 一定是搭配 session 使用嗎
4. 關於 cookie

4-1. 一組 domain 可以有多個 cookie
4-2. 單一個 name 的 value 最大上限為 4kb
4-3. name 和 value 皆為字串，在撰寫時要注意 type 跟檔案格式
4-4. 可以加簽、雜湊轉亂數避免盜用
4-5. 用來存放不太重要的資訊(避免存帳密)，像是登入時的憑證與時間
4-6. 描述 client 與 server 目前溝通狀態

5. cookie 的安全性

5-1. 什麼是 httpOnly,httpHeader? >> 抵禦攻擊者利用 Cross-Site Scripting (XSS) 手法來盜取用戶身份
5-2.

#### MongoDB 的搭配

1. 如何把 session 資料放到 MongoDB
2. 如何把 MongoDB 的資料取出
3. MongoDB 的運作流程
