/**
 * Hero — Editable wrapper component
 *
 * This file is yours to customize. It won't be overwritten when you re-export.
 * The generated component is in framer-core/Hero.generated.jsx
 *
 * 
 *
 * Example — intercept clicks, add analytics, override props:
 *
 *   export default function Hero(props: HeroProps & { style?: React.CSSProperties; className?: string }) {
 *       return (
 *           <Generated
 *               {...props}
 *               onClick={(e) => {
 *                   track("hero_click")
 *                   props.onClick?.(e)
 *               }}
 *           />
 *       )
 *   }
 */
import Generated from '../framer-core/Hero.generated'
import type { HeroProps } from '../framer-core/Hero.generated'
export type { HeroProps } from '../framer-core/Hero.generated'

export default function Hero(props: HeroProps & { style?: React.CSSProperties; className?: string }) {
    return <Generated {...props} />
}

// Re-export .Responsive for viewport-aware rendering
Hero.Responsive = Generated.Responsive
