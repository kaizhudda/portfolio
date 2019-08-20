import Typography from "typography"


const typography = new Typography({
  googleFonts: [
    {
      name: 'Nunito Sans',
      styles: [
        '300',
        '400',
        '600',
        '700',
        '800',
        '900'
      ],
    },
  ],
  baseFontSize: '10px',
  baseLineHeight: 1.666,
  headerFontFamily: ['Nunito Sans', 'sans-serif'],
  bodyFontFamily: ['Nunito Sans', 'sans-serif'],
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
