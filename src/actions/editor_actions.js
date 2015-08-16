import alt from '../alt';

class EditorActions {
    constructor() {
        this.generateActions('updateMarkdown');
    }
}

export default alt.createActions(EditorActions);
