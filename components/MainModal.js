import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';

function loadComponent(name) {
  const Component = React.lazy(() => import(`./Modal_${name}`));
  return Component;
}
function MainModal() {
  const modalId = useSelector(state => state.modal.activeModalId);
  const activeModal = modalId;
  const Component = loadComponent(activeModal);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );
}

export default MainModal;
