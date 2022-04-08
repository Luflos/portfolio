export default function animals(req, res) {
  const animals =  [
    'cat',
    'dog',
    'penguin',
    'sloth',
    'Pangolin'
  ]

  // get a random animal
  const rando = animals[Math.floor(Math.random() * animals.length)]
  res.status(200).json({ rando })
}