import React from 'react';
export const ErrorMessage = ({ text = '', show = false }) => {
    if (!show)
        return null;

    return <div className='font-pop text-red text-sm text-right'>{text}</div>;
};
