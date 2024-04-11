'use client';

import axios from 'axios';
import { TextEncoder, TextDecoder } from 'text-encoding-utf-8';

export const API_BASE_URL = 'http://localhost:8080/api';

global.TextEncoder = TextEncoder;
global.TextDecoder = TextDecoder;

const api = axios.create({
  baseURL: API_BASE_URL,
});

let jwt = ''; // Initialize jwt variable

if (typeof window !== 'undefined') {
  // Check if window is defined (i.e., we're in the browser environment)
  jwt = localStorage.getItem('jwt');
}

// const jwt = window.localStorage.getItem('jwt');
// const token = localStorage.getItem('jwt');

api.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;

api.defaults.headers.post['Content-Type'] = 'application/json';

export { api };
