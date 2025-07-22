import * as React from "react"
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible"
import { cn } from "@/lib/utils"

const Collapsible = CollapsiblePrimitive.Root

const CollapsibleTrigger = React.forwardRef(
  ({ className, ...props }, ref) => (
    <CollapsiblePrimitive.CollapsibleTrigger
      ref={ref}
      className={cn(
        "flex items-center justify-between w-full px-4 py-2 text-sm font-medium transition-all hover:bg-accent focus:outline-none focus:ring-2 focus:ring-ring",
        className
      )}
      {...props}
    />
  )
)
CollapsibleTrigger.displayName = CollapsiblePrimitive.CollapsibleTrigger.displayName

const CollapsibleContent = React.forwardRef(
  ({ className, ...props }, ref) => (
    <CollapsiblePrimitive.CollapsibleContent
      ref={ref}
      className={cn(
        "overflow-hidden transition-all data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up",
        className
      )}
      {...props}
    />
  )
)
CollapsibleContent.displayName = CollapsiblePrimitive.CollapsibleContent.displayName

export { Collapsible, CollapsibleTrigger, CollapsibleContent }
