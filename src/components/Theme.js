import React from 'react';

const Theme = (WrappedComponent) => ({theme, ...props}) => <WrappedComponent {...props} theme={theme} />

export default Theme
