import React from 'react';

export default interface IStateProvider<T> {
    reducer: any;
    initialState: T;
    children: React.ReactNode;
}