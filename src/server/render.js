export default (req, res) => {
    const html = `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Cai_blog-首页</title>
       <link rel="icon" href="./img/favicon.ico" type="image/x-icon" />
        <link rel="stylesheet" href="./css/base.css">
        <link rel="stylesheet" href="./css/index.css">
        <script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>
        <script src="./js/axios.bundle.js"></script>
    </head>
    
    <body>
        <!-- 头部导航栏 -->
        <header class="header">
            <div class="container">
                <div class="container_btn iconfont">
                    <span class="rot">&#xe699;</span>
                    <ul class="screen_menu">
                        <li><a href="index.html">首页</a></li>
                        <li><a href="sitemap.html">文章轴</a></li>
                        <li><a href="about.html">关于</a></li>
                        <li><a href="guestbook.html">留言</a></li>
                    </ul>
                </div>
                <a href="/" class="title">小蔡叽个人博客<span class="bj">|</span><span>技术博客</span></a>
                <ul class="menu">
                    <li><a href="index.html">首页</a></li>
                    <li><a href="sitemap.html">文章轴</a></li>
                    <li><a href="about.html">关于</a></li>
                    <li><a href="guestbook.html">留言</a></li>
                </ul>
                <div class="search_bar">
                    <div class="search_w iconfont">&#xe610;
                        <div class="search_box screen_box">
                            <div class="search_open">
                                <input type="text" class="search_cont" placeholder="请输入关键字词" v-model="search">
                                <input type="submit" id='search' class="search_sumbit" value="搜索" v-on:click="sendSearch">
                            </div>
                        <div class="search_close iconfont">&#xe65a;</div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- 内容区 -->
        <div class="content">
            <!-- 左边内容区 -->
            <div class="content_left">
                <!-- 图片 -->
                <div class="picture">
    
                    <!-- 轮播图 -->
                    <!-- <div class="picture_active">
                        <div class="picture_cont">
                            <img src="./img/acive1.jpg" alt="">
                        </div>
                    </div> -->
                    <div class="banner-box" id="banner-box" v-if="bannerList.length">
                        <ul class="banner-u" :style="bannerStyle" @transitionend="handle">
                            <li class="banner-list" v-for="ban in bannerList" :key="ban.id">
                                <img class="poster" :src="ban.poster" :alt="ban.title">
                            </li>
                        </ul>
                        <ul class="index-list">
                            <li v-for="index in bannerList.length - 1" class="index" :class="{
                                active: index - 1 === bannerindex % 3
                            }" :key="index"></li>
                        </ul>
                    </div>
    
                    <!-- 静态图 -->
                    <div class="picture_static">
                        <div class="picture_static1">
                            <a href="#">
                                <img src="./img/active7.jpg" alt="">
                                <span>如何写好个人博客?</span>
                            </a>
                        </div>
                        <div class="picture_static2">
                            <a href="#">
                                <img src="./img/static3.jpg" alt="">
                                <span>为什么触摸屏能对人的触摸作出反应?</span>
                            </a>
                        </div>
                    </div>
                </div>
                <!-- 每日一句 -->
                <div class="every_day" id="every_day">
                    <span class="iconfont">每日一句&#xe64c;</span>
                    <p v-html="getContent"></p>
                </div>
                <!-- 文章 -->
                <div class="article_list" id="article_list">
                    <div class="article" v-for="article in articleList">
                        <a v-bind:href="article.link" class="article_title">
                            {{ article.title }}
                        </a>
                        <p class="article_content">
                            {{article.content}}
                        </p>
                        <div class="article_foot">
                            发布于{{article.date}} | 浏览（{{article.views}}）| Tags：{{article.tags}}
                        </div>
                    </div>
                    <div class="page_tool">
                        <ul>
                            <li v-for='pageNum in pageNumList' v-on:click='jumpTo(pageNum.page)' v-bind:class='{now_page:(pageNum.text == page)}'>{{pageNum.text}}</li>
    
                        </ul>
                    </div>
                </div>
            </div>
    
            <!-- 右边内容区 -->
            <div class="content_right">
                <div class="presonal_mes">
                    <h2>我的名片</h2>
                    <p>网名 : Devwin・Cai | 一 叶 知 秋</p>
                    <p>职业 : Web前端开发、全栈</p>
                    <p>现居 : 广东省-清远市</p>
                    <p>Email : qq728978391@163.com</p>
                    <ul>
                        <li>
                            <a href="/" class="iconfont">&#xe61c;
                            </a>
                        </li>
                        <li>
                            <a href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=728978391@qq.com" target="_blank" class="iconfont">&#xe614;
                            </a>
                        </li>
                        <li>
                            <a href="/" class="iconfont">&#xe6da;
                            </a>
                        </li>
                        <li>
                            <a href="/" class="iconfont">&#xe637;
                            </a>
                        </li>
                    </ul>
                </div>
    
                <div class="right_module" id="random_tags">
                    <div>随机标签云</div>
                    <a v-for="tag in tags" v-bind:style="{color:randomColor(),fontSize:randomSize()}" v-bind:href='tag.link'>{{tag.text}}</a>
                </div>
                <div class="right_module" id="new_hot">
                    <div>最近热门</div>
                    <ul>
                        <li v-for="temp in hotList"><a v-bind:href="temp.link">{{temp.title}}</a></li>
                    </ul>
                </div>
    
                <div class="right_module" id="new_comments">
                    <div>最新评论</div>
                    <ul>
                        <li v-for="comment in commentList">
                            <div>
                                <span>{{comment.name}}</span>
                                <span class="pull_right">[{{comment.date}}]</span>
                            </div>
                            <p>{{comment.comment}}</p>
                        </li>
                    </ul>
                </div>
    
                <div class="right_module">
                    <div>友情链接</div>
                    <span><a href="">挨踢茶馆</a></span>
                    <span><a href="">挨踢茶馆</a></span>
                    <span><a href="">挨踢茶馆</a></span>
                    <span><a href="">挨踢茶馆</a></span>
                    <span><a href="">挨踢茶馆</a></span>
                    <span><a href="">挨踢茶馆</a></span>
                    <span><a href="">挨踢茶馆</a></span>
                    <span><a href="">挨踢茶馆</a></span>
                    <span><a href="">挨踢茶馆</a></span>
                    <span><a href="">挨踢茶馆</a></span>
                    <span><a href="">挨踢茶馆</a></span>
    
                </div>
            </div>
        </div>
        <!-- 底部 -->
        <footer class="footer">
            <div class="footer_module">
                <ul>
                    <li>HTML</li>
                    <li>CSS/CSS3</li>
                    <li>JavaScript</li>
                    <li>Webpack</li>
                    <li>Vue</li>
                    <li>VueX</li>
                    <li>NodeJs</li>
                    <li>React</li>
                    <li>Express</li>
                    <li>Koa</li>
                    <li>Redux</li>
                    <li>Python</li>
                    <li>C/C++</li>
                </ul>
                <p>站点声明:</p>
                <p>1、本站个人博客，均为本人设计，个人可以使用，未经许可不得用于任何商业目的</p>
                <p>2、所有文章未经授权禁止转载、摘编、复制或建立镜像，如有违反，追究法律责任。举报邮箱：728978391@qq.com</p>
            </div>
        </footer>
    
        <script src="./js/index.js"></script>
        <script src="./js/base.js"></script>
    </body>
    
    </html>`
    res.send(html)
}