import { Box, IconButton, Tooltip } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ThumbUpIcon from '@mui/icons-material/ThumbUp'

interface ReactionProps {
  messageId: string
  reactions?: Record<string, number>
  onReact: (messageId: string, reaction: string) => void
}

export const Reaction = ({
  messageId,
  reactions = {},
  onReact,
}: ReactionProps) => {
  return (
    <Box sx={{ display: 'flex', gap: '8px' }}>
      {Object.entries(reactions).map(([emoji, count]) => (
        <Tooltip key={emoji} title={`${count} reactions`}>
          <Box
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              padding: '4px 8px',
              borderRadius: '12px',
              fontSize: '14px',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              cursor: 'pointer',
            }}
            onClick={() => onReact(messageId, emoji)}
          >
            {emoji} {count}
          </Box>
        </Tooltip>
      ))}

      <IconButton onClick={() => onReact(messageId, '❤️')}>
        <FavoriteIcon color="error" />
      </IconButton>
      <IconButton onClick={() => onReact(messageId, '👍')}>
        <ThumbUpIcon color="primary" />
      </IconButton>
    </Box>
  )
}
