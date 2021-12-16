# Server API

## Server

- address: http://47.104.196.155:5020

- LAN address: http://192.168.43.253:5000

## API

- getOne

    - path = /getOne

    - method = get

    - require param: void

    - response data: Msg.prototype

- login

    - path = /login

    - method = post

    - require data

        - username: string

        - password: string

    - response data

        - isPermit: boolean

- setKeyword

    - path = /setKeyword

    - method = post

    - require data

        - keyword: string

    - response data: void

- searchKeyword

    - path = /queryKeyword

    - method = get

    - require data

        - keyword: string

    - response data: Msg.prototype[]

## Dependent

- TableData.js

    - getOne

- Login.vue

    - login

- Controller.vue

    - over

- Handset.vue

    - setKeyword

## Models

- Msg.prototype

    - user_id: string

        - 用户id

    - created_at_time: string

        - 发送时间

        - show = true

    - title_address: string

        - 原文地址

    - title_content: string

        - 文章内容

        - show = true

    - phone_source: string

        - 设备类型

    - forward_count: string

        - 转发次数

    - comment_count: string

        - 评论次数

    - attitudes_count: string

        - 点赞次数

    - user_screen_name: string

        - 用户名

        - show = true

    - user_type: string

        - 用户类型

    - scary_date: string

        - 爬取日期

    - keyword: string

        - 关键词

        - show = true
