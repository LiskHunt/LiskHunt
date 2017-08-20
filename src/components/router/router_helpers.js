export const goHome = function() {
  this.context.router.history.push('/');
};

export const goResourcesList = function() {
  this.context.router.history.push('/recommended');
};

export const goBuildSomething = function() {
  this.context.router.history.push('/lets-build-something');
};

export const goCheers = function() {
  this.context.router.history.push('/cheers');
};

export const isActive = function(routeName) {
  return this.context.router.route.location.pathname === routeName ? 'is-active' : '';
};
