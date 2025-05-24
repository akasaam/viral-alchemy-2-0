import type React from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

interface CardWithTruncateProps {
  title?: string
  description?: string
  content?: React.ReactNode
  footer?: React.ReactNode
  className?: string
  height?: string
  children?: React.ReactNode
}

export function CardWithTruncate({
  title,
  description,
  content,
  footer,
  className = "",
  height = "auto",
  children,
}: CardWithTruncateProps) {
  return (
    <Card className={`overflow-hidden ${className}`} style={{ height }}>
      {children ? (
        children
      ) : (
        <>
          {(title || description) && (
            <CardHeader>
              {title && <CardTitle>{title}</CardTitle>}
              {description && <CardDescription>{description}</CardDescription>}
            </CardHeader>
          )}
          {content && (
            <CardContent className="flex-grow overflow-hidden">
              <div className="line-clamp-[12]">{content}</div>
            </CardContent>
          )}
          {footer && <CardFooter className="mt-auto">{footer}</CardFooter>}
        </>
      )}
    </Card>
  )
}
