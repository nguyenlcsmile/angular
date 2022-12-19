import { createReducer, on } from '@ngrx/store';
import { getUser } from './user.actions';

export const users = {
    'isAuthenticate': false,
    'information': {
        'username': '',
        'email': ''
    }
};

export const getUserReducer = createReducer(
    users,
    on(getUser, (user) => {
        return {...users, user}
    })
);