setTimeout(function () {
  getAllInit();
}, 1000);

function getAllInit() {
  if($){
    init();
    initBg();
  } else {
    setTimeout(function () {
      getAllInit();
    }, 1000);
  }

}

function init() {
    //定义获取词语下标
    var a_idx = 0;
    jQuery(document).ready(function ($) {
        function c() {
            return (
                "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")"
            );
        }
        //点击body时触发事件
        $("body").click(function (e) {
            //需要显示的词语
            var a = new Array(
                "富强",
                "民主",
                "文明",
                "和谐",
                "自由",
                "平等",
                "公正",
                "法治",
                "爱国",
                "敬业",
                "诚信",
                "友善"
            );
            //设置词语给span标签
            var $i = $("<span/>").text(a[a_idx]);
            //下标等于原来下标+1  余 词语总数
            a_idx = (a_idx + 1) % a.length;
            //获取鼠标指针的位置，分别相对于文档的左和右边缘。
            //获取x和y的指针坐标
            var x = e.pageX,
                y = e.pageY;
            //在鼠标的指针的位置给$i定义的span标签添加css样式
            $i.css({
                "z-index": 999999,
                top: y - 20,
                left: x,
                position: "absolute",
                "font-weight": "bold",
                color: c()
            });
            //在body添加这个标签
            $("body").append($i);
            //animate() 方法执行 CSS 属性集的自定义动画。
            //该方法通过CSS样式将元素从一个状态改变为另一个状态。CSS属性值是逐渐改变的，这样就可以创建动画效果。
            //详情请看http://www.w3school.com.cn/jquery/effect_animate.asp
            $i.animate(
                {
                    //将原来的位置向上移动180
                    top: y - 180,
                    opacity: 0
                    //1500动画的速度
                },
                1500,
                function () {
                    //时间到了自动删除
                    $i.remove();
                }
            );
        });
    });
}

function initBg() {
    $(function () {
        var config = {
            zindex: -1,
            opacity: 0.5,
            color: 0,
            id: "canvas_id"
        };
        function get_attribute(node, attr, default_value) {
            return node.getAttribute(attr) || default_value;
        }
        //封装方法，压缩之后减少文件大小
        function get_by_tagname(name) {
            return document.getElementsByTagName(name);
        }
        // var canvas = document.querySelector("canvas"),
        // var defaultCanvas = document.getElementById(config.id);
        // if (defaultCanvas) {
        //     defaultCanvas.remove();
        //     console.log("123123213");
        //     // defaultCanvas.parentNode.removeChild(defaultCanvas);
        // }
        var canvas = canvas || document.createElement("canvas"), //画布
            ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        ctx.lineWidth = 0.3;
        ctx.strokeStyle = new Color(config.color).style;
        canvas.id = config.id;
        canvas.style.cssText = "position:fixed;top:0;left:0;z-index:" + config.zindex + ";opacity:" + config.opacity;
        get_by_tagname("body")[0].appendChild(canvas);
        var mousePosition = {
            x: (30 * canvas.width) / 100,
            y: (30 * canvas.height) / 100
        };

        var dots = {
            nb: 200, // 数量
            distance: 50,
            d_radius: 100,
            array: []
        };

        function colorValue(min = 0) {
            return Math.floor(Math.random() * 255 + min);
        }

        function createColorStyle(r, g, b) {
            return "rgba(" + r + "," + g + "," + b + ", 0.8)";
        }

        function mixComponents(comp1, weight1, comp2, weight2) {
            return (comp1 * weight1 + comp2 * weight2) / (weight1 + weight2);
        }

        function averageColorStyles(dot1, dot2) {
            var color1 = dot1.color,
                color2 = dot2.color;

            var r = mixComponents(color1.r, dot1.radius, color2.r, dot2.radius),
                g = mixComponents(color1.g, dot1.radius, color2.g, dot2.radius),
                b = mixComponents(color1.b, dot1.radius, color2.b, dot2.radius);
            return createColorStyle(Math.floor(r), Math.floor(g), Math.floor(b));
        }

        function Color(min) {
            min = min || 0;
            this.r = colorValue(min);
            this.g = colorValue(min);
            this.b = colorValue(min);
            this.style = createColorStyle(this.r, this.g, this.b);
        }

        function Dot() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;

            this.vx = -0.5 + Math.random();
            this.vy = -0.5 + Math.random();

            this.radius = Math.random() * 3;

            this.color = new Color();
            // console.log(this);
        }

        Dot.prototype = {
            draw: function () {
                ctx.beginPath();
                ctx.fillStyle = this.color.style;
                ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
                ctx.fill();
            }
        };

        function createDots() {
            for (i = 0; i < dots.nb; i++) {
                dots.array.push(new Dot());
            }
        }

        function moveDots() {
            for (i = 0; i < dots.nb; i++) {
                var dot = dots.array[i];

                if (dot.y < 0 || dot.y > canvas.height) {
                    dot.vx = dot.vx;
                    dot.vy = -dot.vy;
                } else if (dot.x < 0 || dot.x > canvas.width) {
                    dot.vx = -dot.vx;
                    dot.vy = dot.vy;
                }
                dot.x += dot.vx;
                dot.y += dot.vy;
            }
        }

        function connectDots() {
            for (i = 0; i < dots.nb; i++) {
                for (j = 0; j < dots.nb; j++) {
                    i_dot = dots.array[i];
                    j_dot = dots.array[j];

                    if (
                        i_dot.x - j_dot.x < dots.distance &&
                        i_dot.y - j_dot.y < dots.distance &&
                        i_dot.x - j_dot.x > -dots.distance &&
                        i_dot.y - j_dot.y > -dots.distance
                    ) {
                        if (
                            i_dot.x - mousePosition.x < dots.d_radius &&
                            i_dot.y - mousePosition.y < dots.d_radius &&
                            i_dot.x - mousePosition.x > -dots.d_radius &&
                            i_dot.y - mousePosition.y > -dots.d_radius
                        ) {
                            ctx.beginPath();
                            ctx.strokeStyle = averageColorStyles(i_dot, j_dot);
                            ctx.moveTo(i_dot.x, i_dot.y);
                            ctx.lineTo(j_dot.x, j_dot.y);
                            ctx.stroke();
                            ctx.closePath();
                        }
                    }
                }
            }
        }

        function drawDots() {
            for (i = 0; i < dots.nb; i++) {
                var dot = dots.array[i];
                dot.draw();
            }
        }

        function animateDots() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            moveDots();
            connectDots();
            drawDots();

            requestAnimationFrame(animateDots);
        }
        // canvas.addEventListener("mousemove", function (e) {
        //     mousePosition.x = e.page;
        //     mousePosition.y = e.pageY;
        // });

        // canvas.addEventListener("mouseleave", function (e) {
        //     mousePosition.x = canvas.width / 2;
        //     mousePosition.y = canvas.height / 2;
        // });
        window.onmousemove = function (e) {
            e = e || window.event;
            mousePosition.x = e.clientX;
            mousePosition.y = e.clientY;
        };
        window.onmouseout = function () {
            mousePosition.x = canvas.width / 2;
            mousePosition.y = canvas.height / 2;
        };
        // window.onresize = function () {
        //     createDots();
        //     requestAnimationFrame(animateDots);
        // };
        createDots();
        requestAnimationFrame(animateDots);
    });
}
