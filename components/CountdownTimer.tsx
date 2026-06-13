'use client'

import { useState, useEffect } from 'react'

interface CountdownTimerProps {
  targetDate: string
  label: string
}

interface TimeLeft {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function CountdownTimer({ targetDate, label }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      let targetTime = new Date(targetDate).getTime()
      const now = new Date().getTime()

      // If date has passed this year, calculate for next year
      if (targetTime < now) {
        const nextYear = new Date(targetDate)
        nextYear.setFullYear(nextYear.getFullYear() + 1)
        targetTime = nextYear.getTime()
      }

      const difference = targetTime - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <div className="flex gap-4 justify-center my-6">
      {[
        { value: timeLeft.days, label: 'Days' },
        { value: timeLeft.hours, label: 'Hours' },
        { value: timeLeft.minutes, label: 'Minutes' },
        { value: timeLeft.seconds, label: 'Seconds' },
      ].map((item) => (
        <div
          key={item.label}
          className="flex flex-col items-center px-4 py-3 border-2 rounded-lg"
          style={{ borderColor: '#7F77DD' }}
        >
          <div className="text-2xl font-bold" style={{ color: '#534AB7' }}>
            {String(item.value).padStart(2, '0')}
          </div>
          <div className="text-xs mt-1" style={{ color: 'var(--color-text-secondary)' }}>
            {item.label}
          </div>
        </div>
      ))}
    </div>
  )
}
