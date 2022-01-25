/**
 * 通用的 V1.2,针对0.3.3以上版本
 */
const SysConfig = {
  //#region ********系统界面相关配置
  UI: {
    /*必须，系统配置标题，必须 */
    SiteTitle: '时空云平台API开发示例',
    CopyRight: '@北京帝测科技股份有限公司',
    WebSite: '',
    /**是否是能访问互联网，还是内网部署应用*/
    IsInternet: true,
    LockTime: 3600, //1小时
    IsNoLogin: true //无需登录页面
  },
  //#endregion

  //#region ********后台服务地址配置
  ServiceURL: {
    /**
     * 用户登录（统一用户登录）
     */
    LoginAuthURL: 'http://192.168.1.5:181',
    /**
     * Axios普通WebAPI的BaseURL
     * 全局默认的http请求地址（一般与主hprose相同或不同）;文件上传地址
     */
    DefaultWebAPI: '',
    /**
     * Hprose在线测试地址
     */
    HproseTestURL: 'http://192.168.1.29'

  },
  //#endregion

  //#region 菜单配置项
  menus: {
    // default: {
    //   name: '首页',
    //   path: '/'
    // },
    babylon: {
      name: 'Babylon引擎学习',
      path: '/demo/babylon',
      config: '/config/menuConfig_babylon.js'
    }
  }
  //#endregion
};
//其他可扩展执行的JS代码
//默认设置网站Title
document.title = SysConfig.UI.SiteTitle;
//设置样式
var htmlRoot = document.getElementById('htmlRoot');
var theme = window.localStorage.getItem('__APP__DARK__MODE__');
if (htmlRoot && theme) {
  htmlRoot.setAttribute('data-theme', theme);
  theme = htmlRoot = null;
}
