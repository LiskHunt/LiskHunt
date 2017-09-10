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

export const goSubmitHunt = function() {
  this.context.router.history.push('/submit-hunt');
};

export const goNewToLisk = function() {
  this.context.router.history.push('/new-to-lisk');
};

export const goDelegatesList = function() {
  this.context.router.history.push('/cool-delegates');
};

export const goResource = function(resource_name) {
  console.log(resource_name);
  this.context.router.history.push('/resource/' + resource_name);
};

export const isActive = function(routeName) {
  return this.context.router.route.location.pathname === routeName ? 'is-active' : '';
};
