import alt from '../alt';
import EditorActions from '../actions/editor_actions';

class EditorStore {
    constructor() {
        this.markdown = "";

        this.bindListeners({
            handleUpdateMarkdown: EditorActions.UPDATE_MARKDOWN
        });
    }

    handleUpdateMarkdown(markdown) {
        this.markdown = markdown;
    }
}

export default alt.createStore(EditorStore, 'EditorStore');
