var FadeInInterval;
var ScrollDownInterval;
var CurrentOpacity = 0;
var contactTextDiv;
function Initialize() {
    InitializeFadeIn();
    UpdateTwitterFeed();
    // UpdateTumblrFeed();
    //InitializeScrollDown();
    RegisterEventHandlers();
}
function UpdateTwitterFeed() {
    $.jTwitter('jokeAday_mckay', 1, function (userdata) {
        try {
            $("#TwitterFeedContent").text(userdata.results[0].text);
        }
        catch (err) {
            $("#TwitterFeedContent").text("Whoops - there was an error loading my tweets!");
        }

    });
}
function FormatTwitterDate(str) {
    return str.substring(4,10);
}
function UpdateTumblrFeed(data) {
    try {
        $("#TumblrFeedContent")[0].innerHTML = TumblrStrip(data.posts[0]["regular-body"]);
        $("#TumblrHandle")[0].innerHTML += "|| " + data.posts[0].date.substring(8, 11) + " " + data.posts[0].date.substring(5, 8);
    }
    catch (err) {
    }

}
function TumblrStrip(post) {
    post = removeHTMLTags(post);
    console.log("Post", post);
    var postCharLimit = 100;
    var elip = "...";
    var length = post.length;
    if (length < postCharLimit) {
        return post;
    }
    else {
        return post.substring(0, postCharLimit - elip.length) + elip;
    }
}
function removeHTMLTags(strInputCode) {
    return strInputCode.replace(/<\/?[^>]+(>|$)/g, "");
}
function InitializeFadeIn() {
    FadeInInterval = setInterval(FadeIn, 75);
}
function InitializeScrollDown() {
    ScrollDownInterval = setInterval(ScrollDown, 15);
}
function FadeIn() {
    if (CurrentOpacity < 1) {
        CurrentOpacity += .05;
        $(".FadeIn").each(function () {
            this.style.opacity = CurrentOpacity;
        });
    } else {
    clearInterval(FadeInInterval);
    }
    
}
function ScrollDown() {
    scrollDownMembers = [Column];
    for (var i = 0; i < scrollDownMembers.length; i++) {
        scrollDownMember = scrollDownMembers[i];
        if (!scrollDownMember.style.height)
        {
            scrollDownMember.style.height = "0%";
        }
        var height = parseInt(scrollDownMember.style.height.replaceAll("%", ""));
        scrollDownMember.style.height = (height + 5) + "%";
    }
}
function RegisterEventHandlers() {
    //window.addEventListener("click", Click, false);
    
}
function Click(e) {
    alert(e.srcElement.id);
}
