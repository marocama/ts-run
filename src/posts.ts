import BoxPostForm from './box-post-form'
import BoxPostList from './box-post-list'
import EventManager from './event-manager'

class PostsPage {
    constructor(private eventManager: EventManager) {
        this.init()
    }

    private init() {
        new BoxPostForm(this.eventManager)
        new BoxPostList(this.eventManager)
    }
}

new PostsPage(new EventManager())