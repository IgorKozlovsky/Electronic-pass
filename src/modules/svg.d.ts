declare module '*.svg' {
  import { SVGProps } from 'react-native-svg'

  type SvgComponent = (props: SVGProps) => JSX.Element

  const content: SvgComponent

  export default content
}
