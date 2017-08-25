/*
 * Noel Delgado | @pixelia_me
 */

var items = []
  , point = document.querySelector('svg').createSVGPoint();

function getCoordinates(e, svg) {
  point.x = e.clientX;
  point.y = e.clientY;
  return point.matrixTransform(svg.getScreenCTM().inverse());
}

function changeColor(e) {
  document.body.className = e.currentTarget.className;
}

function Item(config) {
  Object.keys(config).forEach(function (item) {
    this[item] = config[item];
  }, this);
  this.el.addEventListener('mousemove', this.mouseMoveHandler.bind(this));
  this.el.addEventListener('touchmove', this.touchMoveHandler.bind(this));
}

Item.prototype = {
  update: function update(c) {
    this.clip.setAttribute('cx', c.x);
    this.clip.setAttribute('cy', c.y);
  },
  mouseMoveHandler: function mouseMoveHandler(e) {
    this.update(getCoordinates(e, this.svg));
  },
  touchMoveHandler: function touchMoveHandler(e) {
    e.preventDefault();
    var touch = e.targetTouches[0];
    if (touch) return this.update(getCoordinates(touch, this.svg));
  }
};

[].slice.call(document.querySelectorAll('.item'), 0).forEach(function (item, index) {
  items.push(new Item({
    el: item,
    svg: item.querySelector('svg'),
    clip: document.querySelector('#clip-'+index+' circle'),
  }));
});

[].slice.call(document.querySelectorAll('button'), 0).forEach(function (button) {
  button.addEventListener('click', changeColor);
});
var head=document.querySelector("header");

{
  let cons = document.querySelectorAll(".floor");
  let lefts = document.querySelectorAll(".menu-item");
  let obj = document.documentElement.scrollTop == 0 ? document.body : document.documentElement;
  window.addEventListener("scroll", function () {
    //点击滚动
    lefts.forEach(function (value, index) {
      lefts[index].onclick = function () {
        let ot = cons[index].offsetTop;
        obj.scrollTop = ot;
        animate(obj, {scrollTop: ot}, 2000);
      }
    });
  });
}
{
  let life = document.querySelector(".life");
  let zhuyao=document.querySelectorAll(".zhuyao-1");
  console.log(zhuyao);
  console.log(life);
  // window.addEventListener("scroll", function (value) {
  //   //点击滚动
  //
  //
  // });
}

