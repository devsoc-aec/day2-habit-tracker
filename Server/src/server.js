import express from 'express'
import cors from 'cors'

const app = express()
const PORT = 5000

// Middleware
app.use(cors())
app.use(express.json())

// In-memory storage
let habits = [
  { id: 1, name: 'Exercise', streak: 5, lastCompleted: new Date().toISOString() },
  { id: 2, name: 'Read', streak: 3, lastCompleted: new Date().toISOString() }
]
let completions = []

// Routes
app.get('/api/data', (req, res) => {
  res.json([])
})

app.get('/api/habits', (req, res) => {
  res.json(habits)
})

app.post('/api/habits', (req, res) => {
  const habit = { id: Date.now(), ...req.body, streak: 0 }
  habits.push(habit)
  res.json(habit)
})

app.post('/api/habits/:id/complete', (req, res) => {
  const habit = habits.find(h => h.id === parseInt(req.params.id))
  if (habit) {
    habit.streak++
    habit.lastCompleted = new Date().toISOString()
    completions.push({ habitId: habit.id, date: new Date().toISOString() })
  }
  res.json(habit)
})

app.delete('/api/habits/:id', (req, res) => {
  habits = habits.filter(h => h.id !== parseInt(req.params.id))
  res.json({ message: 'Deleted' })
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
