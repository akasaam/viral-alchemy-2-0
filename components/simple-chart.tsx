"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useEffect, useRef } from "react"

interface SimpleChartProps {
  title: string
  data: { date: string; [key: string]: any }[]
  dataKey: string
  valueFormatter?: (value: number) => string
}

export function SimpleChart({ title, data, dataKey, valueFormatter = (value) => value.toString() }: SimpleChartProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current || !data.length) return

    const canvas = canvasRef.current
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    // Set dimensions
    const width = canvas.width
    const height = canvas.height
    const padding = { top: 20, right: 20, bottom: 30, left: 40 }
    const chartWidth = width - padding.left - padding.right
    const chartHeight = height - padding.top - padding.bottom

    // Find min and max values
    const values = data.map((item) => item[dataKey] as number)
    const maxValue = Math.max(...values) * 1.1 // Add 10% padding
    const minValue = Math.min(0, ...values) // Start from 0 or lower if there are negative values

    // Draw axes
    ctx.beginPath()
    ctx.strokeStyle = "#e2e8f0"
    ctx.moveTo(padding.left, padding.top)
    ctx.lineTo(padding.left, height - padding.bottom)
    ctx.lineTo(width - padding.right, height - padding.bottom)
    ctx.stroke()

    // Draw y-axis labels
    ctx.fillStyle = "#64748b"
    ctx.font = "10px sans-serif"
    ctx.textAlign = "right"
    ctx.textBaseline = "middle"

    const yLabelCount = 5
    for (let i = 0; i <= yLabelCount; i++) {
      const value = minValue + ((maxValue - minValue) * (yLabelCount - i)) / yLabelCount
      const y = padding.top + (chartHeight * i) / yLabelCount
      ctx.fillText(valueFormatter(value), padding.left - 5, y)
    }

    // Draw x-axis labels (show only a few to avoid overcrowding)
    ctx.textAlign = "center"
    ctx.textBaseline = "top"

    const labelStep = Math.ceil(data.length / 6) // Show about 6 labels
    for (let i = 0; i < data.length; i += labelStep) {
      const x = padding.left + (chartWidth * i) / (data.length - 1)
      const date = new Date(data[i].date)
      const label = `${date.getDate()}/${date.getMonth() + 1}`
      ctx.fillText(label, x, height - padding.bottom + 5)
    }

    // Draw data line
    ctx.beginPath()
    ctx.strokeStyle = "hsl(267, 100%, 56%)"
    ctx.lineWidth = 2

    for (let i = 0; i < data.length; i++) {
      const x = padding.left + (chartWidth * i) / (data.length - 1)
      const valueRatio = (data[i][dataKey] - minValue) / (maxValue - minValue)
      const y = height - padding.bottom - chartHeight * valueRatio

      if (i === 0) {
        ctx.moveTo(x, y)
      } else {
        ctx.lineTo(x, y)
      }
    }
    ctx.stroke()

    // Draw data points
    for (let i = 0; i < data.length; i++) {
      const x = padding.left + (chartWidth * i) / (data.length - 1)
      const valueRatio = (data[i][dataKey] - minValue) / (maxValue - minValue)
      const y = height - padding.bottom - chartHeight * valueRatio

      ctx.beginPath()
      ctx.fillStyle = "hsl(267, 100%, 56%)"
      ctx.arc(x, y, 3, 0, Math.PI * 2)
      ctx.fill()
    }
  }, [data, dataKey, valueFormatter])

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[200px] w-full">
          <canvas ref={canvasRef} width={500} height={200} className="h-full w-full" />
        </div>
      </CardContent>
    </Card>
  )
}
