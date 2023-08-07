// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

// export default function hello(req, res) {
//   res.status(200).json({ name: 'John Doe' })
// }

export default function hello(req, res) {
  const {
    query: { id,test },
    method,
  } = req

  const { title ,email} = req.body

  switch (method) {
    case 'GET':
      res.status(200).json({ id, title: "GET OK" ,test:test})
      break
    case 'PUT':
      res.status(200).json({ id, title: "PUT OK" ,email:email})
      break
    case 'POST':
      res.status(200).json({ id, title: "POST OK" })
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}

