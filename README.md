# hwa-sdk-js

`hwa-sdk-js` 是对 `hwt.js` 的一个封装

## 安装

```
npm i @hypers/hwa-sdk
```

## 快速开始

```js
import HyperWebAnalytics from '@hypers/hwa-sdk';

const hwa = new HyperWebAnalytics();

// projectId 应该以实际获取的 ID 为准
hwa.create('projectId');
hwa.sendPageview();
```

### 示例

**开启全埋点**

```js
hwa.create('projectId', {
  auto_track: true,
});
```

**带参数的页面跟踪**

```js
// 传递 title 与 url
hwa.sendPageview({
  title: '登录页面',
  url: '/index.html#login',
});
```

**用户行为跟踪**

```js
// 一个男性用户关注了 5 个领域的标签，这里的标签也是存在多个，所以采用了数组的类型。
hwa.sendAction('follow', {
  labels: ['数码', '音乐', '体育', '篮球', '动漫'],
  gender: '男',
});
```

> [更多功能](https://docs.hypers.com.cn/#/developer/web/features)

## API

```js
// 创建跟踪对象
hwa.create(projectId, [options], [callback]);

// 认证用户信息
hwa.identify([options]);

// 页面访问跟踪
hwa.sendPageview([options], [callback]);

// 行为跟踪
hwa.sendAction(name, [params], [callback]);

// 表单跟踪
hwa.sendForm([params], [callback]);
```

> [API 参数详细说明](https://docs.hypers.com.cn/#/developer/web/api)
