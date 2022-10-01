import React, { Suspense } from 'react';

function loadComponent(name) {
  const Component = React.lazy(() => import(`./Modal_${name}`));
  return Component;
}
function MainModal() {
  const componentNumber = 3;
  const Component = loadComponent(componentNumber);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );
}

export default MainModal;
