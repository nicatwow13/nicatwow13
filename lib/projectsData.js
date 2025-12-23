import { FaNodeJs, FaReact } from 'react-icons/fa'
import { SiTypescript, SiExpress, SiNextdotjs, SiTailwindcss } from 'react-icons/si'

export const skillIconMap = {
  node: FaNodeJs,
  express: SiExpress,
  typescript: SiTypescript,
  tailwind: SiTailwindcss,
  react: FaReact,
  nextjs: SiNextdotjs
}

export const projects = [
  {
    slug: 'es6-node-express-boilerplate',
    title: 'ES6 Node-Express Boilerplate',
    date: 'Jan 2024',
    skills: [
      { icon: 'node', label: 'Node.js' },
      { icon: 'express', label: 'Express' },
      { icon: 'typescript', label: 'TypeScript' }
    ],
    highlights: [
      {
        text: 'Built a stateless checkout API with Stripe webhooks for payments and refunds.',
        code: `router.post('/checkout', async (req, res) => {
  const session = await stripe.checkout.sessions.create({
    customer_email: req.user.email,
    line_items: req.body.items,
    mode: 'payment'
  });

  res.json({ sessionId: session.id });
});`
      },
      {
        text: 'Added request validation and rate limiting on public endpoints.',
        code: `const limiter = rateLimit({ windowMs: 60_000, limit: 120 });

router.post(
  '/orders',
  limiter,
  validate(orderSchema),
  asyncHandler(async (req, res) => {
    const order = await orderService.create(req.body);
    res.status(201).json(order);
  })
);`
      },
      {
        text: 'Implemented modular service layer and integration tests for core flows.',
        code: `describe('orders > create', () => {
  it('returns 201 with persisted order', async () => {
    const payload = buildOrderPayload();
    const res = await request(app).post('/orders').send(payload);

    expect(res.status).toBe(201);
    expect(await db.orders.count()).toBe(1);
  });
});`
      }
    ]
  },
  {
    slug: 'aws-cognito-with-node-js',
    title: 'AWS Cognito with Node.js',
    date: 'Sep 2023',
    skills: [
      { icon: 'node', label: 'Node.js' },
      { icon: 'express', label: 'Express' },
      { icon: 'tailwind', label: 'Tailwind' }
    ],
    highlights: [
      {
        text: 'Provisioned Cognito User Pool + App Client for email/password auth with JWT verification middleware.',
        code: `import { CognitoJwtVerifier } from 'aws-jwt-verify';

const verifier = CognitoJwtVerifier.create({
  userPoolId: process.env.COGNITO_POOL_ID,
  tokenUse: 'id',
  clientId: process.env.COGNITO_CLIENT_ID
});

export async function requireAuth(req, res, next) {
  const token = req.headers.authorization?.replace('Bearer ', '');
  if (!token) return res.status(401).json({ error: 'Missing token' });
  req.user = await verifier.verify(token);
  next();
}`
      },
      {
        text: 'Wrapped Cognito sign-up/sign-in flows with typed helpers and error normalization.',
        code: `import {
  CognitoIdentityProviderClient,
  SignUpCommand,
  InitiateAuthCommand
} from '@aws-sdk/client-cognito-identity-provider';

const client = new CognitoIdentityProviderClient({ region: process.env.AWS_REGION });

export async function signIn(email, password) {
  const command = new InitiateAuthCommand({
    AuthFlow: 'USER_PASSWORD_AUTH',
    ClientId: process.env.COGNITO_CLIENT_ID,
    AuthParameters: { USERNAME: email, PASSWORD: password }
  });
  const { AuthenticationResult } = await client.send(command);
  return AuthenticationResult;
}`
      },
      'Delivered a responsive admin UI with Tailwind for moderation.'
    ]
  },
  {
    slug: 'dashboard-template',
    title: 'Dashboard Template',
    date: 'May 2024',
    skills: [
      { icon: 'react', label: 'React' },
      { icon: 'nextjs', label: 'Next.js' },
      { icon: 'tailwind', label: 'Tailwind' }
    ],
    highlights: [
      {
        text: 'Built SSR dashboards with Next.js and cached data loaders.',
        code: `export const getServerSideProps = async () => {
  const [metrics, revenue] = await Promise.all([
    getMetrics({ range: '30d' }),
    getRevenue({ range: '30d' })
  ]);

  return { props: { metrics, revenue } };
};`
      },
      {
        text: 'Implemented filterable widgets with shared query state.',
        code: `function DashboardFilters({ value, onChange }) {
  return (
    <div className="flex gap-3">
      <select value={value.range} onChange={(e) => onChange({ ...value, range: e.target.value })}>
        <option value="7d">Last 7d</option>
        <option value="30d">Last 30d</option>
      </select>
      <select value={value.segment} onChange={(e) => onChange({ ...value, segment: e.target.value })}>
        <option value="all">All users</option>
        <option value="paid">Paid</option>
      </select>
    </div>
  );
}`
      },
      'Styled a cohesive design system with Tailwind utility tokens.'
    ]
  },
  {
    slug: 'widgets-library',
    title: 'Widgets Library',
    date: 'Nov 2023',
    skills: [
      { icon: 'react', label: 'React' },
      { icon: 'nextjs', label: 'Next.js' },
      { icon: 'tailwind', label: 'Tailwind' }
    ],
    highlights: [
      {
        text: 'Published composable UI widgets with prop-driven variants.',
        code: `export function StatCard({ label, value, delta }) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
      <p className="text-sm text-slate-500">{label}</p>
      <div className="flex items-baseline gap-2">
        <span className="text-2xl font-semibold text-slate-900">{value}</span>
        {delta ? <span className="text-sm text-emerald-600">+{delta}%</span> : null}
      </div>
    </div>
  );
}`
      },
      {
        text: 'Exported theme tokens and dark-mode friendly defaults.',
        code: `export const theme = {
  radius: {
    sm: '10px',
    md: '14px',
    lg: '20px'
  },
  colors: {
    surface: 'var(--surface)',
    border: 'var(--border)',
    accent: '#2563eb'
  }
};`
      },
      'Shipped accessible components reused across pages.'
    ]
  }
]
