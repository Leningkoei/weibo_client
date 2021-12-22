# The client of wei_bo_pa_chong

- Powered by Vue2

## Main Import

- animation-CSS
- axios
- element-ui
- less

## Bug

- 经测试, npm run build 生成生产文件时, .detail { opacity: 88% } 不知道为啥会便乘 .detail { opacity: 1% }

## Pages

- App
    - NotFound: 当url输入不正确时会跳转至此界面
    - Login: 用户登录界面
    - Main
        - left
            - User: 呈现用户信息
            - Controller
                - Handset: 控制, 检测爬虫工作状态的遥控器
        - right
            - Detail: 实时展示爬虫工作成果的表格
        - drawer
            - Searcher: 用来通过关键词搜索爬虫爬取结果
