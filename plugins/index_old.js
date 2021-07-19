//鼠标点击爱心
// !(function (e, t, a) {
//     function r() {
//         for (var e = 0; e < s.length; e++)
//             s[e].alpha <= 0
//                 ? (t.body.removeChild(s[e].el), s.splice(e, 1))
//                 : (s[e].y--,
//                   (s[e].scale += 0.004),
//                   (s[e].alpha -= 0.013),
//                   (s[e].el.style.cssText =
//                       "left:" +
//                       s[e].x +
//                       "px;top:" +
//                       s[e].y +
//                       "px;opacity:" +
//                       s[e].alpha +
//                       ";transform:scale(" +
//                       s[e].scale +
//                       "," +
//                       s[e].scale +
//                       ") rotate(45deg);background:" +
//                       s[e].color +
//                       ";z-index:99999"));
//         requestAnimationFrame(r);
//     }
//     function n() {
//         var t = "function" == typeof e.onclick && e.onclick;
//         e.onclick = function (e) {
//             t && t(), o(e);
//         };
//     }
//     function o(e) {
//         var a = t.createElement("div");
//         (a.className = "heart"),
//             s.push({
//                 el: a,
//                 x: e.clientX - 5,
//                 y: e.clientY - 5,
//                 scale: 1,
//                 alpha: 1,
//                 color: c()
//             }),
//             t.body.appendChild(a);
//     }
//     function i(e) {
//         var a = t.createElement("style");
//         a.type = "text/css";
//         try {
//             a.appendChild(t.createTextNode(e));
//         } catch (t) {
//             a.styleSheet.cssText = e;
//         }
//         t.getElementsByTagName("head")[0].appendChild(a);
//     }
//     function c() {
//         return "rgb(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + ")";
//     }
//     var s = [];
//     (e.requestAnimationFrame =
//         e.requestAnimationFrame ||
//         e.webkitRequestAnimationFrame ||
//         e.mozRequestAnimationFrame ||
//         e.oRequestAnimationFrame ||
//         e.msRequestAnimationFrame ||
//         function (e) {
//             setTimeout(e, 1e3 / 60);
//         }),
//         i(
//             ".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"
//         ),
//         n(),
//         r();
// })(window, document);

//鼠标绘制多边形
// !(function () {
//     //封装方法，压缩之后减少文件大小
//     function get_attribute(node, attr, default_value) {
//         return node.getAttribute(attr) || default_value;
//     }
//     //封装方法，压缩之后减少文件大小
//     function get_by_tagname(name) {
//         return document.getElementsByTagName(name);
//     }
//     //获取配置参数
//     function get_config_option() {
//         var scripts = get_by_tagname("script"),
//             script_len = scripts.length,
//             script = scripts[script_len - 1]; //当前加载的script
//         return {
//             l: script_len, //长度，用于生成id用
//             z: get_attribute(script, "zIndex", -1), //z-index
//             o: get_attribute(script, "opacity", 0.2), //opacity
//             // c: get_attribute(script, "color", ~~(255 * Math.random()) + "," +~~(255 * Math.random())+","+~~(255 * Math.random())), //color
//             n: get_attribute(script, "count", 199) //count
//         };
//     }
//     //设置canvas的高宽
//     function set_canvas_size() {
//         (canvas_width = the_canvas.width =
//             window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth),
//             (canvas_height = the_canvas.height =
//                 window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight);
//     }

//     //绘制过程
//     function draw_canvas() {
//         context.clearRect(0, 0, canvas_width, canvas_height);
//         //随机的线条和当前位置联合数组
//         var e, i, d, x_dist, y_dist, dist; //临时节点
//         //遍历处理每一个点
//         random_points.forEach(function (r, idx) {
//             (r.x += r.xa),
//                 (r.y += r.ya), //移动
//                 (r.xa *= r.x > canvas_width || r.x < 0 ? -1 : 1),
//                 (r.ya *= r.y > canvas_height || r.y < 0 ? -1 : 1), //碰到边界，反向反弹
//                 context.fillRect(r.x - 0.5, r.y - 0.5, 1, 1); //绘制一个宽高为1的点
//             //从下一个点开始
//             for (i = idx + 1; i < all_array.length; i++) {
//                 e = all_array[i];
//                 // 当前点存在
//                 if (null !== e.x && null !== e.y) {
//                     x_dist = r.x - e.x; //x轴距离 l
//                     y_dist = r.y - e.y; //y轴距离 n
//                     dist = x_dist * x_dist + y_dist * y_dist; //总距离, m

//                     dist < e.max &&
//                         (e === current_point && dist >= e.max / 2 && ((r.x -= 0.03 * x_dist), (r.y -= 0.03 * y_dist)), //靠近的时候加速
//                         (d = (e.max - dist) / e.max),
//                         context.beginPath(),
//                         (context.lineWidth = d / 2),
//                         (context.strokeStyle = "rgba(" + ~~(255 * Math.random()) + "," + ~~(255 * Math.random()) + "," + ~~(255 * Math.random())  + "," + (d + 0.2) + ")"),
//                         context.moveTo(r.x, r.y),
//                         context.lineTo(e.x, e.y),
//                         context.stroke());
//                 }
//             }
//         }),
//             frame_func(draw_canvas);
//     }
//     //创建画布，并添加到body中
//     var the_canvas = document.createElement("canvas"), //画布
//         config = get_config_option(), //配置
//         canvas_id = "c_n" + config.l, //canvas id
//         context = the_canvas.getContext("2d"),
//         canvas_width,
//         canvas_height,
//         frame_func =
//             window.requestAnimationFrame ||
//             window.webkitRequestAnimationFrame ||
//             window.mozRequestAnimationFrame ||
//             window.oRequestAnimationFrame ||
//             window.msRequestAnimationFrame ||
//             function (func) {
//                 window.setTimeout(func, 1000 / 45);
//             },
//         random = Math.random,
//         current_point = {
//             x: null, //当前鼠标x
//             y: null, //当前鼠标y
//             max: 20000 // 圈半径的平方
//         },
//         all_array;
//     the_canvas.id = canvas_id;
//     the_canvas.style.cssText = "position:fixed;top:0;left:0;z-index:" + config.z + ";opacity:" + config.o;
//     get_by_tagname("body")[0].appendChild(the_canvas);

//     //初始化画布大小
//     set_canvas_size();
//     window.onresize = set_canvas_size;
//     //当时鼠标位置存储，离开的时候，释放当前位置信息
//     (window.onmousemove = function (e) {
//         e = e || window.event;
//         current_point.x = e.clientX;
//         current_point.y = e.clientY;
//     }),
//         (window.onmouseout = function () {
//             current_point.x = null;
//             current_point.y = null;
//         });
//     //随机生成config.n条线位置信息
//     for (var random_points = [], i = 0; config.n > i; i++) {
//         var x = random() * canvas_width, //随机位置
//             y = random() * canvas_height,
//             xa = 2 * random() - 1, //随机运动方向
//             ya = 2 * random() - 1;
//         // 随机点
//         random_points.push({
//             x: x,
//             y: y,
//             xa: xa,
//             ya: ya,
//             max: 6000 //沾附距离
//         });
//     }
//     all_array = random_points.concat([current_point]);
//     //0.1秒后绘制
//     setTimeout(function () {
//         draw_canvas();
//     }, 100);
// })();

setTimeout(function () {
    init();
}, 0);

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
        // var canvas = document.querySelector("canvas"),
        var canvas = document.createElement("canvas"), //画布
            ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        ctx.lineWidth = 0.3;
        ctx.strokeStyle = new Color(150).style;

        var mousePosition = {
            x: (30 * canvas.width) / 100,
            y: (30 * canvas.height) / 100
        };

        var dots = {
            nb: 150,
            distance: 50,
            d_radius: 100,
            array: []
        };

        function colorValue(min) {
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

            this.radius = Math.random() * 2;

            this.color = new Color();
            console.log(this);
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

        $("canvas").on("mousemove", function (e) {
            mousePosition.x = e.pageX;
            mousePosition.y = e.pageY;
        });

        $("canvas").on("mouseleave", function (e) {
            mousePosition.x = canvas.width / 2;
            mousePosition.y = canvas.height / 2;
        });

        createDots();
        requestAnimationFrame(animateDots);
    });
}
