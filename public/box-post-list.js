define(["require", "exports", "./box-post-form"], function (require, exports, box_post_form_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BoxPostList = /** @class */ (function () {
        function BoxPostList(eventManager) {
            this.eventManager = eventManager;
            this.buttonFormSelector = "#".concat(BoxPostList.boxId, ">button[type=button]");
            this.init();
        }
        BoxPostList.prototype.init = function () {
            var _this = this;
            var buttonList = document.querySelector(this.buttonFormSelector);
            buttonList.addEventListener('click', function () { _this.hiddenBox(), _this.eventManager.runEvent(BoxPostList.EVENT_CLICK_HIDDEN_BOX_LIST); });
            this.eventManager.addListener(box_post_form_1.default.EVENT_CLICK_HIDDEN_BOX_FORM, function () { _this.showBox(); });
        };
        BoxPostList.prototype.hiddenBox = function () { document.getElementById(BoxPostList.boxId).style.display = 'none'; };
        BoxPostList.prototype.showBox = function () { document.getElementById(BoxPostList.boxId).removeAttribute('style'); };
        BoxPostList.boxId = 'box-post-list';
        BoxPostList.EVENT_CLICK_HIDDEN_BOX_LIST = 'box-post-list-click-hidden';
        return BoxPostList;
    }());
    exports.default = BoxPostList;
});
//# sourceMappingURL=box-post-list.js.map