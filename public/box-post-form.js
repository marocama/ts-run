define(["require", "exports", "./box-post-list"], function (require, exports, box_post_list_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BoxPostForm = /** @class */ (function () {
        function BoxPostForm(eventManager) {
            this.eventManager = eventManager;
            this.buttonListSelector = "#".concat(BoxPostForm.boxId, ">button[type=button]");
            this.init();
        }
        BoxPostForm.prototype.init = function () {
            var _this = this;
            var buttonForm = document.querySelector(this.buttonListSelector);
            buttonForm.addEventListener('click', function () { _this.hiddenBox(), _this.eventManager.runEvent(BoxPostForm.EVENT_CLICK_HIDDEN_BOX_FORM); });
            this.eventManager.addListener(box_post_list_1.default.EVENT_CLICK_HIDDEN_BOX_LIST, function () { _this.showBox(); });
        };
        BoxPostForm.prototype.hiddenBox = function () { document.getElementById(BoxPostForm.boxId).style.display = 'none'; };
        BoxPostForm.prototype.showBox = function () { document.getElementById(BoxPostForm.boxId).removeAttribute('style'); };
        BoxPostForm.boxId = 'box-post-form';
        BoxPostForm.EVENT_CLICK_HIDDEN_BOX_FORM = 'box-post-form-click-hidden';
        return BoxPostForm;
    }());
    exports.default = BoxPostForm;
});
//# sourceMappingURL=box-post-form.js.map