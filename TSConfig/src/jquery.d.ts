//定义全局变量
// declare var $: (param: () => void) => void;

//定义全局函数
declare module "jquery" {
  interface JqueryInstance {
    html: (html: string) => JqueryInstance;
  }
  function $(readyFunc: () => void): void;
  function $(selector: string): JqueryInstance;

  namespace $ {
    namespace fn {
      class init {}
    }
  }
  export = $;
}
