import ComponentView from 'core/js/views/componentView';

class VideoLoopView extends ComponentView {
  postRender() {
    this.setReadyStatus();
    this.setupInview();
  }

  setupInview() {
    this.setupInviewCompletion('.component__inner');
  }
}

VideoLoopView.template = 'videoLoop.jsx';

export default VideoLoopView;
