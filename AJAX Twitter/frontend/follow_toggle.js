const APIUtil = require("./api_util");

class FollowToggle {
    constructor($el) {
        this.el = $el;

        this.userId = this.el.data("user_id");
        this.followState = this.el.data("initial-follow-state");
        this.currentUserId = this.el.data("current_user_id");

        this.render();
        this.handleClick();
    }

    render() {
        if (this.followState === "unfollowed") {
            this.el.text("follow");
        } else if (this.followState === "followed") {
            this.el.text("unfollow");
        } else if (this.followState === "following"){
            this.el.prop("disabled", "true")
        } else if (this.followState === "unfollowing") {
            this.el.prop("disabled", "true")
        }
    }

    handleClick() { 
        this.el.on("click", e => {
            e.preventDefault();
            if (this.followState === "unfollowed"){
                this.followState = "following";
                APIUtil.followUser(this.userId).then(() =>{
                    this.followState = "followed";
                    this.render();
                });   
            }
            else {
                this.followState = "unfollowing";
                APIUtil.unfollowUser(this.userId).then(() => {
                    this.followState = "unfollowed";
                    this.render()
                });
            }
        })
    }
}

module.exports = FollowToggle;