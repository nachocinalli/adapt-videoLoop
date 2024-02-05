import components from 'core/js/components';
import VideoLoopView from './VideoLoopView';
import VideoLoopModel from './VideoLoopModel';

export default components.register('videoLoop', {
  model: VideoLoopModel,
  view: VideoLoopView
});
