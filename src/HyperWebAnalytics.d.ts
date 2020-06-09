type CallbackType = (tracker: any, trackerUrl: string) => void;

export interface CreateOptionType {
  /** 开启全埋点 */
  auto_track?: boolean;

  /** 热力图需要导入的外部 js 资源 */
  heatmap_url?: string;

  /** 强制 SSL */
  force_ssl?: boolean;

  /** API 请求地址 */
  api_url?: string;

  /** 设置环境变量，用于计算端区分数据来源的环境。 */
  env?: any;

  /** 是否编码参数，如果设置为 true, 则所有参数 _data=base64(params) */
  encode?: boolean;

  /** 开启滚动事件跟踪，默认为开启 */
  scroll_event?: boolean;

  /** 滚动间隔，超过间隔发送一个请求，默认为 500 像素 */
  scroll_gap?: number;

  /** 开启错误日志跟踪，默认为关闭 */
  error_event?: boolean;

  /** 开启 visibility change 的监听，默认为开启 */
  visibility_event?: boolean;
}

export interface IdentifyOptionType {
  /**是媒体唯一识别用户 ID, 有客户设置及分配 用于 cookie_mapping */
  muid?: string;

  /** 是媒体唯一识别用户 ID, 归档计算时候会覆盖 _hid */
  uid?: string;

  /** 微信 unionid，如果开发者拥有多个公众号、小程序，UnionID 为跨应用的唯一用户标识 */
  unionid?: string;

  /** 	微信 ID，通过微信 SDK 获取到的用户唯一标识 （例如 openId） */
  wx_id?: string;

  /** 支付宝 ID，通过支付宝 SDK 获取到用户唯一标识 */
  alipay_id?: string;

  /** 自定义 ID */
  cust_id?: string;
}

export interface PageviewOptionType {
  /** 自定义参数 */
  params: any;

  /** 页面标题 */
  title: string;

  /** 页面 URL */
  url: string;
}

export interface HyperWebAnalyticsProps {
  /** JS SDK 的 URL 地址 */
  jsUrl?: string;

  /** 执行函数放名称 */
  name?: string;
}

export declare class HyperWebAnalytics {
  constructor(props?: HyperWebAnalyticsProps);

  /** 创建跟踪对象 */
  create(
    projectId: string,
    options?: CreateOptionType,
    callback?: CallbackType
  );

  /** 认证用户信息 */
  identify(options: IdentifyOptionType);

  /** 页面访问跟踪 */
  sendPageview(options?: PageviewOptionType, callback?: CallbackType);

  /** 行为跟踪 */
  sendAction(actionMame: string, actionParams?: any, callback?: CallbackType);

  /** 表单跟踪 */
  sendForm(formParams?: any, callback?: CallbackType);
}

export default HyperWebAnalytics;
