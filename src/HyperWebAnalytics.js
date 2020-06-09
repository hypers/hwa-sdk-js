/** JS SDK 的 URL 地址  */
const JS_URL = '//t.hypers.com.cn/hwt.js';

/** 用于存放多实例的全局对象名称 */
const HA = 'HyperAnalyticsObject';

/** 执行函数放名称 */
const FN_NAME = '_ha';

/** 是否可以在浏览器环境 */
const canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

/**
 * Hyper 分析对象
 * @param {*} options
 */

class HyperWebAnalytics {
  constructor(options = {}) {
    const { jsUrl = JS_URL, name = FN_NAME } = options;

    if (!canUseDOM) {
      return;
    }

    function _trakcer(...props) {
      return (window[name].q = window[name].q || []).push(props);
    }

    window[HA] = window[HA] || [];
    window[HA].push(name);

    const script = document.createElement('script');
    const target = document.getElementsByTagName('script')[0];

    script.src = jsUrl;
    script.async = 1;

    target.parentNode.insertBefore(script, target);

    this._trakcer = window[name] = window[name] || _trakcer;
  }
  _trakcer = () => {};

  /** 创建跟踪对象 */
  create(...props) {
    this._trakcer('create', ...props);
  }

  /** 认证用户信息 */
  identify(...props) {
    this._trakcer('identify', ...props);
  }

  /** 发送页面访问跟踪 */
  sendPageview(...props) {
    this._trakcer('send', 'pageview', ...props);
  }

  /** 发送行为跟踪 */
  sendAction(...props) {
    this._trakcer('send', 'action', ...props);
  }

  /** 发送表单跟踪 */
  sendAction(...props) {
    this._trakcer('send', 'form', ...props);
  }
}

export default HyperWebAnalytics;
