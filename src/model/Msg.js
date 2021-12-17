export default class Msg {

    constructor(
        keyword,        // 关键词
        username,       // 用户名
        sendTime,       // 发送时间
        content,        // 文章内容
        userId,         // 用户id
        userType,       // 用户类型
        setoutType,     // 设备种类
        originUrl,      // 原文地址
        attitudeCount,  // 点赞次数
        commentCount,   // 评论次数
        forwardCount,   // 转发次数
        scaryDate       // 爬取时间
    ) {
        this.keyword = keyword
        this.username = username
        this.sendTime = sendTime
        this.content = content
        this.userId = userId
        this.userType = userType
        this.setoutType = setoutType
        this.originUrl = originUrl
        this.attitudeCount = attitudeCount
        this.commentCount = commentCount
        this.forwardCount = forwardCount
        this.scaryDate = scaryDate
    }
}
