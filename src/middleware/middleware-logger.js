const middlewareLogger = store => next => action => {
    console.log('Original State:', store.getState());
    console.log('Current Action:', action);
    next(action);
};

export default middlewareLogger;