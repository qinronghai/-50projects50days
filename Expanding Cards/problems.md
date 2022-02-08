项目名称: Expanding Cards

项目原址: https://github.com/bradtraversy/50projects50days


>这个文件主要是记录我在本次项目中遇到的一些问题,以及这些问题的解决方式。

- [x] **容器设置百分比高度无效**
 
 [![HuagcF.png](https://s4.ax1x.com/2022/02/06/HuagcF.png)](https://imgtu.com/i/HuagcF)
 
 将panel的高度设置为100%时无效,因为此元素的父级元素及其以上均未设置高度。

- [x] **如何设置相同类名的前几个类的属性？**
1. :nth-child(n)    选择第n个
2. :nth-child(2n)   选择第偶数个
3. :nth-child(-n+6) 选择第1个到第6个
4. :nth-child(n+6)  选择从第6个开始，直到最后
5. :nth-child(-n+3):nth-child(-n+9) 选择第6个到第9个
   
- [x] **class属性有两个值，该如何写css选择器？**

    eg：class="panel active"
    1. .panel .active  => 匹配含panel下的含active的元素(中间有空格)
    2. .panel.active   => 匹配同时包含panel和active的元素 
    3. .active => 也可以匹配举例的这个元素
   
- [x] **flex布局下如何使其中之一的块填满剩下的空间？**
   在其中之一的块设置： [`flex-grow: 1;`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex-grow)
   知识点：flex-grow
   这个属性规定了flex-grow所在的项在flex容器中分配剩余空间的相对比例。

- [x] [**关于背景图片的css样式设置**](https://www.cnblogs.com/hamsterPP/p/5205976.html)
    ```css
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center; //设置背景图片在容器中居中显示
    ```

- [x] **文字的隐藏和显示思路：** transition+透明度

- [x] **对于我来说，关于这个小demo，我遇到的两个难题：**
     1. flex布局下的5个盒子中，鼠标点击事件的元素panel和上一个被激活的active元素对于flex父元素(container)的剩余空间的分配问题：
         1. 被点击的panel的元素的width需要逐渐变大，填满flex父元素(container)的剩余空间。
         2. 上一个激活的元素的width需要逐渐变小，变到与其他未被激活的元素大小一致。
         3. 上面这两个过程是同时进行的，并且伴随元素的width过渡效果。
        ```css
        .panel {
        height: 100%;
        border-radius: 50px;
        margin-right: 20px;
        flex: 1;  // 未激活之前所占宽度
        position: relative;
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
        transition: flex 2s;  // 在点击另一个之后，原来的这个的active类删除，
        那么这个宽度就会回到flex：1（原来是flex：8），所以增加flex这个状态的过 
        渡效果，2s。当回到flex：1的同时，被激活的元素也会有宽度变化的过渡效果。
        }
        .active {
        flex-grow: 8;  //激活后的宽度占满剩余空间
        }
        ```


     2. h3 的文字渐显效果：
        问题：文字原本的宽度是较长的，但是父容器panel为被激活张开之前宽度是小于文字的宽度的。
          ![](https://media.giphy.com/media/ShTm5u711f4o81kwDT/giphy.gif)
        解决：在`visibility = 'visible'`之后添加定时器setTiemout，延迟0.5s才吧opacity变为1，再加上`transition: opacity 3s;`就可以达到预期的效果。

- [x] [为什么有些属性前面要加上-webkit或者-moz？](https://wickedlysmart.com/reader-question-what-are-webkit-and-moz/)
    这关于兼容性问题，因为有些CSS规则并未确定，Chrome等浏览器实现了这些新的想法，并通过 在属性前添加前缀-name-，表示是兼容哪个浏览器引擎的。比如：
      1. -webkit- 对应Chrome和Safari 
      2. -moz-    对应Firefox
   
- [x] [看了作者的源代码，关于媒体查询：](https://developer.mozilla.org/zh-CN/docs/Web/CSS/Media_Queries/Using_media_queries)
    ```css
    // 小于800px宽度的屏幕，以下样式会替换原来的样式
    @media (max-width: 800px) {
      .container {
        width: 100%;  // 只替换宽度，也就是说只有宽度发生变化，其他没有变化
      }

      // 第4，5个panel容器不显示
      .panel:nth-of-type(4),
      .panel:nth-of-type(5) {
        display: none;
      }
    }
    ```
  
- [x] [伪类`:nth-of-type(n)`](https://developer.mozilla.org/zh-CN/docs/Web/CSS/:nth-of-type)
  针对具有一组兄弟节点的标签，用n来筛选出一组兄弟节点的第一几节点。
  `.panel:nth-of-type(4)` 在每组兄弟节点点中选择第4个。

**项目总结：**

  总体上还是完成了同样的效果，完成度接近100。
  
  但是js的思路上是不一样的，作者的思路很清晰明了。我的就感觉有点复杂了。
  
  在css上，文字h3部分作者实现的是点击前和点击后的效果分类显示，这个地方我没有想到，就笼统的认为。

  第一个小项目还是能够学到很多东西的，有时候喜欢这样的需要学什么就会去搞明白，而不是无脑一头从头看到尾教程，啥也记不住，又懒得动手实践。所以，在完成项目中去学习和实践吧！！
