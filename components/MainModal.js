import React, { Suspense } from 'react';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';

function loadComponent(name) {
  const Component = React.lazy(() => import(`./Modal_${name}`));
  return Component;
}
function MainModal() {
  const router = useRouter();
  const id = router.query.id;
  const Component = loadComponent(id);

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Component />
    </Suspense>
  );
}

export default MainModal;
