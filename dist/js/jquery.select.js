// 创建一个闭包  
(function($) {
  // 插件的定义  
  $.fn.dragselect = function(options) {
    debug(this);
    // build main options before element iteration  
    var opts = $.extend({}, $.fn.dragselect.defaults, options);
    // iterate and reformat each matched element  
    return this.each(function() {
      $this = $(this);
      // build element specific options  
      var o = $.meta ? $.extend({}, opts, $this.data()) : opts;



      ////////////----------------------------------------

      var scrollTop = 0;
      $(".body-wrap").scroll(function() {
        scrollTop = $(this).scrollTop();
      });


      var documentWidth = $(this).width();
      var documentHeight = $(this).height();
      debug(documentWidth + "---" + documentHeight);
      var box = $(this);
      var items = $(this).find(o.dragItem);
      var mask = $('.' + o.maskCls);
      var startX, startY;
      var endX, endY;
      var selectStart = false;
      $(document).on('mousedown', function(event) {
        console.log(event);
        selectStart = true;
        $(items).removeClass(o.activeCls)
        startX = event.pageX;
        startY = event.pageY;
        if (!mask || mask.length == 0) {
          mask = $('<div></div>').addClass(o.maskCls);
        }
        $(document.body).append(mask);
      })
      $(document).on('mousemove', function(event) {
        if (!selectStart) {
          return;
        }
        endX = event.pageX;
        endY = event.pageY;
        var width = Math.abs(endX - startX);
        var height = Math.abs(endY - startY);
        var left = startX < endX ? startX : endX;
        var top = startY < endY ? startY : endY;


        width = Math.min(documentWidth - left, width);
        height = Math.min(documentHeight - top, height);

        $.each(items, function(i) {
          markSelect($(items[i]), left, top, width, height);
        })
        $(mask).css({
          display: 'block',
          top: top,
          left: left,
          width: width,
          height: height
        })
      })
      $(document).on('mouseup', function(event) {
        if (!selectStart) {
          return;
        }
        console.log(event);
        $(mask).css({
          width: 0,
          height: 0,
        }).remove();
        selectStart = false;
      })



      // // update element styles  
      // $this.css({
      //   backgroundColor: o.background,
      //   color: o.foreground
      // });
      // var markup = $this.html();
      // // call our format function  
      // markup = $.fn.dragselect.format(markup);
      // $this.html(markup);
    });
  };

  function markSelect(item, left, top, width, height) {
    if (!item) {
      return
    }

    var off = item.offset();
    var xMin = off.left;
    var yMin = off.top;
    var xMax = off.left + item.width();
    var yMax = off.top + item.height();

    var oxMin = left;
    var oyMin = top;
    var oxMax = left + width;
    var oyMax = top + height;

    var minx = Math.max(xMin, oxMin);
    var miny = Math.max(yMin, oyMin);
    var maxx = Math.min(xMax, oxMax);
    var maxy = Math.min(yMax, oyMax);
    // console.log(xMin+"\t"+yMin+"\t"+xMax+"\t"+yMax
    //   +"\t=="+oxMin+"\t"+oyMin+"\t"+oxMax+"\t"+oyMax
    //   +"\t=="+minx+"\t"+miny+"\t"+maxx+"\t"+maxy);
    if (maxx >= minx && maxy >= miny) {
      $(item).addClass('active');
    } else {
      $(item).removeClass('active');
    }
  };

  // 私有函数：debugging  
  function debug($obj) {
    if (window.console && window.console.log)
      window.console.log('dragselect selection count: ' + $obj);
  };

  // 定义暴露format函数  
  $.fn.dragselect.format = function(txt) {
    return '<strong>' + txt + '</strong>';
  };

  // 插件的defaults  
  $.fn.dragselect.defaults = {
    dragBox: '.drag-box',
    dragItem: '.item',
    activeCls: 'active',
    maskCls: 'drag-mask',
  };

  // 闭包结束  
})(jQuery);