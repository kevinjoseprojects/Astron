import * as React from '\x72\x65\x61\x63\x74';
import { Slot, } from '\x40\x72\x61\x64\x69\x78\x2d\x75\x69\x2f\x72\x65\x61\x63\x74\x2d\x73\x6c\x6f\x74';
import { cva, } from '\x63\x6c\x61\x73\x73\x2d\x76\x61\x72\x69\x61\x6e\x63\x65\x2d\x61\x75\x74\x68\x6f\x72\x69\x74\x79';

import { cn, } from '\x40\x2f\x6c\x69\x62\x2f\x75\x74\x69\x6c\x73';

const buttonVariants = cva(
"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
{
variants: {
variant: {
default: 'bg-primary text-primary-foreground shadow-xs hover:bg-primary/90',
destructive: 'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60',
outline: 'border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50',
secondary: 'bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80',
ghost: 'hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
link: 'text-primary underline-offset-4 hover:underline',
},
size: {
default: 'h-9 px-4 py-2 has-[>svg]:px-3',
sm: 'h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5',
lg: 'h-10 rounded-md px-6 has-[>svg]:px-4',
icon: 'size-9',
},
},
defaultVariants: {
variant: 'default',
size: 'default',
},
},
);

function Button(
{
className,
variant,
size,
asChild = false,
...props
},
) {
const Comp = asChild ? Slot : '\x62\x75\x74\x74\x6f\x6e';

return (
<Comp
data-slot='\x62\x75\x74\x74\x6f\x6e'
className={cn(
buttonVariants(
{
variant,
size,
className,
},
),
)}
{...props}
/>
);
}

export { Button, buttonVariants, };
