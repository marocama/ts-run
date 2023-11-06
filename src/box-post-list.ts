import BoxPostForm from './box-post-form'
import EventManager from './event-manager'

export default class BoxPostList{

    static boxId = 'box-post-list'
    static EVENT_CLICK_HIDDEN_BOX_LIST = 'box-post-list-click-hidden'
    private buttonFormSelector = `#${BoxPostList.boxId}>button[type=button]`

    constructor(private eventManager: EventManager) {
        this.init()
    }

    private init() {
        const buttonList = document.querySelector(this.buttonFormSelector)

        buttonList.addEventListener('click', () => { this.hiddenBox(), this.eventManager.runEvent(BoxPostList.EVENT_CLICK_HIDDEN_BOX_LIST) })

        this.eventManager.addListener(BoxPostForm.EVENT_CLICK_HIDDEN_BOX_FORM, () => { this.showBox() })
    }

    hiddenBox() { document.getElementById(BoxPostList.boxId).style.display = 'none' }

    showBox() { document.getElementById(BoxPostList.boxId).removeAttribute('style') }
}