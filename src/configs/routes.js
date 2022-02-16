import React from 'react'

const Dashboard = React.lazy(() => import('../views/dashboard/Dashboard'))

const sso = React.lazy(() => import('../views/sso/sso'))

// USER
const Users = React.lazy(() => import('../views/users/Collection/Controller'))
const User = React.lazy(() => import('../views/users/Model/Controller'))

// IDENTITY
const Identities = React.lazy(() => import('../views/identities/Collection/Controller'))
const Identity = React.lazy(() => import('../views/identities/Model/Controller'))

// CLIENT
const Clients = React.lazy(() => import('../views/client/Collection/Controller'))
const Client = React.lazy(() => import('../views/client/Model/Controller'))

// CONSENT
const Consent = React.lazy(() => import('../views/consent/Controller'))

// QRCode
const QRCode = React.lazy(() => import('../views/qrcode/Controller'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/sso', name: 'Client', component: sso },
  /**
   * USER
   */
  { path: '/users', name: 'Users', component: Users },
  { path: '/user/:userId', name: 'User', component: User },
  { path: '/user', name: 'User', component: User },
  /*********/
  /* IDENTITY */
  { path: '/identities', name: 'Clients', component: Identities },
  { path: '/identity/:identityId', name: 'Client', component: Identity },
  { path: '/identity', name: 'Client', component: Identity },
  /*********/
  /* CLIENT */
  { path: '/clients', name: 'Clients', component: Clients },
  { path: '/client/:clientId', name: 'Client', component: Client },
  { path: '/client', name: 'Client', component: Client },
  /*********/
  /* CONSENT */
  { path: '/consent', name: 'Consent', component: Consent },
  /*********/
  /* QRCODE */
  { path: '/qrcode', name: 'QRCode', component: QRCode },
  /*********/
]

export default routes
