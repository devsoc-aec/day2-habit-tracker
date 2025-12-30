import { useState, useEffect } from 'react'

function App() {
  const [habits, setHabits] = useState([])
  const [newHabitName, setNewHabitName] = useState('')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    fetchHabits()
  }, [])

  const fetchHabits = async () => {
    setLoading(true)
    try {
      const response = await fetch('http://localhost:5000/api/habits')
      const data = await response.json()
      setHabits(data)
    } catch (error) {
      console.error('Error fetching habits:', error)
    } finally {
      setLoading(false)
    }
  }

  const addHabit = async (e) => {
    e.preventDefault()
    if (!newHabitName.trim()) return

    try {
      const response = await fetch('http://localhost:5000/api/habits', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: newHabitName })
      })
      const data = await response.json()
      setHabits([...habits, data])
      setNewHabitName('')
    } catch (error) {
      console.error('Error adding habit:', error)
    }
  }

  const completeHabit = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/api/habits/${id}/complete`, {
        method: 'POST'
      })
      const data = await response.json()
      setHabits(habits.map(h => h.id === id ? data : h))
    } catch (error) {
      console.error('Error completing habit:', error)
    }
  }

  const deleteHabit = async (id) => {
    try {
      await fetch(`http://localhost:5000/api/habits/${id}`, {
        method: 'DELETE'
      })
      setHabits(habits.filter(h => h.id !== id))
    } catch (error) {
      console.error('Error deleting habit:', error)
    }
  }

  return (
    <div className="container">
      <h1 style={{ textAlign: 'center', margin: '20px 0', color: '#333' }}>
        🎯 Habit Tracker
      </h1>

      <div className="card">
        <h2>Add New Habit</h2>
        <form onSubmit={addHabit} style={{ display: 'flex', gap: '10px' }}>
          <input
            type="text"
            placeholder="Enter habit name (e.g., Exercise, Read, Meditate)"
            value={newHabitName}
            onChange={(e) => setNewHabitName(e.target.value)}
            style={{ flex: 1, marginBottom: 0 }}
          />
          <button type="submit">Add Habit</button>
        </form>
      </div>

      {loading ? (
        <div className="card">
          <p>Loading habits...</p>
        </div>
      ) : (
        <>
          {habits.length === 0 ? (
            <div className="card">
              <p style={{ textAlign: 'center', color: '#666' }}>
                No habits yet. Add your first habit above!
              </p>
            </div>
          ) : (
            <div className="card">
              <h2>My Habits ({habits.length})</h2>
              <div style={{ display: 'grid', gap: '15px', marginTop: '15px' }}>
                {habits.map(habit => (
                  <div
                    key={habit.id}
                    className="card"
                    style={{
                      margin: 0,
                      background: '#f8f9fa',
                      border: '2px solid #e9ecef'
                    }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ flex: 1 }}>
                        <h3 style={{ margin: '0 0 10px 0', color: '#333' }}>
                          {habit.name}
                        </h3>
                        <div style={{ display: 'flex', gap: '20px', fontSize: '14px', color: '#666' }}>
                          <span>
                            🔥 Streak: <strong>{habit.streak} days</strong>
                          </span>
                          <span>
                            📅 Last: {new Date(habit.lastCompleted).toLocaleDateString()}
                          </span>
                        </div>
                      </div>
                      <div style={{ display: 'flex', gap: '10px' }}>
                        <button
                          onClick={() => completeHabit(habit.id)}
                          style={{ backgroundColor: '#28a745' }}
                        >
                          ✓ Complete
                        </button>
                        <button
                          onClick={() => deleteHabit(habit.id)}
                          style={{ backgroundColor: '#dc3545' }}
                        >
                          Delete
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {habits.length > 0 && (
            <div className="card" style={{ background: '#e7f3ff' }}>
              <h3 style={{ margin: '0 0 10px 0' }}>📊 Statistics</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '15px' }}>
                <div>
                  <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>Total Habits</p>
                  <p style={{ margin: '5px 0 0 0', fontSize: '24px', fontWeight: 'bold', color: '#007bff' }}>
                    {habits.length}
                  </p>
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>Longest Streak</p>
                  <p style={{ margin: '5px 0 0 0', fontSize: '24px', fontWeight: 'bold', color: '#28a745' }}>
                    {Math.max(...habits.map(h => h.streak), 0)} days
                  </p>
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: '14px', color: '#666' }}>Total Streaks</p>
                  <p style={{ margin: '5px 0 0 0', fontSize: '24px', fontWeight: 'bold', color: '#ffc107' }}>
                    {habits.reduce((sum, h) => sum + h.streak, 0)} days
                  </p>
                </div>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  )
}

export default App
