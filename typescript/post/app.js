// Post ?
var PostStatus;
(function (PostStatus) {
    PostStatus[PostStatus["Unpulished"] = 0] = "Unpulished";
    PostStatus[PostStatus["Published"] = 1] = "Published";
    PostStatus[PostStatus["Draft"] = 2] = "Draft";
})(PostStatus || (PostStatus = {}));
var post = {
    title: '过五关斩六将， 去了鹅厂',
    status: PostStatus.Unpulished,
    content: '春招以来， 我的面试是这么一个过程'
};
console.log(post);
console.log(PostStatus);
