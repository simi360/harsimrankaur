import React from 'react';
import ReactDelayRender from 'react-delay-render';

const Loading = () => <div>Loading</div>;

export default ReactDelayRender({ delay: 1000 })(Loading);
