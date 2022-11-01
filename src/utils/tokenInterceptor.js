import api from '../api/axios';
import { useState, useEffect, useRef, useContext } from 'react';

import AuthContext from '../contexts/AuthProvider';
import { accountService } from '_services';


const authContext = useContext(AuthContext);

export function attachToken(token) {
    api.interceptors.request.use(request => {
        request.headers.common.Authorization = `Bearer ${account.token}`;
        return request;
    });


}