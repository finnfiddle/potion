import { configure } from '@storybook/react';

function loadStories() {
    require('../packages/element/stories/index.stories')
    // require('../packages/layout/stories/index.stories')
    // require('../packages/extra/stories/index.stories')
}

configure(loadStories, module);
