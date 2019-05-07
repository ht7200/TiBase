/** * html节点字体大小随屏幕大小改变 ***/
(function(doc, win) {
  // eslint-disable-next-line one-var
  var docEl = doc.documentElement,
      resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
      recalc = function() {
          var clientWidth = docEl.clientWidth;
          if(!clientWidth) return;
          if(clientWidth >= 640) {
              docEl.style.fontSize = '40px';
          }else {
              docEl.style.fontSize = 10 * (clientWidth / 375) + 'px';
              console.log('1rem=' + 10 * (clientWidth / 375) + 'px');
          }
      };

  if(!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);