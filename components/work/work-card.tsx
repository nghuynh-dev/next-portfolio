import { Work } from '@/models';
import { Box, Chip, Stack, Typography } from '@mui/material';
import Image from 'next/image';

export interface WorkCardProps {
  work: Work
}

export function WorkCard({ work }: WorkCardProps) {
  let year = new Date(Number(work.createdAt)).getFullYear()
  return (
    <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
      <Box width={{ xs: '100%', sm: '246px' }} flexShrink={0}>
        <Image src={work.thumbnailUrl} width={246} height={180} alt={work.title} />
      </Box>

      <Box>
        <Typography variant="h4" fontWeight="bold">{work.title}</Typography>
        <Stack direction="row" my={2}>
          <Chip color='secondary' label={year} size='small' />
          <Typography color="GrayText" ml={3}>{work.tagList.join(', ')}</Typography>
        </Stack>
        <Typography>{work.shortDescription}</Typography>
      </Box>
    </Stack>
  );
}
