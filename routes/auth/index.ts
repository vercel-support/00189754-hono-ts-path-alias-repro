import { Hono } from 'hono'

import { login } from '@route/auth/login'


export const config = {
  runtime: 'edge',
};

const auth = new Hono()

auth.post('/', login)

export default auth
