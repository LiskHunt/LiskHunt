export const goHome = '/';
export const goResourcesList = '/recommended';
export const goBuildSomething = '/lets-build-something';
export const goCheers = '/cheers';
export const goSubmitHunt = '/submit-hunt';
export const goNewToLisk = '/new-to-lisk';
export const goDelegatesList = '/cool-delegates';
export const goDelegateProfile = '/delegate-profile';

export const goResource = function(resource_name) {
  this.context.router.history.push('/resource/' + resource_name);
};

export const isActive = function(routeName) {
    return this.context.router.route.location.pathname === routeName ? 'is-active' : '';
};


