export default {
    install (Vue, option) {
      
      function Console() {
        let myconsole = new Object();
        myconsole.log = function (title, obj, color, bgcolor) {
          if (!color) {
            color = '#1f222d'
          }
          if (!bgcolor) {
            bgcolor = '#cccccc'
          }
          console.log('%c ---------log----------:' + title + ' ', 'background: ' + bgcolor + '; color: ' + color + ';padding:8px 12px;')
          if (obj) {
            console.log('%c ---------log---------:', 'background: ' + bgcolor + '; color: ' + color + ';padding:8px 12px;', obj)
          }
        }
        myconsole.debug = function (title, obj, color, bgcolor) {
          if (process.env.NODE_ENV === 'development') {
            if (!color) {
              color = '#d2ff1d'
            }
            if (!bgcolor) {
              bgcolor = '#222'
            }
            console.log('%c --------debug-----------:' + title + ' ', 'background: ' + bgcolor + '; color: ' + color + ';padding:8px 12px;')
            if (obj) {
              console.log('%c --------debug----------:', 'background: ' + bgcolor + '; color: ' + color + ';padding:8px 12px;', obj)
            }
          }
        }
        myconsole.error = function (title, obj, color, bgcolor) {
          if (!color) {
            color = '#f3253c'
          }
          if (!bgcolor) {
            bgcolor = '#222'
          }
          
          if (obj) {
            console.log('%c -------error-----------:'+ title+":",'color: ' + color + ';padding:8px 12px;', obj)
          }else{
            console.log('%c ------error----------:' + title + ' ', ' color: ' + color + ';padding:8px 12px;')
          }
        }
        return myconsole;
      }
      // 全局log函数
      Vue.prototype.$console = new Console()
    }
  }
