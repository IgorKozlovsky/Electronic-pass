import { TouchableOpacity } from 'react-native'
import { IconButtonProps } from 'src/components/IconButton/types'

export const IconButton = ({ icon, onPress }: IconButtonProps) => (
  <TouchableOpacity onPress={onPress}>{icon}</TouchableOpacity>
)
