export default class Msg {

    /**
     *
     * @param {string} keyword
     * @param {string} username
     * @param {string} sendTime
     * @param {string} content
     * @param {string} userId
     * @param {string} userType
     * @param {string} setoutType
     * @param {string} originUrl
     * @param {string} attitudeCount
     * @param {string} commentCount
     * @param {string} forwardCount
     * @param {string} scaryDate
     */
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

    static turnResponseDataToMsg(responseData) {
        return new Msg(
            responseData.keyword,
            responseData.user_screen_name,
            responseData.created_at_time,
            responseData.title_content,
            responseData.user_id,
            responseData.user_type,
            responseData.phone_source,
            responseData.title_address,
            responseData.attitudes_count,
            responseData.comment_count,
            responseData.forward_count,
            responseData.scary_date
        )
    }
}
