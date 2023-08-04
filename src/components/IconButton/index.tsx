import { StyledIconButton } from 'src/components/IconButton/styles'
import { IconButtonProps } from 'src/components/IconButton/types'

export const IconButton = ({ icon, onPress }: IconButtonProps) => (
  <StyledIconButton onPress={onPress}>{icon}</StyledIconButton>
)
