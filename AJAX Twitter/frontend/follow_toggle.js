class FollowToggle {
    constructor($el) {
        this.el = $el;

        this.userId = this.el.data("user_id");
        this.followState = this.el.data("initial-follow-state");

        this.render();
    }

    render() {
        if (this.followState === "unfollowed") {
            this.el.css("content", "unfollowed");
        } else {
            this.el.css("content", "followed");
        }
    }

}

module.exports = FollowToggle;