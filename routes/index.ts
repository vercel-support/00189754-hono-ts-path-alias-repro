import { Hono } from 'hono'

import auth from '@route/auth/index'


export const config = {
  runtime: 'edge',
};
const routes = new Hono()

routes.route('/auth', auth)

export default routes
