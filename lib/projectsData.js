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
      'Ingested multiple RSS/JSON feeds with scheduled workers.',
      'Normalized content into a unified schema and exposed a filtering API.',
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
      'Built SSR dashboards with Next.js for faster initial load.',
      'Implemented reusable chart widgets and filters with React state.',
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
      'Delivered A/B-testable landing templates with CMS-driven content.',
      'Optimized images and critical CSS for improved Web Vitals.',
      'Shipped accessible components reused across pages.'
    ]
  }
]
